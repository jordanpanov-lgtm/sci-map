'use strict';
const fs   = require('fs');
const path = require('path');

const DIR    = path.join(__dirname);
const OUTPUT = path.join(DIR, '_global_index.json');

const files = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .sort();

const index  = {};
const xlinks = {};   // key → [target, ...]  (both explicit and auto-derived reverse)
const folios = [];
let   total  = 0;

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

  // Collect xlinks from entry data, and auto-derive the reverse direction
  if (Array.isArray(data.categories)) {
    for (const cat of data.categories) {
      for (const entry of (cat.entries || [])) {
        if (!Array.isArray(entry.xlinks) || entry.xlinks.length === 0) continue;
        const src = `${folioId}::${entry.id}`;
        for (const tgt of entry.xlinks) {
          if (!xlinks[src]) xlinks[src] = [];
          if (!xlinks[src].includes(tgt)) xlinks[src].push(tgt);
          // reverse
          if (!xlinks[tgt]) xlinks[tgt] = [];
          if (!xlinks[tgt].includes(src)) xlinks[tgt].push(src);
        }
      }
    }
  }
}

const xlinkCount = Object.values(xlinks).reduce((n, arr) => n + arr.length, 0) / 2;

const output = {
  _meta: {
    total_entries: total,
    folio_count:   folios.length,
    xlink_pairs:   Math.round(xlinkCount),
    folios,
    last_updated:  new Date().toISOString().slice(0, 10)
  },
  index,
  xlinks
};

fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));

console.log(`✓ _global_index.json built`);
console.log(`  ${folios.length} folios  |  ${total} total entries  |  ${Math.round(xlinkCount)} xlink pairs`);
console.log();
folios.forEach(f => console.log(`  ${f.id.padEnd(36)} ${String(f.entries).padStart(3)} entries`));
