# Science Atlas (sci-map)

An interactive atlas of scientific knowledge, organised by **field**. Each field is a
self-contained "folio" — a single JSON file — surfaced through five linked views:

- **☰ List** — every fact grouped under uniform categories and field-specific subtopics
- **◫ Timeline** — discoveries plotted across the decades, one lane per category
- **◎ Map** — pins at the institution where each piece of work was carried out
- **◈ Graph** — a network of cross-linked entries, filterable by category
- **◉ Study Plan** — entries ordered pedagogically for a student of the field

It is a sibling of [histomap](https://github.com/jordanpanov-lgtm/histomap-): same
single-file, no-build architecture (vanilla JS + [Leaflet](https://leafletjs.com/) +
[Cytoscape](https://js.cytoscape.org/)), but organised by scientific field rather than
by region and period.

## The model

Every field shares the same eight category lenses, so the whole thing reads as one atlas:

📐 Theories · 🧪 Studies · 📊 Effects · 🧩 Concepts · 🔬 Methods · 👤 Figures · ⚖️ Debates · 🔗 Applications

Within a field, the `group` field carries the field-specific subtopic. **Every entry
anchors to a landmark study or paper**, and notes its replication status where relevant —
so the Debates lens (replication crisis, contested classics, WEIRD samples) sits right
beside the textbook findings.

## Atlas hierarchy

The picker is organised as **Trunk → Branch (Domain) → Folio (Field)** — 2 trunks,
10 branches, 41 folios total.

### 🧬 Science — Natural & Formal Sciences

| Branch | Folios |
|---|---|
| Human Biology & Medicine | Anatomy & Physiology · Genetics & Reproduction · Immunology & Disease |
| Life & Ecological Sciences | Cellular & Molecular Biology · Microbiology & Virology · Botany · Zoology & Animal Behavior |
| Physical Sciences & Chemistry | Chemistry: Organic & Polymer · Chemistry: Inorganic & Analytical · Physics: Classical · Physics: EM & Optics · Physics: Quantum, Nuclear & Relativity |
| Earth, Space & Environmental | Astronomy & Cosmology · Geology · Meteorology · Oceanography · Environmental Science |
| Formal Sciences & Computing | Logic & Foundations · Pure Mathematics · Probability & Statistics · Computer Science |

### 🏛️ Social — Social & Behavioural Sciences

| Branch | Folios |
|---|---|
| Psychology & The Mind | General & Cognitive · **Social Psychology** ✅ · Developmental & Educational · Clinical & Abnormal · Neuroscience & Behavior |
| Society & Culture | Sociology · Cultural Anthropology · Biological Anthropology · Demography |
| Civics, Systems & Governance | Economics · Political Science · Law & Jurisprudence · International Relations |
| Philosophy: Foundations | Epistemology · Ethics · Political & Economic Philosophy · Philosophy of Science |
| Language & Communication | Linguistics · Cognitive Linguistics · Communication Theory |

## Status

| Field | Status | Entries |
|---|---|---|
| Social Psychology | ✅ ready | 68 |
| _all other 40 fields_ | 🕓 planned | — |

## Run locally

It's a static site — any web server works:

```bash
npx http-server -p 8131 -c-1 .
# then open http://localhost:8131
```

## Add a field

See [`modules/FIELD_GUIDE.md`](modules/FIELD_GUIDE.md) for the full schema and rules.
In short: create `modules/<field-id>.json`, set `status:"ready"` and add the `file` path
in the matching entry of the `FIELDS` array in `index.html`.
