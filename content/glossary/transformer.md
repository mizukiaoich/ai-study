---
type: glossary
term: "Transformer"
reading: とらんすふぉーまー
english: "Transformer"
short: "今の多くの生成AIの土台になっている技術。"
category: 精度・仕組み
date: 2026-10-08
tags: []
related: [glossary/llm, glossary/diffusion-model, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

2017年に Google の研究者たちが発表した論文で紹介された、AIの設計図（しくみ）です。
文章の中の **どの言葉とどの言葉が関係しているか** に注目（アテンション）しながら処理するのが特徴です。

## どこで使われている？

- ChatGPT の「GPT」は **Generative Pre-trained Transformer** の略で、最後の T がこの Transformer です。
- Claude や Gemini など、多くの [LLM](/glossary/llm/) がこのしくみをもとにしています。

:::point
初心者のうちは「今のAIブームの土台になった発明」と覚えておけば十分です。
:::
