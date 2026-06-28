# Science Atlas (sci-map)

An interactive atlas of scientific knowledge, organised by **field**. Each field is a
self-contained "folio" — a single JSON file — surfaced through three linked views:

- **☰ List** — every fact grouped under uniform categories and field-specific subtopics
- **◫ Timeline** — discoveries plotted across the decades, one lane per category
- **◎ Map** — pins at the institution where each piece of work was carried out

It is a sibling of [histomap](https://github.com/jordanpanov-lgtm/histomap-): same
single-file, no-build architecture (vanilla JS + [Leaflet](https://leafletjs.com/)), but
organised by scientific field rather than by region and period.

## The model

Every field shares the same eight category lenses, so the whole thing reads as one atlas:

📐 Theories · 🧪 Studies · 📊 Effects · 🧩 Concepts · 🔬 Methods · 👤 Figures · ⚖️ Debates · 🔗 Applications

Within a field, the `group` field carries the field-specific subtopic. **Every entry
anchors to a landmark study or paper**, and notes its replication status where relevant —
so the Debates lens (replication crisis, contested classics, WEIRD samples) sits right
beside the textbook findings.

## Status

| Domain | Field | Status |
|---|---|---|
| Mind & Behaviour | Social Psychology | ✅ ready (53 entries) |
| _everything else_ | 17 fields registered | 🕓 planned |

## Run locally

It's a static site — any web server works:

```bash
npx http-server -p 8131 -c-1 .
# then open http://localhost:8131
```

## Add a field

See [`modules/FIELD_GUIDE.md`](modules/FIELD_GUIDE.md) for the full schema and rules.
In short: create `modules/<field>.json`, then register it in the `FIELDS` array in
`index.html` with `status:"ready"` and a `file` path.
