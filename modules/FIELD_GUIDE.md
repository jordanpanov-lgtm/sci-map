# Sci-Map — Folio Authoring Guide

A folio is one JSON file in `modules/` that covers a single scientific field. Every folio
surfaces the same eight category lenses; the `group` field carries the field's own internal
structure. This is what makes the whole thing an *atlas* rather than a pile of unrelated pages.

---

## Quick-reference targets

| Category | Target entry count | `repl` badge? |
|---|---|---|
| `theory` | 8–12 | No |
| `study` | 9–13 | Yes — every entry |
| `effect` | 8–12 | Yes — every entry |
| `concept` | 6–9 | No |
| `method` | 5–8 | No |
| `figure` | 10–14 | No |
| `debate` | 7–10 | No |
| `application` | 5–8 | No |
| **Total** | **~65–80** | |

A folio below 60 entries will feel thin; above 90 entries will feel exhausting.

Groups per folio: **6–9**. If a group has fewer than 3 entries across all categories, merge it.

---

## The evidence principle

Every entry must anchor to a **landmark study, paper, dataset, scale or theoretical text** —
a specific datable source. The `note` field carries that citation and must flag:

- **Replication status** — replicated, failed, contested, never directly tested
- **Effect-size revisions** — where the famous number turned out to be inflated
- **Known controversies** — disputed methods, ethical issues, archival re-readings
- **Cultural scope** — WEIRD-bound or cross-culturally robust?

A folio that presents 1960s textbook findings as settled fact is doing the reader a
disservice. Honesty about the strength of the evidence is the whole point.

---

## Step 1 — Design the groups first

Groups are the chapters of the field's internal syllabus. They drive both the List view
(entries cluster under a subheading) and the Study Plan routing (one module per group).

**Design rules:**
1. Name them by content, not by category — "Memory Systems" not "Memory Studies".
2. Target 6–9 groups covering the field's canonical subtopics.
3. Order them inside-out or bottom-up: foundations → mechanisms → applications.
4. Every group should contain entries from multiple categories (at minimum: a theory or
   concept, a study or effect, and at least one figure).
5. Reserve `group: "Pioneers & Theorists"` on every `figure` entry — it maps to Module 1
   of the study plan. Other entries that belong in Module 1 (founding debates, seminal
   early papers) can also use this group.

**Example group sets:**

*Neuroscience:*
Neurons & Synapses → Brain Architecture → Sensory & Motor Systems → Memory & Plasticity
→ Sleep & Rhythms → Emotion & Motivation → Disorders & Lesions → [Pioneers & Theorists]

*Social Psychology:*
Conformity & Obedience → Intergroup Relations → The Self & Cognition → Attitudes & Persuasion
→ Perceiving Others → Helping & Harm → Groups & Performance → [Pioneers & Theorists]

---

## Step 2 — Write the entries

### Entry schema

```jsonc
{
  "id": "st2",                          // cat-prefix + number; unique within folio
  "group": "Conformity & Obedience",    // field-specific subtopic designed in Step 1
  "label": "Milgram Obedience Experiments",
  "date": "1961–63",                    // year(s) of the key work; first 4 digits sort
  "loc": "Yale University, New Haven, Connecticut",  // institution where work was done
  "coords": [41.31, -72.93],            // institution lat/lng; null = no map pin
  "hint": "Plain-language explanation in 2–4 sentences.",
  "tag": "EXPERIMENT",                  // see tag vocabulary below
  "note": "Citation + replication status + caveats + what changed since.",
  "repl": "robust",                     // study/effect only — see rubric below
  "links": ["db3", "fg4"],             // ids of related entries in this folio
  "xlinks": ["neuroscience::fg1"]      // OPTIONAL — cross-folio refs; see §xlinks below
}
```

### Hint quality spec

The hint is for an intelligent non-specialist. It must:

- State the **specific claim, finding or idea** — not a vague restatement of the label
- Explain **why it matters** in one sentence
- Use plain language; define jargon if it appears
- Be 2–4 sentences; 3 is the sweet spot

**Bad hint:** "The Milgram experiments studied obedience to authority and found surprising
results that changed how psychologists think about human behaviour."

**Good hint:** "Ordinary participants, instructed by an experimenter, delivered what they
believed were increasingly dangerous electric shocks to a stranger. 65% continued to the
maximum 450 volts. The most famous — and most contested — finding in all of social
psychology: ordinary people, not monsters, obey destructive authority when given a
legitimate-seeming institutional frame."

### Note quality spec

The note is for someone who wants the source and the caveats. It must contain:

1. **Primary citation** — Author(s), year, exact title, journal/publisher, volume, pages.
   No partial citations. No "et al." if there are ≤ 3 authors.
2. **Replication or revision note** — what the strongest subsequent evidence says. Name
   the study, year and what it found.
3. **Caveat or context** — one sentence on a limitation, cultural boundary or
   methodological issue. Omit only if there are genuinely none of note.

**Bad note:** "Milgram, S. (1963). Classic obedience study. Widely cited."

**Good note:** "Milgram, S. (1963). 'Behavioral study of obedience.' Journal of Abnormal
and Social Psychology, 67, 371–378. A partial ethical replication (Burger 2009) reproduced
comparable obedience rates. Archival work (Perry 2013; Gibson 2013) shows the script was
applied unevenly across conditions and the '65%' figure comes from just one of two dozen
variations — the headline number is a selective summary."

### `repl` — the replicability badge

Set on **every** `study` and `effect` entry; never on theories, concepts, methods, figures,
debates or applications.

| Value | Dot | Assign when |
|---|---|---|
| `robust` | 🟢 | Confirmed by meta-analysis or multiple independent/registered replications |
| `mixed` | 🟡 | Real but smaller than first reported; conditional; culturally moderated; or replication record is contested |
| `failed` | 🔴 | Failed a large pre-registered replication, or the original causal claim is severely undermined |

Be conservative. A famous effect with a contested record is `mixed`, not `robust`.
Justify the badge in the `note` with the replication citation.

### `links` — intra-folio cross-references

`links` is an array of **entry ids in the same folio**. Each link renders as a clickable
chip in the modal under "RELATED". Aim for 2–5 links per entry. Always add the reciprocal
id on both entries so the connection works in both directions.

Good link patterns:
- Study → its figure author: `st2` links `fg4`
- Effect → the study that established it: `ef3` links `st4`
- Debate → the original study being contested: `db2` links `st8`
- Theory → the study that tests it: `th2` links `st4`
- Concept → entries that instantiate it: `co4` links `ef3`, `st4`, `th2`, `th10`

### `xlinks` — cross-folio references

`xlinks` is an **optional** array of `"<folio>::<id>"` strings pointing to entries in
*other* folios. Use it when the same concept, person, or study is genuinely central to
two different fields (e.g. Alan Turing in CS and in systems-and-complexity, Cajal in
anatomy and in neuroscience).

**Do not add `xlinks` freehand.** Use the discovery script to find candidates first:
```
node modules/build-xlink-candidates.js
```
This reads `_global_index.json` and outputs `_xlink_candidates.json` — a ranked list of
candidate pairs for human review before writing anything to folio files.

Rules:
- Unlike `links`, `xlinks` are not required to be reciprocated — the target folio file is
  not re-opened just to add a back-reference.
- Every `xlinks` value must resolve to a real key in `_global_index.json`. Check:
  ```
  node -e "const g=require('./modules/_global_index.json'); console.log(g.index['folio::id'])"
  ```
- Never xlink to a folio that still has `status:"planned"`.
- Aim for 0–3 xlinks per entry. Weak keyword overlaps don't warrant an xlink.

### Figures — what to write

Figure entries document scientific contribution, not biography. The `hint` should answer:
*what specifically did this person establish, and why does it still matter?* The `note`
should give the key paper(s) and one sentence on legacy or controversy.

All figure entries use `group: "Pioneers & Theorists"` — this routes them to Module 1 of
the study plan automatically.

---

## Step 3 — Write the study plan (goes in `index.html`)

The study plan is a JS constant in `index.html` inside `STUDY_PLANS`, keyed by the folio's
`id`. It does **not** live in the JSON file.

### Standard 10-module template

```js
'<field-id>': {
  meta: 'One sentence describing the pedagogical arc of this plan.',
  modules: [
    { title: '1 — Founders & the Field',
      rationale: 'Why start here: the 3–5 people and moments that made this discipline.',
      groups: ['Pioneers & Theorists'] },
    { title: '2 — Research Methods',   cats: ['method'] },
    { title: '3 — <Group 1 name>',     groups: ['<Group 1>'] },
    { title: '4 — <Group 2 name>',     groups: ['<Group 2>'] },
    { title: '5 — <Group 3 name>',     groups: ['<Group 3>'] },
    { title: '6 — <Group 4 name>',     groups: ['<Group 4>'] },
    { title: '7 — <Group 5 name>',     groups: ['<Group 5>'] },
    { title: '8 — <Group 6 name>',     groups: ['<Group 6>'] },
    { title: '9 — Debates & Open Questions', cats: ['debate'] },
    { title: '10 — Applications',      cats: ['application'] }
  ]
}
```

**Routing rules:**
- A module with `groups: [...]` captures every entry whose `group` matches.
- A module with `cats: [...]` captures every entry whose category `id` matches.
- If a folio has 7+ content groups, split one module into two or merge minor groups.
- Within each module, entries are ordered by `SP_CAT_ORDER`:
  `['concept','theory','method','study','effect','figure','debate','application']`
- Every entry in the folio must be reachable by exactly one module. Check this before
  committing: if you added a group name that appears in no module, those entries are orphaned.

---

## Step 4 — Write the timeline

The `timeline` array in the JSON holds **6 lanes** (omit `concept` and `figure` which are
rarely dateable as discrete events):

```jsonc
[
  { "id":"study",       "icon":"🧪", "accent":"#7D3C98", "label":"Landmark Studies",    "events":[...] },
  { "id":"theory",      "icon":"📐", "accent":"#2471A3", "label":"Theories & Models",   "events":[...] },
  { "id":"effect",      "icon":"📊", "accent":"#117A65", "label":"Effects & Phenomena", "events":[...] },
  { "id":"method",      "icon":"🔬", "accent":"#8B5E00", "label":"Methods",             "events":[...] },
  { "id":"debate",      "icon":"⚖️", "accent":"#B7770D", "label":"Debates & Revisions", "events":[...] },
  { "id":"application", "icon":"🔗", "accent":"#2E86C1", "label":"Applications",        "events":[...] }
]
```

Each event: `{ "y": 1963, "l": "Short label ≤ 40 chars", "entryId": "st2" }`

- Include **all** entries from each category — the timeline should be a complete map.
- `y` is the year of the key study/publication; use the same year as the entry's `date`.
- `entryId` must match a real entry `id`. Run the validation script to check.

---

## The 8 categories — full specification

### Category palette (copy verbatim)

The `id` prefix for entry ids, the canonical `label`, and the full visual spec:

```
id           prefix  label                        color    accent   bg
───────────────────────────────────────────────────────────────────────────────
theory       th      "Theories & Models"          #1A3A5C  #2471A3  #F0F7FF
study        st      "Landmark Studies"           #4A235A  #7D3C98  #FAF5FF
effect       ef      "Effects & Phenomena"        #0B4F2E  #117A65  #F0FFF6
concept      co      "Key Concepts"               #2C3E50  #566573  #F5F6FA
method       me      "Methods & Approaches"       #5D4037  #8B5E00  #FFF8F0
figure       fg      "Pioneers & Theorists"       #7D6608  #B7770D  #FEFDE7
debate       db      "Debates & Open Questions"   #6E2C00  #CA6F1E  #FDF5EC
application  ap      "Applications"               #1A5276  #2E86C1  #EBF5FB
```

Entry ids are `<prefix><number>` — e.g. `th1`, `st2`, `ef3`. Numbers are sequential within
each category and unique within the folio. Cross-folio references go in `xlinks`, not `links`.

Category subtitles — customise the bracketed part, keep the structure:

```
theory      "The frameworks that organise [how the brain / social behaviour / chemical reactions / etc.]"
study       "The defining experiments — and exactly what they found"         ← keep verbatim
effect      "Named, replicable patterns in [neural and behavioural / social / etc.] organisation"
concept     "The building blocks and vocabulary every student must command"  ← keep verbatim
method      "The tools and paradigms that generate the field's evidence"     ← keep verbatim
figure      "The researchers who shaped the discipline"                      ← keep verbatim
debate      "Live controversies — where the field is actively contesting the evidence"  ← keep verbatim
application "Where the science leaves the lab"                               ← keep verbatim
```

### Tag vocabulary

| Tag | Use for |
|---|---|
| `THEORY` / `MODEL` / `FRAMEWORK` | theoretical entries |
| `EXPERIMENT` / `FIELD STUDY` / `CASE STUDY` / `NATURAL EXPERIMENT` | empirical studies |
| `NEUROIMAGING` / `NEUROPSYCHOLOGY` | brain-specific study types |
| `EFFECT` / `PHENOMENON` / `BIAS` | named findings |
| `META-ANALYSIS` / `REPLICATION` / `FAILED REPLICATION` | cumulative evidence entries |
| `CONCEPT` / `CONSTRUCT` / `SCALE` / `MEASURE` | concepts and instruments |
| `LAW` / `PRINCIPLE` / `DISCOVERY` | formal laws, milestones |
| `METHOD` | method entries |
| `FIGURE` | people |
| `CLINICAL APPLICATION` / `APPLICATION` | real-world uses |
| `DEBATE` / `REVISION` | contested or revised claims |

---

## Folio-level fields

```jsonc
{
  "id": "neuroscience",                     // must match FIELDS[].id in index.html
  "title": "Neuroscience & Behavior",
  "subtitle": "From neuron to mind: the biological basis of thought, emotion and action",
  "period": { "start": 1906, "end": 2025 }, // first landmark to present
  "domain": "psychology",                   // must match FIELDS[].domain in index.html
  "mapCenter": [45, -10],                   // lat/lng — centre the map on where the work is
  "mapZoom": 3,
  "methodology": "METHODOLOGY · Every entry anchors to a landmark study, paper, clinical case or theoretical text. The hint explains the idea in plain language; the note names the primary publication and flags replication status, effect-size revisions and known controversies. Studies and effects carry a replicability badge — 🟢 robust · 🟡 nuanced or reduced · 🔴 failed or severely contested. Map pins mark the institution where the work was carried out.",
  "categories": [...],   // see structure below — entries are NESTED here, never at top level
  "timeline": [...]      // see Step 4 — array of 6 lane objects, each with an events array
}
```

The `methodology` string is the same boilerplate on every folio — copy it verbatim, changing
"clinical case" to something field-appropriate if needed (e.g. "field observation" for ecology).

### JSON field names vs `index.html` field names

The JSON file and the `FIELDS` array entry in `index.html` use **different names** for the same folio:

| In JSON file | In `index.html` FIELDS array |
|---|---|
| `"title"` | `"label"` |
| `"subtitle"` | `"sub"` |

Do not put `"label"` or `"sub"` in the JSON file, and do not put `"title"` or `"subtitle"` in
the `FIELDS` array.

Valid `domain` values — must match one of the `DOMAINS[].id` constants in `index.html`:

| Domain id | Branch label |
|---|---|
| `formal-computing` | Formal Sciences & Computing |
| `physical-sciences` | Physical Sciences & Chemistry |
| `earth-space` | Earth, Space & Environmental |
| `life-sciences` | Life & Ecological Sciences |
| `human-biology` | Human Biology & Medicine |
| `psychology` | Psychology & The Mind |
| `language` | Language & Communication |
| `society` | Society & Culture |
| `civics` | Civics, Systems & Governance |
| `philosophy` | Philosophy: Foundations |

### `categories` array — full nested structure

Each element of `categories` is a category object. All entries for that category live inside its
`entries` array. **Never place category arrays (`"theory": [...]`, `"study": [...]`, etc.) at the
top level of the JSON — that is the single most common authoring mistake.**

The eight categories must appear in this canonical order:
`theory → study → effect → concept → method → figure → debate → application`

```jsonc
"categories": [
  {
    "id": "theory",
    "label": "Theories & Models",
    "icon": "📐",
    "color": "#1A3A5C", "accent": "#2471A3", "bg": "#F0F7FF",
    "subtitle": "The frameworks that organise [field-specific phrase]",
    "entries": [
      {
        "id": "th1",
        "group": "Memory Systems",
        "label": "Hebb's Rule",
        "date": "1949",
        "loc": "McGill University, Montreal, Quebec",
        "coords": [45.50, -73.58],
        "links": ["th2", "ef3"],
        "hint": "2–4 sentences explaining the idea in plain language.",
        "tag": "THEORY",
        "note": "Full citation + replication status + caveats."
        // NO "fig", NO "cat", NO "groups", NO "repl" on theory entries
      }
      // ... more theory entries
    ]
  },
  { "id": "study",  /* ... */ "entries": [ /* ... */ ] },
  { "id": "effect", /* ... */ "entries": [ /* ... */ ] },
  { "id": "concept","/* ... */ "entries": [ /* ... */ ] },
  { "id": "method", /* ... */ "entries": [ /* ... */ ] },
  { "id": "figure", /* ... */ "entries": [ /* ... */ ] },
  { "id": "debate", /* ... */ "entries": [ /* ... */ ] },
  { "id": "application", /* ... */ "entries": [ /* ... */ ] }
]
```

### `date` field — what it means per entry type

| Category | What `date` represents |
|---|---|
| `theory` | Year of the defining paper or book |
| `study` | Year the experiment was run or reported |
| `effect` | Year the effect was first named or measured |
| `concept` | Year of the paper that introduced or formalised it |
| `method` | Year of the first published use |
| `figure` | **Year of their most important single contribution** — not their birth year |
| `debate` | Year the controversy became explicit in the literature |
| `application` | Year of first working implementation |

### `coords` — required on every entry, including debates and concepts

Provide a real `[lat, lng]` pair pointing to the institution where the key work was done.
For debates and concepts, point to the institution of the key paper's first author.
Only use `null` when the concept has no single origin (e.g. emerged simultaneously from multiple
groups) — this should be rare.

### JSON string escaping — the `note` field trap

`note` is the field most likely to contain characters that break JSON strings:

| Content in note | Correct JSON | Wrong |
|---|---|---|
| Paper title in `"double quotes"` | `\"double quotes\"` | `"double quotes"` (breaks string) |
| Single quotes / apostrophes | `'like this'` | fine as-is |
| Em-dashes, accented chars | fine as-is | — |

The failure mode is silent: the JSON file *looks* fine in a text editor but `JSON.parse`
throws a SyntaxError, which the app catches and shows as "Error loading field — check file path."
The real cause is in the console: `SyntaxError: Expected ',' or '}'`.

Always validate the JSON before committing:
```
node -e "JSON.parse(require('fs').readFileSync('modules/<id>.json','utf8')); console.log('OK')"
```

### Fields that do NOT exist on entries

Do not add these — they silently corrupt the entry or are ignored:

| Field | Why it's wrong |
|---|---|
| `fig` | No such field; person links go in `links` |
| `cat` | Category is implicit from which `entries` array the entry lives in |
| `groups` | Not an entry field; only used in the study plan in `index.html` |

`xlinks` **is** a valid optional field — see §xlinks above. Do not confuse it with `links`.

---

## Registering the folio in `index.html`

1. In `FIELDS`, flip the entry from `status:"planned"` to `status:"ready"` and add `file`:
   ```js
   { id:"neuroscience", domain:"psychology", label:"Neuroscience & Behavior",
     sub:"Brain, neuron, circuit & the biological basis of mind",
     status:"ready", file:"modules/neuroscience.json" },
   ```
2. Add the study plan to `STUDY_PLANS` following the template in Step 3.

---

## Validation checklist before committing

**Run this first — catches syntax errors before anything else**
```
node -e "JSON.parse(require('fs').readFileSync('modules/<id>.json','utf8')); console.log('OK')"
```
If it errors with `SyntaxError: Expected ',' or '}'`, look for unescaped `"` characters inside
string values — most commonly in `note` fields that quote paper titles.

**Schema structure**
- [ ] JSON is syntactically valid (run node validation above)?
- [ ] All `"` characters inside string values are escaped as `\"`?
- [ ] Entries are nested inside `categories[n].entries[]` — not at the top level of the JSON?
- [ ] All 8 categories present in canonical order (`theory → study → effect → concept → method → figure → debate → application`)?
- [ ] No forbidden entry fields (`fig`, `cat`, `groups`) present?
- [ ] JSON uses `"title"` and `"subtitle"` (not `"label"` / `"sub"`)?
- [ ] `index.html` FIELDS entry uses `"label"` and `"sub"` (not `"title"` / `"subtitle"`)?

**Entry content**
- [ ] Every entry has `id`, `group`, `label`, `date`, `loc`, `coords`, `links`, `hint`, `tag`, `note`?
- [ ] Every entry has a real, complete citation in `note`?
- [ ] `repl` set on every `study` and `effect` entry; absent from all others?
- [ ] `date` for figure entries is the year of their key contribution, not their birth year?
- [ ] `coords` provided on every entry (debates and concepts included) — `null` only as last resort?
- [ ] Every contested finding has a `debate` entry or a note flagging the controversy?

**Routing and cross-references**
- [ ] Every `group` name used in entries appears in at least one study plan module?
- [ ] Every timeline `entryId` resolves to a real entry `id`?
- [ ] `links` are reciprocated on both ends?

**index.html**
- [ ] FIELDS entry flipped to `status:"ready"` with `file:` path added?
- [ ] Study plan added to `STUDY_PLANS` with `meta` and `modules` array?
- [ ] Every group name in entries appears in at least one study plan module `groups:` array?
- [ ] No duplicate entry ids?
- [ ] Field registered in `FIELDS` with `status:"ready"` and a `file` path?
- [ ] Study plan added to `STUDY_PLANS` in `index.html`?

**Global cross-folio index**
- [ ] Run `node modules/build-global-index.js` from the `sci-map/` directory after registering the folio?
- [ ] Output confirms the new folio is listed and total entry count increased?
- [ ] `modules/_global_index.json` included in the final commit?
- [ ] Run `node modules/build-xlink-candidates.js` to refresh `_xlink_candidates.json` with the new folio's entries?
- [ ] Reviewed `_xlink_candidates.json` for high-confidence `xlinks` worth wiring into the new folio?

Run the JSON validation script:
```bash
node -e "
const d=require('./modules/<field>.json');
const ids=new Set();
let dup=0,bad=0,orphan=0;
d.categories.forEach(c=>c.entries.forEach(e=>{
  if(ids.has(e.id)){dup++;console.log('DUP',e.id)}
  ids.add(e.id);
}));
(d.timeline||[]).forEach(l=>l.events.forEach(e=>{
  if(e.entryId&&!ids.has(e.entryId)){bad++;console.log('BAD REF',e.entryId)}
}));
console.log('entries',[...ids].length,'dups',dup,'brokenTimelineRefs',bad);
"
```

---

## Editorial principles

1. **Specific beats general.** A hint that says "this changed how we think about X" is
   useless. A hint that says "the brain decides ~500 ms before the conscious self reports
   intending to move" is useful.

2. **The note is not a restatement of the hint.** The hint explains what the idea is. The
   note says where it came from and whether it held up.

3. **Do not launder uncertainty.** If an effect failed to replicate, the entry should say
   so in both the `note` and the `repl` badge. Add a `debate` entry if the controversy
   is substantial.

4. **Debate entries need both sides.** A debate entry without a citation for the critical
   position is just a complaint. Name the critic, year and argument.

5. **Figures are not biographical.** Every figure `hint` should be answerable as:
   "What specifically did this person establish, and why does it still matter scientifically?"
   Dates and prizes go in the `note`.

6. **Watch the WEIRD problem** (Henrich et al. 2010) for behavioural fields: flag where a
   "universal" claim rests only on Western university subjects.

7. **Avoid triumphalism.** The `debate` category is not an afterthought — for many modern
   fields it is the most important lens. Aim for 7–10 debate entries covering failed
   replications, contested methods, neuromyths and open questions.
