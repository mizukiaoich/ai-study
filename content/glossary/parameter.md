---
type: glossary
term: "パラメータ"
reading: ぱらめーた
english: "Parameter"
short: "モデルの中にある、たくさんの数値のこと。多いほど大きなモデルで、高性能になりやすい。"
category: 基本
date: 2026-10-08
tags: []
related: [glossary/model, glossary/scaling-laws, glossary/quantization, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

[モデル](/glossary/model/)の中には、[学習](/glossary/training/)によって調整された大量の数値が入っています。これが **パラメータ** です。
大きなモデルでは、パラメータの数が **数十億〜数兆個** になると言われています。

:::point
「パラメータが多い＝必ず賢い」わけではありません。学習データの質や、学習のしかたによっても性能は変わります。
:::

## 関連する考え方

パラメータやデータを増やすと性能が上がりやすい、という経験則は [スケーリング則](/glossary/scaling-laws/) と呼ばれます。
