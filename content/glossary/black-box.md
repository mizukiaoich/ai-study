---
type: glossary
term: "ブラックボックス"
reading: ぶらっくぼっくす
english: "Black Box"
short: "中のしくみが外から見えず、なぜその結果になったのかを説明しにくいこと。"
category: 社会・ルール
date: 2026-10-20
tags: [LLM]
related: [glossary/bias, glossary/parameter, articles/llm, learning/day008]
sources:
  - type: discord
    title: Day 8 のメンバーのまとめ「LLMとは」
---
## もう少しくわしく

LLM の中では、ばく大な数の[パラメータ](/glossary/parameter/)が複雑に計算しています。そのため、**なぜその答えになったのかを、作った人でも完全には説明できない** と言われています。

## なぜ問題？

- 間違えたときに、原因を見つけにくい
- 医療・お金・採用など、理由の説明が必要な場面で使いにくい
- 偏り（[バイアス](/glossary/bias/)）に気づきにくい

:::point
AIの中で何が起きているかを調べる研究（**解釈可能性**の研究）が、AIの会社や大学で進められています。
:::

:::point[付き合い方]
答えだけでなく「根拠」や「出典」も一緒に出してもらうと、確かめやすくなります。
:::
