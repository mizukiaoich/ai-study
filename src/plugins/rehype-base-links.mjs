// Markdown 内の「/glossary/llm/」のような絶対パスに、GitHub Pages のベースパスを付けます。
// これで記事内リンクを書くときにベースパスを意識しなくて済みます。
import { visit } from 'unist-util-visit';

export default function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    visit(tree, 'element', (node) => {
      for (const attr of ['href', 'src']) {
        const value = node.properties?.[attr];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(prefix + '/')) {
          node.properties[attr] = prefix + value;
        }
      }
    });
  };
}
