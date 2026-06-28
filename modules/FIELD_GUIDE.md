# Sci-Map — Field Authoring Guide

This is the science counterpart to histomap's `GROUPING_GUIDE.md`. Where histomap
organises folios by **region × period**, sci-map organises them by **scientific field**.
Each field is one folio (one JSON file in `modules/`), registered in the `FIELDS`
array in `index.html`.

The core design principle is inherited from histomap: **categories are uniform lenses
that apply to every field; the `group` field carries the field-specific subtopic.**
This is what makes the whole thing an *atlas* rather than a pile of unrelated pages.

---

## The evidence principle

Every entry must anchor to a **landmark study, paper, dataset or scale** — the scientific
analog of histomap's "datable primary source". The `note` field names that source and,
crucially, flags:

- **Replication status** — replicated, failed to replicate, never directly tested
- **Effect-size revisions** — where a famous effect turned out smaller than first reported
- **Known controversies** — disputed methods, archival re-readings, ethical issues
- **Cultural scope** — whether the finding is WEIRD-bound or cross-culturally robust

A folio that presents 1950s textbook findings as settled fact, with no mention of the
replication crisis, is doing the reader a disservice. Honesty about the strength of the
evidence is the whole point.

---

## The 8 canonical categories (always in this order)

Every folio MUST contain all 8 categories in this exact sequence. If a field genuinely
has little content for one, include it as a short stub so the category bar renders evenly.

| # | id | icon | Use for |
|---|---|---|---|
| 1 | `theory` | 📐 | Explanatory frameworks and formal models — the field's big ideas |
| 2 | `study` | 🧪 | The defining experiments/observations and *what they actually found* |
| 3 | `effect` | 📊 | Named, replicable phenomena, effects and biases |
| 4 | `concept` | 🧩 | Core constructs, definitions and the distinctions that matter |
| 5 | `method` | 🔬 | Paradigms, instruments, scales and techniques |
| 6 | `figure` | 👤 | The researchers who shaped the field |
| 7 | `debate` | ⚖️ | Controversies, failed replications, revisions, open questions |
| 8 | `application` | 🔗 | Where the science is put to work in the real world |

Each category object carries: `id`, `label`, `icon`, `color` (dark, for active text),
`accent` (mid, for highlights/pins), `bg` (pale, reserved), `subtitle`, and `entries[]`.

### Standard category palette (reuse across all fields for consistency)
```
theory       color #1A3A5C  accent #2471A3   (blue)
study        color #4A235A  accent #7D3C98   (purple)
effect       color #0B4F2E  accent #117A65   (green)
concept      color #2C3E50  accent #566573   (slate)
method       color #4A3200  accent #8B5E00   (gold)
figure       color #3E2723  accent #6D4C41   (brown)
debate       color #6E4A00  accent #B7770D   (amber)
application  color #14502E  accent #2E7D52   (emerald)
```

---

## Entry schema

```jsonc
{
  "id": "st2",                         // unique within the folio (cat-prefix + number)
  "group": "Conformity & Obedience",   // field-specific subtopic (see below)
  "label": "Milgram Obedience Experiments",
  "date": "1961–63",                   // year(s) of the key study; first 4-digit year sorts
  "loc": "Yale University, New Haven, Connecticut",  // where the work was done
  "coords": [41.31, -72.93],           // institution lat/lng for the map (null = no pin)
  "hint": "Plain-language explanation of the finding in 1–3 sentences.",
  "tag": "EXPERIMENT",                 // see tag vocabulary below
  "note": "Full citation + replication status + caveats."
}
```

`coords` point at the **institution**, not a historical place. A field's map becomes a
geography of where its knowledge was produced — a genuinely interesting view in itself.
Use `null` for entries with no meaningful location (e.g. a pure concept).

The `dynasty` field from histomap is unused here but still renders as a small pill if
present — handy for, e.g., a Nobel year or a school of thought.

---

## The `group` field — field-specific subtopics

`group` is where each field expresses its own internal structure. Entries with the same
`group` are clustered together under a subheading in the List view. Keep groups
consistent *within* a folio; they differ *between* folios.

**Example — Social Psychology groups:** Conformity & Obedience · Intergroup Relations ·
The Self & Cognition · Attitudes & Persuasion · Perceiving Others · Helping & Harm ·
Groups & Performance · Learning & Influence.

**Example — what Physics groups might be:** Classical Mechanics · Thermodynamics ·
Electromagnetism · Relativity · Quantum Mechanics · Particle Physics · Condensed Matter.

For the `figure` category, a good universal group scheme is the subfield the person is
associated with (or "Founders" for field-definers).

---

## Tag vocabulary (drives the modal colour)

Defined in `TAG_COLORS` in `index.html`. Extend there if a field needs new ones.

| Tag | For |
|---|---|
| `THEORY` / `MODEL` / `FRAMEWORK` | theoretical entries |
| `EXPERIMENT` / `FIELD STUDY` / `NATURAL EXPERIMENT` | empirical studies |
| `EFFECT` / `PHENOMENON` / `BIAS` | named findings |
| `META-ANALYSIS` / `REPLICATION` / `FAILED REPLICATION` | cumulative evidence |
| `CONCEPT` / `CONSTRUCT` / `SCALE` / `MEASURE` | concepts and instruments |
| `LAW` / `PRINCIPLE` | formal laws (physics, chemistry) |
| `FIGURE` | people |
| `DISCOVERY` | dated discoveries/milestones |
| `APPLICATION` | real-world uses |
| `DEBATE` / `REVISION` | contested or revised claims |

---

## Timeline

The `timeline` array holds one lane per category that has dateable events (you don't need
all 8 — `concept` and `figure` are often omitted). Lane order should mirror category order.

```jsonc
{ "id":"study", "icon":"🧪", "accent":"#7D3C98", "label":"Landmark Studies", "events":[
  { "y":1963, "l":"Milgram obedience", "entryId":"st2" }   // entryId links to the entry
]}
```

- `y` is the year (negative for BC, as in histomap — rarely needed for science).
- `entryId` links the dot to its entry so clicking it opens the modal. Always set it.
- Use a span bar (`y2`) only for genuine durations (a person's lifespan in a `figure`
  lane, a research programme's active years). Discoveries are point events — dots only.

---

## Adding a new field

1. **Create** `modules/<field-id>.json` following the schema above.
2. **Register** it in the `FIELDS` array in `index.html`:
   ```js
   { id:"physics", domain:"Physical", label:"Physics",
     sub:"Matter, energy, force & spacetime", status:"ready", file:"modules/physics.json" },
   ```
3. Flip `status` from `"planned"` to `"ready"` and add the `file` path. Planned fields
   show as greyed, non-clickable cards — a visible roadmap.
4. The `domain` must match one of the `DOMAINS` ids: `Formal`, `Physical`, `Life`,
   `Mind`, `Social`. Add a new domain to `DOMAINS` if needed.

---

## Validation checklist before committing a folio

- [ ] All 8 categories present in canonical order?
- [ ] Every entry has a real citation in `note` (not just a restatement of the hint)?
- [ ] Replication status / caveats noted for any contested effect?
- [ ] Entries sorted sensibly within each `group` (usually by date ascending)?
- [ ] `coords` point at the institution (or `null`), and are roughly correct?
- [ ] No duplicate entry `id`s?
- [ ] Every timeline `entryId` resolves to a real entry?
- [ ] Field registered in `FIELDS` with `status:"ready"` and a `file` path?

Run a quick check with Node:
```bash
node -e "const d=require('./modules/<field>.json');const ids=new Set();let dup=0,bad=0;d.categories.forEach(c=>c.entries.forEach(e=>{if(ids.has(e.id))dup++;ids.add(e.id)}));(d.timeline||[]).forEach(l=>l.events.forEach(e=>{if(e.entryId&&!ids.has(e.entryId))bad++}));console.log('entries',[...ids].length,'dups',dup,'brokenRefs',bad)"
```

---

## Editorial guidance

1. **State findings at the right altitude.** The `hint` is for an intelligent
   non-specialist. The `note` is for someone who wants the citation and the caveats.
2. **Don't launder uncertainty.** If an effect failed to replicate, the entry should say
   so — ideally with a dedicated `debate` entry as well as a flag on the original.
3. **Name people fairly.** Credit is contested in science; where a finding has a disputed
   or shared origin, say so rather than picking one name.
4. **Avoid triumphalism.** Science is revision. The `debate` category is not an
   afterthought — for many modern fields it is the most important lens.
5. **Watch the WEIRD problem** (Henrich et al. 2010) for behavioural fields: flag where a
   "universal" claim rests only on Western university subjects.
