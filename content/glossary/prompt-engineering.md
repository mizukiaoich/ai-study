---
type: glossary
term: "プロンプトエンジニアリング"
reading: ぷろんぷとえんじにありんぐ
english: "Prompt Engineering"
short: "AIから良い答えを引き出すために、指示（プロンプト）の書き方を工夫すること。"
category: 使うとき
date: 2026-10-08
tags: []
related: [glossary/prompt, glossary/zero-shot-few-shot, glossary/chain-of-thought, glossary/system-prompt, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

同じことを聞いても、[プロンプト](/glossary/prompt/)の書き方しだいで答えの質が大きく変わります。
その書き方のコツを考えることを **プロンプトエンジニアリング** と呼びます。

## よく使われるコツ

- **役割を伝える**：「あなたは小学校の先生です」
- **目的と条件をはっきり書く**：「中学生向けに、300字で」
- **出力の形を指定する**：「表にして」「箇条書きで」
- **例を見せる**：[フューショット](/glossary/zero-shot-few-shot/)
- **順を追って考えてもらう**：[Chain of Thought](/glossary/chain-of-thought/)

:::tried
[実験001](/experiments/experiment001/) では、予算を書き忘れたら高すぎる旅行プランが出てきました。条件を書くことは大事です。
:::
