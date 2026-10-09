---
type: glossary
term: "オープンソース"
reading: おーぷんそーす
english: "Open Source"
short: "誰でも使ったり作りかえたりできる形で公開されたもの。AIでは、中身が公開されたモデルを指すことが多い。"
category: 活用・応用
date: 2026-10-08
tags: []
related: [glossary/local-llm, glossary/fine-tuning, articles/ai-types-overview, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

ChatGPT や Claude のモデルは、中身（[パラメータ](/glossary/parameter/)）が公開されていません。
一方、Meta の Llama や、DeepSeek、Mistral などは、モデルの中身がダウンロードできる形で公開されています。

## できること

- 自分のPCやサーバーで動かす（[ローカルLLM](/glossary/local-llm/)）
- 自分の用途に合わせて[ファインチューニング](/glossary/fine-tuning/)する

:::point[言葉の注意]
AIの世界では、モデルの中身（重み）は公開しているけれど、学習データや使い方に条件があるものも多く、厳密には **「オープンウェイト」** と呼ぶべきだ、という意見もあります。使うときはライセンス（利用条件）を確認しましょう。
:::
