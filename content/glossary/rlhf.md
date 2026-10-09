---
type: glossary
term: "RLHF"
reading: あーるえるえいちえふ
english: "Reinforcement Learning from Human Feedback（人間のフィードバックによる強化学習）"
short: "人間が回答を評価し、その評価をもとにAIの答え方を改善する学習方法。"
category: 精度・仕組み
date: 2026-10-08
tags: []
related: [glossary/fine-tuning, glossary/guardrail, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIの回答をいくつか並べて、人間が「こっちのほうが良い」と評価します。その評価をもとに、AIがより良い答え方をするように学習させます。

## なぜ大事？

文章を続けるだけのAIを、**質問に役立つ答えを返す「アシスタント」らしいAI** にするために使われてきた方法です。ChatGPT が広まるきっかけになった技術のひとつと言われています。

:::point
「AIが丁寧に答えてくれる」「危ない質問を断る」といった振る舞いには、こうした学習が関係しています。
:::
