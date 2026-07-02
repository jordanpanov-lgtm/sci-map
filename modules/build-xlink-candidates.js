'use strict';
/**
 * build-xlink-candidates.js
 * Scans _global_index.json for natural cross-folio connections using two strategies:
 *   1. Figure-name matching  — a pioneer's last name appears in another folio's entry label
 *   2. Keyword overlap       — two entries in different folios share 2+ significant label tokens
 * Output: _xlink_candidates.json  (review this, then add xlinks manually to folio entries)
 */

const fs   = require('fs');
const path = require('path');

const DIR    = __dirname;
const INPUT  = path.join(DIR, '_global_index.json');
const OUTPUT = path.join(DIR, '_xlink_candidates.json');

// ── Load & parse ──────────────────────────────────────────────────────────────

const { index } = JSON.parse(fs.readFileSync(INPUT, 'utf8'));

// Each value: "cat · group · label (year)"
const entries = Object.entries(index).map(([key, raw]) => {
  const [folio, id] = key.split('::');
  const parts       = raw.split(' · ');
  const cat         = parts[0];
  const group       = parts[1];
  const withYear    = parts.slice(2).join(' · ');
  const yearMatch   = withYear.match(/\((\d{4}(?:[–\-]\d{2,4})?)\)$/);
  const year        = yearMatch ? yearMatch[1] : '';
  const label       = withYear.replace(/\s*\(\d{4}(?:[–\-]\d{2,4})?\)$/, '').trim();
  return { key, folio, id, cat, group, label, year, raw };
});

// ── Strategy 1: Figure-name matching ─────────────────────────────────────────
// For every figure entry, extract the person's last name and search for it
// (case-insensitive) in the labels of entries from OTHER folios.

const getLastName = name => {
  const clean = name.replace(/^(Dr\.?|Prof\.?|Sir\s)/i, '').trim();
  const parts = clean.split(/\s+/);
  return parts[parts.length - 1];
};

const escapeRegex = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const figures = entries.filter(e => e.cat === 'figure');

const figureMatches = [];

for (const fig of figures) {
  const lastName = getLastName(fig.label);
  if (lastName.length < 3) continue;

  const hits = entries.filter(e =>
    e.folio !== fig.folio &&
    new RegExp(`\\b${escapeRegex(lastName)}\\b`, 'i').test(e.label)
  );

  for (const hit of hits) {
    figureMatches.push({
      confidence: 'high',
      type:       'figure-name',
      pivot:      { folio: fig.folio, id: fig.id, cat: 'figure', label: fig.label },
      match:      { folio: hit.folio, id: hit.id, cat: hit.cat,  label: hit.label },
      name:       lastName,
      xlink_a:    `${fig.folio}::${fig.id}`,   // add to match entry
      xlink_b:    `${hit.folio}::${hit.id}`,   // add to figure entry
    });
  }
}

// ── Strategy 2: Keyword overlap ───────────────────────────────────────────────
// Build an inverted index token → entries, then count how many tokens each
// cross-folio pair shares. Pairs with ≥ 2 significant shared tokens are candidates.

const STOP = new Set([
  // English
  'the','and','of','in','to','a','an','for','on','with','by','from','its','as',
  'at','is','are','was','were','be','been','being','that','this','or','but',
  'not','no','how','what','when','where','which','who','why','all','any',
  'has','have','had','will','would','could','should','may','might','must','can',
  // Generic science vocabulary — too common to be discriminating
  'theory','model','study','effect','concept','method','law','principle',
  'discovery','framework','hypothesis','analysis','approach','evidence',
  'general','basic','new','first','second','early','late','modern','classic',
  'human','biological','social','natural','physical','chemical','medical',
  'behaviour','behavior','system','systems','structure','function','process',
  'research','science','scientific','data','based',
]);

const tokenize = label =>
  label.toLowerCase()
    .replace(/[—––—]/g, ' ')
    .replace(/[^a-zÀ-ɏ\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 4 && !STOP.has(w));

// Inverted index: token → Set of entry indices
const inverted = new Map();
entries.forEach((e, i) => {
  for (const tok of tokenize(e.label)) {
    if (!inverted.has(tok)) inverted.set(tok, []);
    inverted.get(tok).push(i);
  }
});

// Count shared tokens per cross-folio pair
const pairScore = new Map(); // "i:j" → { count, tokens, a, b }

for (const [tok, idxList] of inverted) {
  // Only care about tokens that appear in multiple folios
  const folioSet = new Set(idxList.map(i => entries[i].folio));
  if (folioSet.size < 2) continue;

  for (let p = 0; p < idxList.length; p++) {
    for (let q = p + 1; q < idxList.length; q++) {
      const a = entries[idxList[p]];
      const b = entries[idxList[q]];
      if (a.folio === b.folio) continue;

      const pairKey = idxList[p] < idxList[q]
        ? `${idxList[p]}:${idxList[q]}`
        : `${idxList[q]}:${idxList[p]}`;

      if (!pairScore.has(pairKey)) {
        pairScore.set(pairKey, {
          count: 0, tokens: [],
          a: { folio: a.folio, id: a.id, cat: a.cat, label: a.label },
          b: { folio: b.folio, id: b.id, cat: b.cat, label: b.label },
          xlink_a: `${a.folio}::${a.id}`,
          xlink_b: `${b.folio}::${b.id}`,
        });
      }
      const rec = pairScore.get(pairKey);
      rec.count++;
      rec.tokens.push(tok);
    }
  }
}

// Filter to ≥ 2 shared tokens, assign confidence
const keywordMatches = [...pairScore.values()]
  .filter(r => r.count >= 2)
  .map(r => ({
    confidence: r.count >= 4 ? 'high' : r.count >= 3 ? 'medium' : 'low',
    type:       'keyword-overlap',
    sharedTerms: [...new Set(r.tokens)].sort(),
    sharedCount: r.count,
    a:          r.a,
    b:          r.b,
    xlink_a:    r.xlink_a,
    xlink_b:    r.xlink_b,
  }))
  .sort((a, b) => b.sharedCount - a.sharedCount);

// ── Write output ──────────────────────────────────────────────────────────────

const out = {
  _meta: {
    generated:          new Date().toISOString().slice(0, 10),
    figure_matches:     figureMatches.length,
    keyword_matches:    keywordMatches.length,
    high_confidence:    [...figureMatches, ...keywordMatches].filter(c => c.confidence === 'high').length,
    medium_confidence:  keywordMatches.filter(c => c.confidence === 'medium').length,
    low_confidence:     keywordMatches.filter(c => c.confidence === 'low').length,
  },
  figure_name_matches:  figureMatches,
  keyword_matches:      keywordMatches,
};

fs.writeFileSync(OUTPUT, JSON.stringify(out, null, 2));

// ── Console report ────────────────────────────────────────────────────────────

const hr = '─'.repeat(70);
console.log('\nCross-folio link candidates');
console.log(hr);
console.log(`Figure-name matches:       ${figureMatches.length}`);
console.log(`Keyword overlap (≥2 terms): ${keywordMatches.length}`);
console.log(`  high (≥4 terms):         ${keywordMatches.filter(c=>c.confidence==='high').length}`);
console.log(`  medium (3 terms):        ${keywordMatches.filter(c=>c.confidence==='medium').length}`);
console.log(`  low (2 terms):           ${keywordMatches.filter(c=>c.confidence==='low').length}`);
console.log();

console.log('FIGURE-NAME MATCHES (all high confidence):');
console.log(hr);
figureMatches.forEach(c => {
  console.log(`  [${c.name}]  ${c.pivot.folio}::${c.pivot.id} → ${c.match.folio}::${c.match.id}`);
  console.log(`    figure:  "${c.pivot.label}"`);
  console.log(`    matched: "${c.match.label}" [${c.match.cat}]`);
});

console.log();
console.log('KEYWORD MATCHES — high confidence (≥4 shared terms):');
console.log(hr);
keywordMatches.filter(c => c.confidence === 'high').forEach(c => {
  console.log(`  [${c.sharedTerms.join(', ')}]`);
  console.log(`    ${c.a.folio}::${c.a.id}  "${c.a.label}" [${c.a.cat}]`);
  console.log(`    ${c.b.folio}::${c.b.id}  "${c.b.label}" [${c.b.cat}]`);
});

console.log();
console.log('KEYWORD MATCHES — medium confidence (3 shared terms):');
console.log(hr);
keywordMatches.filter(c => c.confidence === 'medium').forEach(c => {
  console.log(`  [${c.sharedTerms.join(', ')}]`);
  console.log(`    ${c.a.folio}::${c.a.id}  "${c.a.label}" [${c.a.cat}]`);
  console.log(`    ${c.b.folio}::${c.b.id}  "${c.b.label}" [${c.b.cat}]`);
});

console.log();
console.log(`Full results → modules/_xlink_candidates.json`);
