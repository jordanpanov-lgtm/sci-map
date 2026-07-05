# Sci-Map — Agent Instructions

## This project

- **Repo:** `C:\Users\josol\Downloads\04. social\sci-map` (GitHub: `jordanpanov-lgtm/sci-map`)
- **Live site:** GitHub Pages on the `main` branch — `jordanpanov-lgtm.github.io/sci-map`
- **Dev server:** `npx http-server -p 8131 -c-1 .` from the `sci-map/` root (port 8131)
- **Do NOT confuse with** `knowledge-library` (a sibling project in `04. social/`) or `mydceo` — they are separate repos with separate servers.

---

## For any folio work — read these two files first, every time

```
modules/FIELD_GUIDE.md          ← canonical schema spec (entry fields, repl rules, tag vocab, checklist)
.claude/commands/new-folio.md   ← full creation workflow incl. batch checkpointing
```

Do **not** infer the schema from existing JSON files — they may have minor deviations. FIELD_GUIDE.md is the truth.

---

## Key locations in `config/`

| Thing | Where |
|---|---|
| `FIELDS` array (register/flip status) | `config/registry.js` |
| `STUDY_PLANS` object (study plan) | `config/study-plans.js` |

Register every new folio in **both** places.

---

## Global cross-folio index

`modules/_global_index.json` maps every `folio::entryId` across all ready folios.

**Always rebuild it as the last step when completing a folio:**
```
node modules/build-global-index.js
```

Commit `_global_index.json` alongside `config/registry.js` in the final "feat: … folio complete" commit.

The `xlinks` field on entries (format: `["folio::id"]`) is the schema for cross-folio references.
Add them manually when you are confident both entries refer to the same entity. Use `_global_index.json`
or the standalone `modules/build-xlink-candidates.js` script as research tools when searching for candidates.
See FIELD_GUIDE.md §xlinks for authoring rules and validation.

---

## Audio files

`assets/audio (do not load)/` is gitignored — never commit audio files, even if stored locally.
