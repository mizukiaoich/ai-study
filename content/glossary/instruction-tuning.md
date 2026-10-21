---
type: glossary
term: "追加の調整（インストラクションチューニング）"
reading: ついかのちょうせい
english: "Instruction Tuning"
short: "質問と良い答えの例を学ばせて、指示に沿って答えられるようにする学習。"
category: 精度・仕組み
date: 2026-10-20
tags: [LLM]
related: [glossary/pre-training, glossary/rlhf, glossary/fine-tuning, articles/llm, learning/day008]
sources:
  - type: discord
    title: Day 8 のメンバーのまとめ「LLMとは」
---
## もう少しくわしく

[事前学習](/glossary/pre-training/) を終えたモデルに、「こういう質問には、こう答える」という **お手本の会話** をたくさん学ばせます。
これで、文章の続きを書くだけのAIが、**指示に従って答えるアシスタント** らしくなります。

## LLM の学習の流れ

1. [事前学習](/glossary/pre-training/)：言葉の知識を身につける
2. **追加の調整**：指示に沿って答える練習
3. 人間のフィードバック（[RLHF](/glossary/rlhf/)）：より好ましい答え方に近づける

:::point
特定の分野に合わせて追加で学習させる [ファインチューニング](/glossary/fine-tuning/) の一種です。
:::
