# Sci-Map — Agent Instructions

## For any folio work — read these two files first, every time

```
modules/FIELD_GUIDE.md          ← canonical schema spec (entry fields, repl rules, tag vocab, checklist)
.claude/commands/new-folio.md   ← full creation workflow incl. batch checkpointing
```

Do **not** infer the schema from existing JSON files — they may have minor deviations. FIELD_GUIDE.md is the truth.

---

## Key locations in `index.html`

| Thing | Where |
|---|---|
| `FIELDS` array (register/flip status) | ~line 310 |
| `STUDY_PLANS` object (study plan) | ~line 1192 |

Register every new folio in **both** places.

---

## Global cross-folio index

`modules/_global_index.json` maps every `folio::entryId` across all ready folios.

**Always rebuild it as the last step when completing a folio:**
```
node modules/build-global-index.js
```

Commit `_global_index.json` alongside `index.html` in the final "feat: … folio complete" commit.

---

## Audio files

`assets/audio (do not load)/` is gitignored — never commit audio files, even if stored locally.
