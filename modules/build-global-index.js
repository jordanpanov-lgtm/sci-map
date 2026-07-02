'use strict';
const fs   = require('fs');
const path = require('path');

const DIR    = path.join(__dirname);
const OUTPUT = path.join(DIR, '_global_index.json');

const files = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .sort();

const index  = {};
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
}

const output = {
  _meta: {
    total_entries: total,
    folio_count:   folios.length,
    folios,
    last_updated:  new Date().toISOString().slice(0, 10)
  },
  index
};

fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));

console.log(`✓ _global_index.json built`);
console.log(`  ${folios.length} folios  |  ${total} total entries`);
console.log();
folios.forEach(f => console.log(`  ${f.id.padEnd(36)} ${String(f.entries).padStart(3)} entries`));
