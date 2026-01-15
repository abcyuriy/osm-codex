// @ts-check
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function readDocs(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const walk = (current, relBase) => {
    for (const entry of fs.readdirSync(current, {withFileTypes: true})) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full, path.join(relBase, entry.name));
        continue;
      }
      if (!entry.isFile()) continue;
      if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;
      const raw = fs.readFileSync(full, 'utf8');
      const parsed = matter(raw);
      const relId = path
        .join(relBase, entry.name)
        .replace(/\.(md|mdx)$/i, '')
        .replace(/\\/g, '/');
      out.push({
        id: relId,
        title: parsed.data?.title,
        tag: parsed.data?.tag,
      });
    }
  };
  walk(dir, '');
  return out;
}

function docItem(docId, label, tag) {
  const item = { type: 'doc', id: docId };
  if (label) item.label = label;
  if (typeof tag === 'string' && tag.trim()) item.customProps = { tag: tag.trim() };
  return item;
}

const GROUPS = [
  { label: 'Actions', match: n => /button|pillbutton|command/i.test(n) },
  { label: 'Inputs & Selection', match: n => /textfield|picker|segmented|select|search|date/i.test(n) },
  { label: 'Navigation', match: n => /navigation|tabbar|sidetab|drawer/i.test(n) },
  { label: 'Lists & Cells', match: n => /list|tableview|cell|headerfooter|othercells/i.test(n) },
  { label: 'Display & Content', match: n => /card|avatar|label|badge/i.test(n) },
  { label: 'Feedback & Status', match: n => /activity|progress|hud|notification|shimmer|skeleton|toast|loading/i.test(n) },
  { label: 'Overlays & Popovers', match: n => /bottomsheet|popup|tooltip|popover|modal/i.test(n) },
  { label: 'Other', match: _ => true },
];

function buildGroupedComponents(docs) {
  const buckets = GROUPS.map(g => ({...g, items: []}));
  for (const d of docs) {
    const name = String(d.id || '').toLowerCase();
    const b = buckets.find(g => g.match(name)) || buckets[buckets.length - 1];
    b.items.push(d);
  }
  return buckets
    .filter(b => b.items.length)
    .map(b => {
      b.items.sort((a,b2)=>String(a.title||a.id).localeCompare(String(b2.title||b2.id)));
      return {
        type: 'category',
        label: b.label,
        collapsed: true,
        items: b.items.map(d => docItem(`components/${d.id}`, d.title, d.tag)),
      };
    });
}

function buildFlat(docs, prefix) {
  const items = docs.map(d => docItem(`${prefix}/${d.id}`, d.title, d.tag));
  items.sort((a,b)=>String(a.label||a.id).localeCompare(String(b.label||b.id)));
  return items;
}

const docsRoot = path.join(__dirname, 'docs');
const overviewPath = path.join(docsRoot, 'overview.md');

const components = readDocs(path.join(docsRoot, 'components'));
const tokens = readDocs(path.join(docsRoot, 'tokens'));

const sidebar = [
  fs.existsSync(overviewPath) ? 'overview' : null,
  {
    type: 'category',
    label: 'Компоненты React',
    collapsed: true,
    items: [{type: 'doc', id: 'components-react/soon', label: 'Скоро'}],
  },
  {
    type: 'category',
    label: 'Компоненты WebView',
    collapsed: false,
    items: buildGroupedComponents(components),
  },
  { type: 'category', label: 'Tokens', collapsed: false, items: buildFlat(tokens, 'tokens') },
].filter(Boolean);

module.exports = { docs: sidebar };
