# Sci-Map — Agent Instructions

This is a single-page science atlas built on a JSON-per-field folio system.

---

## Before doing anything folio-related — READ FIRST

When the user asks you to create or edit a folio, or asks about the folio schema, do this **before writing any code or JSON**:

1. Read `modules/FIELD_GUIDE.md` — this is the canonical schema reference. Do **not** infer the schema from existing JSON files; they may contain minor deviations.
2. Read `.claude/commands/new-folio.md` — this is the step-by-step workflow for creating a new folio. Follow it exactly, in order.

Both files are short. Reading them takes seconds and prevents the most common mistakes (wrong field names, missing `repl` badge, non-reciprocal links, orphaned study-plan groups).

---

## Folio creation — mandatory workflow

The workflow in `.claude/commands/new-folio.md` has 7 steps. **Do not skip Step 2 (group proposal + user confirmation)** — writing all entries before the user has approved the group structure wastes a full generation.

Key rules in brief (details in FIELD_GUIDE.md):
- Categories always in order: `theory → study → effect → concept → method → figure → debate → application`
- `repl` badge on every `study` and `effect` entry; absent from all others
- Every link must be reciprocal: if A lists B, B must list A — run the validation script
- `date` on figure entries = year of landmark contribution, not birth year
- Write JSON via a Node.js generation script (scratchpad), not by hand — avoids `"` escaping bugs
- Validate with `node -e "JSON.parse(require('fs').readFileSync('modules/<id>.json','utf8')); console.log('OK')"` before committing

---

## Project structure

```
index.html          — single-page app; contains FIELDS array (~line 310) and STUDY_PLANS (~line 1192)
modules/            — one JSON file per field
modules/FIELD_GUIDE.md   — authoritative schema spec
.claude/commands/new-folio.md   — folio creation workflow
```

Register a new folio in **two places** in `index.html`:
1. `FIELDS` array — flip `status:"planned"` → `status:"ready"`, add `file:"modules/<id>.json"`
2. `STUDY_PLANS` object — add the study plan keyed by folio id

---

## Audio files

`assets/audio (do not load)/` is gitignored and stored locally only. Never commit audio files.

---

## Memory

The user's persistent memory at `~/.claude/projects/.../memory/` contains additional project context, including `project_scimap_folio_schema.md` with the color palette and category counts for quick reference.
