---
type: glossary
term: "注意機構（アテンション）"
reading: ちゅういきこう
english: "Attention"
short: "文章の中で、どの言葉とどの言葉が関係しているかを計算するしくみ。Transformer の中心。"
category: 精度・仕組み
date: 2026-10-20
tags: [LLM]
related: [glossary/transformer, glossary/llm, articles/llm, learning/day008]
sources:
  - type: discord
    title: Day 8 のメンバーのまとめ「LLMとは」
---
## もう少しくわしく

文章を読むとき、人は無意識に「この言葉はあの言葉のことだな」と結びつけています。
LLM の中でそれを行っているのが **注意機構（アテンション）** です。それぞれの言葉が、ほかのどの言葉に「注意を向ければよいか」を計算します。

## 例

「太郎はケーキを買った。**それ**を妹と食べた。」

→「それ」は「ケーキ」のこと。アテンションは、「それ」と「ケーキ」の結びつきが強いと計算します。

:::point
2017年の [Transformer](/glossary/transformer/) の論文のタイトルは「Attention Is All You Need（必要なのはアテンションだけ）」でした。それくらい中心的なしくみです。
:::
