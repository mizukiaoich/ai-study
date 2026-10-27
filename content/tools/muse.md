---
type: tool
name: Muse
vendor: Meta
url: https://muse.ai/
summary: Meta のパーソナルAIエージェント。質問に答えるだけでなく、メール・予定・買い物・旅行などの作業を代わりに進める。2026年10月23日から日本でも利用可能。
icon: 🎭
color: "#0866ff"
order: 9
pricing: 基本は無料。有料プランは パワー（月2,799円）・マキシマム（月13,990円）（2026年10月時点の国内報道。米国は月20ドル・100ドル）。
freePlan: 基本機能の多くを無料で使える（使える量に上限あり）。
canDo: [複数サイトでの情報収集・比較, メールの確認と返信案（承認後に送信）, Google カレンダーの予定整理, 旅行・買い物の比較と手続きの補助, ブラウザ操作・フォーム入力, アプリを閉じた後も作業を継続]
strengths: [ふつうの文章で作業を頼める, 無料から試せる, Instagram など Meta のサービスとのつながり]
weaknesses: [便利に使うほど個人情報を渡すことになる, ログインや支払いで途中で止まることがある, 共有リンクのプライバシー問題が報告された（2026年10月）]
checkedAt: 2026-10-27
tags: [AIエージェント, Meta]
related: [articles/personal-ai-agents, news/2026-10-muse-japan, learning/day009, glossary/ai-agent]
sources:
  - type: official
    title: Meta「Muse」日本での提供開始
    url: https://about.fb.com/ja/news/2026/10/muse-personal-ai-agent-launches-in-japan/
  - type: other
    title: PC Watch：Muse 日本上陸（料金）
    url: https://pc.watch.impress.co.jp/docs/news/2150743.html
---

:::question[まだ試していません]
[Day 9](/learning/day009/) で調べたツールです。実際に使ったら、結果を追記してください。
:::

## 調べて分かったこと

くわしくは記事 [MetaのAIエージェント「Muse」とは？](/articles/personal-ai-agents/) にまとめています。

:::official[Meta の発表より]
- 2026年9月8日に米国で発表、**10月23日に日本で提供開始**（北米以外で初めて）
- iOS・Android・Web で利用でき、基本機能の多くは無料
- 中では Meta の [LLM](/glossary/llm/)「Muse Spark」が動いている
:::

:::warning[使うときの注意]
- 最初は、情報収集や比較など **失敗しても困らない作業** から
- 支払い・メール送信・個人情報を使う操作は慎重に。AIに与える権限は最小限に（[最小権限](/glossary/least-privilege/)）
- 2026年10月、会話の **共有リンクが第三者に見つけられる問題** が報道され、共有機能が一時停止された（[ニュース](/news/2026-10-muse-japan/)）
:::

:::point[同じ名前に注意]
「Muse AI」という名前の、別の会社のサービスもあります。Meta の Muse は **muse.ai** です。
:::
