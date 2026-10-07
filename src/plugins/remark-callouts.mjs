// Markdown の「:::official」などの書き方を、色分けされたボックスに変換します。
// 使い方は templates/README.md を参照。
import { visit } from 'unist-util-visit';

export const CALLOUTS = {
  official: { label: '公式情報', icon: '📘' },
  tried: { label: '実際に試した結果', icon: '🧪' },
  member: { label: 'メンバーの感想', icon: '💬' },
  ai: { label: 'AIの回答（未検証）', icon: '🤖' },
  question: { label: 'まだ分からないこと', icon: '❓' },
  point: { label: 'ポイント', icon: '💡' },
  warning: { label: '注意', icon: '⚠️' },
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') {
        // 未対応の :xxx や ::xxx は元の文字列に戻す（「12:30」などの誤変換対策）
        if (node.type === 'textDirective' || node.type === 'leafDirective') {
          const prefix = node.type === 'textDirective' ? ':' : '::';
          const text = node.children?.map((c) => c.value ?? '').join('') ?? '';
          node.type = 'text';
          node.value = `${prefix}${node.name}${text ? `[${text}]` : ''}`;
          delete node.children;
        }
        return;
      }
      const info = CALLOUTS[node.name];
      if (!info) return;

      // :::official[独自の見出し] のようにラベルを上書きできる
      let label = info.label;
      const first = node.children[0];
      if (first?.data?.directiveLabel) {
        label = first.children.map((c) => c.value ?? '').join('');
        node.children.shift();
      }

      node.data = {
        hName: 'aside',
        hProperties: { className: ['callout', `callout-${node.name}`] },
      };
      node.children.unshift({
        type: 'paragraph',
        data: { hName: 'p', hProperties: { className: ['callout-title'] } },
        children: [{ type: 'text', value: `${info.icon} ${label}` }],
      });
    });
  };
}
