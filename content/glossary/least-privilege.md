---
type: glossary
term: "最小権限"
reading: さいしょうけんげん
english: "Principle of Least Privilege"
short: "AIやアプリには、その作業に必要な分だけの権限（できること）をあたえる、という安全の考え方。"
category: 社会・ルール
date: 2026-10-27
tags: [AIエージェント]
related: [glossary/prompt-injection, glossary/ai-agent, glossary/api-key, articles/personal-ai-agents, learning/day009]
sources:
  - type: discord
    title: Day 9 の調査「MetaのAI『Muse』」
---
## もう少しくわしく

たとえば「予定を確認して」と頼むだけなら、カレンダーを **見る** 権限があれば十分です。メールの送信や支払いの権限まであたえる必要はありません。
必要以上の権限をあたえないことで、AIが間違えたり、だまされたり（[プロンプトインジェクション](/glossary/prompt-injection/)）したときの被害を小さくできます。

## AIエージェントを使うときのチェック

- その作業に、本当にその権限が必要？
- 「読むだけ」で足りない？
- 支払い・送信・削除は、毎回承認する設定になっている？
- 使わなくなった連携は、解除した？

:::point
[Muse](/tools/muse/) などのAIエージェントを使うときに、特に大事な考え方です（[Muse とは？](/articles/personal-ai-agents/)）。
:::
