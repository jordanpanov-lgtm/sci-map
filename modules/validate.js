'use strict';
/*
 * Sci-Map folio validator — zero dependencies (pure Node).
 *
 * Two tiers:
 *   ERROR   — structural or referential breakage. Exits non-zero → fails CI.
 *   WARNING — editorial/consistency nits (e.g. non-reciprocated links). Reported, never blocks.
 *
 * Run:  node modules/validate.js
 * The human contract is FIELD_GUIDE.md; the portable machine contract is modules/schema.json.
 */
const fs   = require('fs');
const path = require('path');

const DIR = path.join(__dirname);
const CANON = ['theory', 'study', 'effect', 'concept', 'method', 'figure', 'debate', 'application'];
const PREFIX = { theory: 'th', study: 'st', effect: 'ef', concept: 'co', method: 'me', figure: 'fg', debate: 'db', application: 'ap' };
const DOMAINS = ['formal-computing', 'physical-sciences', 'earth-space', 'life-sciences', 'human-biology', 'psychology', 'language', 'society', 'civics', 'philosophy'];
const REPL = ['robust', 'mixed', 'failed'];
const REQUIRED_ENTRY = ['id', 'group', 'label', 'date', 'loc', 'coords', 'links', 'hint', 'tag', 'note'];
const FORBIDDEN_ENTRY = ['fig', 'cat', 'groups'];
const REQUIRED_FOLIO = ['id', 'title', 'subtitle', 'period', 'domain', 'mapCenter', 'mapZoom', 'methodology', 'categories', 'timeline'];
const ID_RE = /^(th|st|ef|co|me|fg|db|ap)[0-9]+$/;
const XLINK_RE = /^[a-z0-9-]+::(th|st|ef|co|me|fg|db|ap)[0-9]+$/;
const KNOWN_TAGS = new Set([
  'THEORY', 'MODEL', 'FRAMEWORK', 'HYPOTHESIS', 'EXPERIMENT', 'FIELD STUDY', 'CASE STUDY',
  'NATURAL EXPERIMENT', 'OBSERVATION', 'NEUROIMAGING', 'NEUROPSYCHOLOGY', 'EFFECT', 'PHENOMENON',
  'BIAS', 'META-ANALYSIS', 'REPLICATION', 'FAILED REPLICATION', 'SYNTHESIS', 'CONCEPT', 'CONSTRUCT',
  'SCALE', 'MEASURE', 'INSTRUMENT', 'LAW', 'PRINCIPLE', 'DISCOVERY', 'PIONEER', 'METHOD', 'TECHNIQUE',
  'REMOTE SENSING', 'DATASET', 'FIGURE', 'CLINICAL APPLICATION', 'APPLICATION', 'DEBATE', 'DISPUTE',
  'REVISION', 'CONTESTED', 'OPEN QUESTION', 'STUDY',
]);

const errors = [];
const warns = [];
const err = (folio, msg) => errors.push(`${folio}: ${msg}`);
const warn = (folio, msg) => warns.push(`${folio}: ${msg}`);

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.json') && !f.startsWith('_') && f !== 'schema.json').sort();

// ── Pass 1: parse every folio, collect all global keys for xlink resolution ──
const folios = {};
const globalKeys = new Set();
for (const file of files) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
  } catch (e) {
    err(file, `JSON parse failed — ${e.message}`);
    continue;
  }
  if (!data.id) { err(file, 'missing top-level "id"'); continue; }
  folios[data.id] = { file, data };
  for (const cat of (data.categories || [])) {
    for (const e of (cat.entries || [])) globalKeys.add(`${data.id}::${e.id}`);
  }
}

// ── Pass 2: validate each folio ──
for (const folioId of Object.keys(folios)) {
  const { file, data } = folios[folioId];

  // folio-level required fields
  for (const f of REQUIRED_FOLIO) {
    if (data[f] === undefined) err(file, `missing folio field "${f}"`);
  }
  if (data.domain !== undefined && !DOMAINS.includes(data.domain)) {
    err(file, `domain "${data.domain}" not in allowed set (${DOMAINS.join(', ')})`);
  }

  // categories: exactly 8, canonical order
  const catIds = (data.categories || []).map(c => c.id);
  if (catIds.length !== 8 || catIds.some((id, i) => id !== CANON[i])) {
    err(file, `categories must be exactly these 8 in order: ${CANON.join(' → ')} (got: ${catIds.join(', ') || 'none'})`);
  }

  // entries
  const ids = new Set();
  const byId = {};
  for (const cat of (data.categories || [])) {
    for (const e of (cat.entries || [])) {
      byId[e.id] = { e, catId: cat.id };
      const tag = `${folioId}::${e.id}`;

      // duplicate ids
      if (ids.has(e.id)) err(file, `duplicate entry id "${e.id}"`);
      ids.add(e.id);

      // required + forbidden fields
      for (const rf of REQUIRED_ENTRY) {
        if (e[rf] === undefined) err(file, `${e.id}: missing required field "${rf}"`);
      }
      for (const ff of FORBIDDEN_ENTRY) {
        if (e[ff] !== undefined) err(file, `${e.id}: forbidden field "${ff}" present`);
      }

      // id prefix must match its category
      if (!ID_RE.test(e.id)) {
        err(file, `${e.id}: id must match <prefix><number>`);
      } else if (!e.id.startsWith(PREFIX[cat.id])) {
        err(file, `${e.id}: id prefix does not match category "${cat.id}" (expected "${PREFIX[cat.id]}")`);
      }

      // coords: null or [lat,lng] in range
      if (e.coords !== null && e.coords !== undefined) {
        const c = e.coords;
        if (!Array.isArray(c) || c.length !== 2 || typeof c[0] !== 'number' || typeof c[1] !== 'number'
            || c[0] < -90 || c[0] > 90 || c[1] < -180 || c[1] > 180) {
          err(file, `${e.id}: coords must be null or [lat(-90..90), lng(-180..180)] (got ${JSON.stringify(c)})`);
        }
      }

      // repl: required+valid on study/effect, forbidden elsewhere
      const isSE = cat.id === 'study' || cat.id === 'effect';
      if (isSE && !REPL.includes(e.repl)) {
        err(file, `${e.id}: ${cat.id} entry needs repl ∈ {${REPL.join(', ')}} (got ${JSON.stringify(e.repl)})`);
      }
      if (!isSE && e.repl !== undefined) {
        err(file, `${e.id}: repl only allowed on study/effect (found on ${cat.id})`);
      }

      // keywords: optional, but if present must be 3–5 lowercase phrases
      if (e.keywords !== undefined) {
        if (!Array.isArray(e.keywords) || e.keywords.length < 3 || e.keywords.length > 5) {
          err(file, `${e.id}: keywords must be an array of 3–5 phrases (got ${Array.isArray(e.keywords) ? e.keywords.length : typeof e.keywords})`);
        } else {
          for (const k of e.keywords) {
            if (typeof k !== 'string' || !k.trim()) err(file, `${e.id}: keyword ${JSON.stringify(k)} must be a non-empty string`);
            else if (!k.includes(' ')) warn(file, `${e.id}: keyword "${k}" is a single word — prefer 2–3 word phrases`);
          }
        }
      } else {
        warn(file, `${e.id}: no keywords (checklist target is 3–5 per entry)`);
      }

      // xlinks: optional, must resolve to a real global key
      for (const x of (e.xlinks || [])) {
        if (!XLINK_RE.test(x)) err(file, `${e.id}: xlink "${x}" malformed (expected folio::id)`);
        else if (!globalKeys.has(x)) err(file, `${e.id}: xlink "${x}" does not resolve to a real entry`);
      }

      // tag: soft vocabulary check
      if (typeof e.tag === 'string' && e.tag && !KNOWN_TAGS.has(e.tag)) {
        warn(file, `${e.id}: tag "${e.tag}" not in known vocabulary`);
      }

      // note: should cite a datable source
      if (typeof e.note === 'string' && !/\b(1[0-9]{3}|20[0-9]{2})\b/.test(e.note)) {
        warn(file, `${e.id}: note has no 4-digit year — citation may be missing`);
      }
    }
  }

  // links: resolve within folio (error) + reciprocity (warn)
  for (const id of Object.keys(byId)) {
    const { e } = byId[id];
    for (const l of (e.links || [])) {
      if (!byId[l]) { err(file, `${id}: link "${l}" does not resolve within folio`); continue; }
      const back = byId[l].e.links || [];
      if (!back.includes(id)) warn(file, `${id} → ${l} link not reciprocated`);
    }
  }

  // timeline entryId references
  for (const lane of (data.timeline || [])) {
    for (const ev of (lane.events || [])) {
      if (ev.entryId && !ids.has(ev.entryId)) err(file, `timeline references missing entry "${ev.entryId}"`);
    }
  }

  // _index must stay in sync with actual entries (it is hand/separately maintained)
  if (data._index) {
    const idxKeys = new Set(Object.keys(data._index));
    for (const id of ids) if (!idxKeys.has(id)) err(file, `_index missing entry "${id}" (rebuild _index)`);
    for (const k of idxKeys) if (!ids.has(k)) err(file, `_index has stale key "${k}" (no such entry)`);
  }
}

// ── Report ──
const line = '─'.repeat(60);
console.log(line);
if (warns.length) {
  console.log(`⚠  ${warns.length} warning(s):`);
  for (const w of warns.slice(0, 40)) console.log(`   ${w}`);
  if (warns.length > 40) console.log(`   … and ${warns.length - 40} more`);
  console.log(line);
}
if (errors.length) {
  console.log(`✗  ${errors.length} ERROR(s):`);
  for (const e of errors) console.log(`   ${e}`);
  console.log(line);
  console.log(`FAILED — ${errors.length} error(s), ${warns.length} warning(s)`);
  process.exit(1);
} else {
  console.log(`✓  PASSED — 0 errors, ${warns.length} warning(s) across ${Object.keys(folios).length} folios`);
}
