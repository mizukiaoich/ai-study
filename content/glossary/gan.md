---
type: glossary
term: GAN（敵対的生成ネットワーク）
reading: がん
english: Generative Adversarial Network
short: 「作る係」と「見破る係」の2つのAIを競わせて、本物そっくりの画像などを作るしくみ。
category: 精度・仕組み
date: 2026-10-13
tags: [しくみ, 画像生成, 歴史]
related: [glossary/diffusion-model, articles/generative-ai, learning/day006]
sources:
  - type: discord
    title: Day 6 のメンバーのまとめ
---

## もう少しくわしく

2014年に発表されたしくみで、2つのAIを組み合わせます。

- **生成する係（ジェネレーター）**：にせものの画像を作る
- **見破る係（ディスクリミネーター）**：本物か、にせものかを見分ける

おたがいに競い合ううちに、作る係がどんどん上手になり、本物そっくりの画像を作れるようになります。

## たとえると

にせ札を作る人と、それを見破る警察が競い合って、どちらも腕を上げていくイメージです。

:::point
生成AIの歴史の中で、画像生成を大きく進歩させた技術です（[生成AIとは？](/articles/generative-ai/)）。今の画像生成AIの多くは [拡散モデル](/glossary/diffusion-model/) を使っています。
:::
