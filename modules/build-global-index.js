'use strict';
const fs   = require('fs');
const path = require('path');

const DIR    = path.join(__dirname);
const OUTPUT = path.join(DIR, '_global_index.json');

const files = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .sort();

const index         = {};
const xlinks        = {};   // key → [target, ...]  (both explicit and auto-derived reverse)
const entryKeywords = {};   // key → ["term", ...]
const keywordIndex  = {};   // term → [key, ...]  (inverted)
const folios        = [];
let   total         = 0;

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));

  if (!data._index || !data.id) continue;   // skip files without _index

  const folioId = data.id;
  const count   = Object.keys(data._index).length;

  folios.push({ id: folioId, title: data.title, entries: count });
  total += count;

  for (const [entryId, label] of Object.entries(data._index)) {
    index[`${folioId}::${entryId}`] = label;
  }

  if (Array.isArray(data.categories)) {
    for (const cat of data.categories) {
      for (const entry of (cat.entries || [])) {
        const key = `${folioId}::${entry.id}`;

        // xlinks — collect explicit and derive reverse
        if (Array.isArray(entry.xlinks) && entry.xlinks.length) {
          for (const tgt of entry.xlinks) {
            if (!xlinks[key]) xlinks[key] = [];
            if (!xlinks[key].includes(tgt)) xlinks[key].push(tgt);
            if (!xlinks[tgt]) xlinks[tgt] = [];
            if (!xlinks[tgt].includes(key)) xlinks[tgt].push(key);
          }
        }

        // keywords — collect per-entry and build inverted index
        if (Array.isArray(entry.keywords) && entry.keywords.length) {
          entryKeywords[key] = entry.keywords;
          for (const term of entry.keywords) {
            if (!keywordIndex[term]) keywordIndex[term] = [];
            keywordIndex[term].push(key);
          }
        }
      }
    }
  }
}

const xlinkCount   = Object.values(xlinks).reduce((n, arr) => n + arr.length, 0) / 2;
const keywordCount = Object.keys(keywordIndex).length;

const output = {
  _meta: {
    total_entries:  total,
    folio_count:    folios.length,
    xlink_pairs:    Math.round(xlinkCount),
    keyword_terms:  keywordCount,
    folios,
    last_updated:   new Date().toISOString().slice(0, 10)
  },
  index,
  xlinks,
  entry_keywords: entryKeywords,
  keyword_index:  keywordIndex,
};

fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));

console.log(`✓ _global_index.json built`);
console.log(`  ${folios.length} folios  |  ${total} total entries  |  ${Math.round(xlinkCount)} xlink pairs`);
console.log();
folios.forEach(f => console.log(`  ${f.id.padEnd(36)} ${String(f.entries).padStart(3)} entries`));
