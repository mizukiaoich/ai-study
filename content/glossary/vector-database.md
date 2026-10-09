---
type: glossary
term: "ベクトルデータベース"
reading: べくとるでーたべーす
english: "Vector Database"
short: "エンベディング（意味をあらわす数値）を保存して、意味の近さで検索できるデータベース。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/embedding, glossary/rag, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

ふつうのデータベースは「キーワードが一致するもの」を探しますが、ベクトルデータベースは **意味が近いもの** を探せます。

## 使われ方（RAG の流れ）

1. 資料を[エンベディング](/glossary/embedding/)して、ベクトルデータベースに保存しておく
2. 質問もエンベディングして、意味が近い資料を探す
3. 見つけた資料をAIに渡して答えさせる（[RAG](/glossary/rag/)）
