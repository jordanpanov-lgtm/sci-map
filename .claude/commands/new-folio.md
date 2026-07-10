You are about to author a new sci-map folio. Before writing a single line of JSON, read the authoritative schema reference:

```
modules/FIELD_GUIDE.md
```

Do not consult any existing JSON folio file for schema guidance — the FIELD_GUIDE is canonical.

---

## Workflow

Work through these steps in order. **Each step that produces output ends with a git commit** — this ensures work survives a context-limit interruption. If resuming after an interruption, read the partial `modules/<id>.json` to see which categories are already written, then continue from the appropriate batch.

> **Why granular batches?** A full 70-entry folio generates ~600–900 lines of script. Splitting into 6 focused batches means a context-limit interruption loses at most one batch (~15–20 entries), not the entire folio. Each commit is a durable checkpoint.

---

### Step 1 — Confirm the folio identity

Find the entry in `config/registry.js`'s `FIELDS` array. Confirm:
- The `id` (e.g. `"epistemology"`)
- It currently has `status:"planned"` — if already `"ready"`, stop and ask the user
- The `domain` value (needed in the JSON top-level field)

---

### Step 2 — Propose groups (STOP — wait for user confirmation)

Propose 6–9 content groups. Each group must:
- Be named by content, not category ("Memory Systems" not "Memory Studies")
- Span multiple categories (at minimum: a theory or concept, a study or effect, at least one figure)
- Follow a logical pedagogical order — foundations first, applications last
- Reserve "Pioneers & Theorists" exclusively for ALL figure entries

Output the proposed group list and **wait for user approval before writing any entries.**

---

### Step 3 — Plan entry counts (STOP — wait for user confirmation)

Present a table of planned counts per category against the targets from FIELD_GUIDE.md:

| Category | Target | Planned |
|---|---|---|
| theory | 8–12 | ? |
| study | 9–13 | ? |
| effect | 8–12 | ? |
| concept | 6–9 | ? |
| method | 5–8 | ? |
| figure | 10–14 | ? |
| debate | 7–10 | ? |
| application | 5–8 | ? |
| **Total** | **65–80** | ? |

**Wait for user approval before writing entries.**

---

### Step 4 — Write entries in six batches

Generate entries using Node.js scripts written to the scratchpad and run from the `sci-map/` directory. Each batch script reads the current state of `modules/<id>.json` and fills in its categories. Commit after every batch.

> **Known recurring typo — check for it before running every batch script.** When writing
> entry object literals by hand (`{ id:'st2', group:'...', label:'...', date:'...', ... }`),
> it is very easy to slip and write `label='...'` (assignment) instead of `label:'...'`
> (object property) — a JS `SyntaxError: Invalid shorthand property initializer` that has
> recurred across multiple folio builds, sometimes several times in a single batch. **Before
> running any batch script, grep it for the typo and syntax-check it:**
> ```bash
> grep -n "label=" <script-path> || echo "clean"
> node --check <script-path>
> ```
> If `grep` finds hits, fix with `sed -i "s/label=/label:/g" <script-path>` and re-check
> before running. Do this for every batch script, not just the first — the typo tends to
> reappear even after being fixed in an earlier batch.

---

#### Batch A — Skeleton only

Script must write:
1. The top-level JSON fields: `id`, `title`, `subtitle`, `period`, `domain`, `mapCenter`, `mapZoom`, `methodology`
2. All 8 category stubs with correct `label`, `icon`, `color`, `accent`, `bg`, `subtitle`, and **empty** `entries: []` arrays — copy color/accent/bg verbatim from FIELD_GUIDE.md
3. Timeline stubs: 6 lane objects with correct `id`, `icon`, `accent`, `label`, and **empty** `events: []` arrays

No entries yet. Verify:
```
node -e "const d=require('./modules/<id>.json'); console.log('cats:', d.categories.map(c=>c.id)); console.log('timeline lanes:', d.timeline.map(l=>l.id))"
```

Commit:
```
git add modules/<id>.json
git commit -m "<id>: batch A — skeleton"
```

---

#### Batch B — theory + study

Script reads `modules/<id>.json` and fills in:
- All **theory** entries (no `repl` field)
- All **study** entries (every entry must have a `repl` badge: `robust`, `mixed`, or `failed`)

Validate JSON syntax:
```
node -e "JSON.parse(require('fs').readFileSync('modules/<id>.json','utf8')); console.log('OK')"
```

Commit:
```
git add modules/<id>.json
git commit -m "<id>: batch B — theory + study"
```

---

#### Batch C — effect + concept

Script reads `modules/<id>.json` and fills in:
- All **effect** entries (every entry must have a `repl` badge)
- All **concept** entries (no `repl` field)

Validate JSON syntax, then commit:
```
git add modules/<id>.json
git commit -m "<id>: batch C — effect + concept"
```

---

#### Batch D — method + figure

Script reads `modules/<id>.json` and fills in:
- All **method** entries (no `repl` field)
- All **figure** entries (`date` = year of landmark contribution, NOT birth year; `group` = "Pioneers & Theorists" on all)

Validate JSON syntax, then commit:
```
git add modules/<id>.json
git commit -m "<id>: batch D — method + figure"
```

---

#### Batch E — debate + application

Script reads `modules/<id>.json` and fills in:
- All **debate** entries (both sides of each debate need citation; no `repl` field)
- All **application** entries (no `repl` field)

Validate JSON syntax, then commit:
```
git add modules/<id>.json
git commit -m "<id>: batch E — debate + application"
```

---

#### Batch F — timeline + reciprocal links

Script reads `modules/<id>.json` and:
1. Fills in timeline events for all 6 lanes (`study`, `theory`, `effect`, `method`, `debate`, `application`) — every entry in those categories gets an event; sort each lane's events ascending by `y`
2. Completes all reciprocal links: for every entry A that lists B in `links`, ensure B lists A

Validate JSON syntax, then validate timeline refs and reciprocal links:
```
node -e "
const d=require('./modules/<id>.json');
const ids=new Set(d.categories.flatMap(c=>c.entries.map(e=>e.id)));
const all=d.categories.flatMap(c=>c.entries);
const byId=Object.fromEntries(all.map(e=>[e.id,e]));
let errs=0;
all.forEach(e=>(e.links||[]).forEach(t=>{
  if(!byId[t]){console.log('BROKEN',e.id,'->',t);errs++;}
  else if(!(byId[t].links||[]).includes(e.id)){console.log('NO RECIPROCAL',e.id,'->',t);errs++;}
}));
d.timeline.forEach(l=>l.events.forEach(ev=>{
  if(!ids.has(ev.entryId)){console.log('BAD TIMELINE REF',l.id,ev.entryId);errs++;}
}));
console.log(errs?'ERRORS: '+errs:'All links and timeline refs OK');
"
```

Commit:
```
git add modules/<id>.json
git commit -m "<id>: batch F — timeline + reciprocal links"
```

---

### Step 5 — Full validation

Run the full validation script from FIELD_GUIDE.md. Fix every issue — broken links, missing `repl` fields, orphaned entries, duplicate ids, ghost citations.

If fixes change any entries, commit:
```
git add modules/<id>.json
git commit -m "<id>: validation fixes"
```

---

### Step 6 — Inject agent metadata

Run the `inject-meta.js` script from the scratchpad to generate the `_meta` and `_index` blocks. This script is in the session scratchpad — if it is not present, recreate it from the template below.

Run from the `sci-map/` directory:
```
node "C:\Users\josol\AppData\Local\Temp\claude\C--Users-josol-Downloads-04--social\e7f97303-fa12-4ec9-869b-4a2753bb8ab8\scratchpad\inject-meta.js" modules/<id>.json
```

Verify the output reports correct `total_entries` and `max_ids`, then commit:
```
git add modules/<id>.json
git commit -m "<id>: inject _meta + _index"
```

**Note:** if inject-meta.js is missing from the scratchpad (e.g. new session), recreate it from this template and save to the scratchpad before running:

```javascript
'use strict';
const fs   = require('fs');
const path = require('path');
const filePath = process.argv[2];
if (!filePath) { console.error('Usage: node inject-meta.js <folio.json>'); process.exit(1); }
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const allEntries = data.categories.flatMap(c => c.entries.map(e => ({ ...e, catId: c.id })));
const entry_counts = {};
data.categories.forEach(c => { entry_counts[c.id] = c.entries.length; });
const total_entries = Object.values(entry_counts).reduce((a, b) => a + b, 0);
const max_ids = {};
allEntries.forEach(e => {
  const m = e.id.match(/^([a-z]+)(\d+)$/);
  if (!m) return;
  const [, prefix, num] = m;
  const n = parseInt(num, 10);
  if (!max_ids[prefix] || n > max_ids[prefix]) max_ids[prefix] = n;
});
const groups = [...new Set(allEntries.map(e => e.group))].sort();
const _meta = { total_entries, entry_counts, max_ids, groups, last_updated: new Date().toISOString().slice(0, 10) };
const _index = {};
data.categories.forEach(c => {
  c.entries.forEach(e => { _index[e.id] = `${c.id} · ${e.group} · ${e.label} (${e.date})`; });
});
const ordered = {
  id: data.id, schema_version: data.schema_version, title: data.title, subtitle: data.subtitle,
  period: data.period, domain: data.domain, mapCenter: data.mapCenter,
  mapZoom: data.mapZoom, methodology: data.methodology,
  _meta, _index, categories: data.categories, timeline: data.timeline
};
fs.writeFileSync(filePath, JSON.stringify(ordered, null, 2));
console.log(`✓ _meta and _index injected into ${path.basename(filePath)}`);
console.log(`  total_entries: ${total_entries}`);
console.log(`  max_ids: ${JSON.stringify(max_ids)}`);
console.log(`  groups (${groups.length}): ${groups.join(' | ')}`);
```

---

### Step 7 — Inject keywords

Generate 3–5 keywords per entry and inject them with a Node.js script written to the scratchpad.

Rules (from FIELD_GUIDE.md §keywords):
- 2–3 word lowercase compound phrases — never single words
- Do **not** repeat anything already captured by `tag`, `cat`, or `domain`
- Target cross-folio discriminating value: terms that would appear in 2–15 entries across the full ~800-entry corpus
- 3–5 terms per entry; fewer is fine, 6+ risks diluting specificity

Script pattern (save to scratchpad as `inject-keywords-<id>.js`, run from `sci-map/`):
```javascript
'use strict';
const fs = require('fs');
const FILE = process.argv[2] || 'modules/<id>.json';
const KEYWORDS = {
  th1: ["term one", "term two", "term three"],
  // ... all entry ids mapped to keyword arrays
};
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
let injected = 0, missing = [];
data.categories.forEach(cat => {
  cat.entries.forEach(entry => {
    const kws = KEYWORDS[entry.id];
    if (!kws) { missing.push(entry.id); return; }
    entry.keywords = kws;
    injected++;
  });
});
fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
console.log(`✓ keywords injected: ${injected} entries`);
if (missing.length) console.warn(`⚠ no keywords defined for: ${missing.join(', ')}`);
```

After injection, validate JSON and rebuild the global index so `keyword_index` updates:
```
node -e "JSON.parse(require('fs').readFileSync('modules/<id>.json','utf8')); console.log('OK')"
node modules/build-global-index.js
```

Check for cross-folio keyword matches that emerged (terms appearing in 2+ folios from different fields):
```
node -e "
const g = require('./modules/_global_index.json');
const cross = Object.entries(g.keyword_index)
  .filter(([,keys]) => new Set(keys.map(k=>k.split('::')[0])).size > 1);
cross.forEach(([term,keys]) => console.log('['+term+']', keys.join(', ')));
console.log(cross.length + ' cross-folio terms');
"
```

Commit:
```
git add modules/<id>.json modules/_global_index.json
git commit -m "<id>: batch G — keywords"
```

---

### Step 8 — Write the study plan in `config/study-plans.js`

Add an entry to `STUDY_PLANS` keyed by the folio id. Standard 10-module pattern:
- Module 1: `groups: ['Pioneers & Theorists']`
- Module 2: `cats: ['method']`
- Modules 3–8: one per content group (add a second module if 7+ content groups)
- Module 9: `cats: ['debate']`
- Module 10: `cats: ['application']`

Include a `rationale` string on each module.

**Routing check before committing:** every `group` name used in any entry must appear in at least one module's `groups:` array. Orphaned entries are silently excluded from the study plan.

**Important routing rule:** a module with `groups: ['X']` catches ALL entries with that group across every category — including debates and applications that happen to share the group name. A module with `cats: ['debate']` only catches entries in the `debate` category not already claimed by an earlier group-based module.

---

### Step 9 — Register in `config/registry.js`, rebuild global index & final commit

In the `FIELDS` array, flip the entry:
```js
// Before:
{ id:"<id>", domain:"<domain>", label:"<label>", sub:"<sub>", status:"planned" }

// After:
{ id:"<id>", domain:"<domain>", label:"<label>", sub:"<sub>", status:"ready", file:"modules/<id>.json" }
```

Then rebuild the cross-folio global index (run from the `sci-map/` directory):
```
node modules/build-global-index.js
```

Verify the output shows the new folio listed and the total entry count is correct.

Commit all four changed files together:
```
git add modules/<id>.json config/registry.js config/study-plans.js modules/_global_index.json
git commit -m "feat: <Field Name> folio complete"
git push
```

---

### Step 10 — Xlink wiring (manual)

Now that the folio is registered and `keyword_index` is up to date, review the cross-folio keyword matches from Step 7 and identify genuine xlink candidates.

Use the keyword index to find the strongest matches:
```
node -e "
const g = require('./modules/_global_index.json');
const cross = Object.entries(g.keyword_index)
  .filter(([,keys]) => new Set(keys.map(k=>k.split('::')[0])).size > 1)
  .sort((a,b) => b[1].length - a[1].length);
cross.forEach(([term,keys]) => {
  const folios = new Set(keys.map(k=>k.split('::')[0]));
  if ([...folios].some(f => f === '<id>')) {
    console.log('['+term+']');
    keys.forEach(k => console.log('  ', k, g.index[k]));
  }
});
"
```

For each match, verify **manually** that both entries refer to the same concept, person, or study — not just a shared word. Add `"xlinks": ["folio::id"]` to the entry in the JSON file (one direction only; the global index derives the reverse automatically).

Rules:
- Only wire an xlink when you are confident it is a genuine cross-field connection
- Do not xlink to a folio still at `status:"planned"`
- Aim for 0–3 xlinks per entry; most entries will have none

After adding xlinks, rebuild the global index and commit:
```
node modules/build-global-index.js
git add modules/<id>.json modules/_global_index.json
git commit -m "<id>: xlink wiring"
git push
```

If no confident xlinks are found, skip this step. Xlinks can always be added later.

---

## Resuming after a context-limit interruption

1. Read `CLAUDE.md` (loaded automatically) — it points here and to FIELD_GUIDE.md
2. Check git log to see which batch commits exist:
   ```
   git log --oneline -10
   ```
3. Count entries per category to confirm actual state:
   ```
   node -e "const d=require('./modules/<id>.json'); d.categories.forEach(c=>console.log(c.id, c.entries.length))"
   ```
4. If inject-meta was already run (`_meta` key exists at root), the `_index` gives a compact summary of every entry:
   ```
   node -e "const d=require('./modules/<id>.json'); if(d._meta) console.log(JSON.stringify(d._meta,null,2))"
   ```
5. Continue from the next incomplete batch

**Batch completion checklist:**

| Batch | Committed when | Signs of completion |
|---|---|---|
| A | Skeleton written | `categories.length === 8`, all `entries: []` |
| B | theory + study | `theory.entries.length > 0 && study.entries.length > 0` |
| C | effect + concept | `effect.entries.length > 0 && concept.entries.length > 0` |
| D | method + figure | `method.entries.length > 0 && figure.entries.length > 0` |
| E | debate + application | `debate.entries.length > 0 && application.entries.length > 0` |
| F | timeline + links | `timeline[0].events.length > 0` |
| Step 5 | Validation passed | No errors from validation script |
| Step 6 | inject-meta run | `_meta` key present in JSON |
| Step 7 | Keywords injected | Every entry has `keywords` array; `keyword_index` in `_global_index.json` updated |
| Step 8 | STUDY_PLANS added | Key `'<id>'` present in STUDY_PLANS in config/study-plans.js |
| Step 9 | Folio registered + global index rebuilt | `status:"ready"` in FIELDS; new folio listed in `_global_index.json` |
| Step 10 | Xlink wiring done (or skipped) | Genuine matches wired; `_global_index.json` rebuilt |
