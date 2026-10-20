---
type: glossary
term: "ツール連携"
reading: つーるれんけい
english: "Tool Use / Function Calling"
short: "AIが、計算機・Web検索・ファイル操作などの「道具」を自分で使って答えること。"
category: 活用・応用
date: 2026-10-20
tags: [LLM]
related: [glossary/mcp, glossary/ai-agent, glossary/rag, articles/llm, learning/day008]
sources:
  - type: discord
    title: Day 8 のメンバーのまとめ「LLMとは」
---
## もう少しくわしく

LLM は文章を作るのは得意ですが、正確な計算や最新情報の取得は苦手です。
そこで、AIが必要に応じて **外部の道具（ツール）を呼び出して使う** しくみが作られました。「Function Calling」とも呼ばれます。

## 例

| 苦手なこと | 使う道具 |
| --- | --- |
| 正確な計算 | 計算機・プログラムの実行 |
| 最新の情報 | Web検索 |
| 自分のファイルの内容 | ファイルの読み書き |

:::point
- いろいろな道具とAIを共通のルールでつなぐのが [MCP](/glossary/mcp/) です。
- 道具を使いながら、自分で手順を考えて作業を進めるのが [AIエージェント](/glossary/ai-agent/) です。
:::
