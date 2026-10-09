---
type: glossary
term: "拡散モデル"
reading: かくさんもでる
english: "Diffusion Model"
short: "画像生成AIで使われる代表的なしくみ。ノイズから少しずつ画像を作り出す。"
category: 精度・仕組み
date: 2026-10-08
tags: []
related: [articles/ai-types-overview, glossary/generative-ai, glossary/transformer, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

1. きれいな画像に、少しずつノイズ（砂嵐のようなザラザラ）を加えていくと、最後は何の絵か分からなくなる
2. AIはその **逆の手順**（ノイズを少しずつ取り除く方法）を学習する
3. 画像を作るときは、ノイズだけの状態から少しずつノイズを取り除いて、言葉に合った画像を作り出す

## 使われている例

Stable Diffusion など、多くの画像生成AIで使われています（[主な生成AIまとめ](/articles/ai-types-overview/)）。

:::question
[Day 2](/learning/day002/) で出た「画像を作るAIと文章を作るAIは同じ仕組み？」という疑問への答えのひとつです。ただし最近は、両方を組み合わせたしくみもあるようで、まだよく分かっていません。
:::
