---
type: glossary
term: "エンベディング（埋め込み）"
reading: えんべでぃんぐ
english: "Embedding"
short: "文章などを、意味をあらわす数値の並び（ベクトル）に変換する処理。検索や RAG で使われる。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/vector-database, glossary/rag, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIは、文章の意味を **数値の並び（ベクトル）** にして扱うことができます。
意味が近い文章は、数値も近くなるように変換されます。

## 例

- 「犬の散歩」と「ペットと外出」は、言葉はちがっても意味が近いので、近い数値になる
- これを使うと、**キーワードが一致しなくても、意味が近い資料を探せる**

:::point
[RAG](/glossary/rag/) で「質問に関係する資料を探す」ときによく使われます。変換した数値は [ベクトルデータベース](/glossary/vector-database/) に保存します。
:::
