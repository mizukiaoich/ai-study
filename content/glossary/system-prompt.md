---
type: glossary
term: "システムプロンプト"
reading: しすてむぷろんぷと
english: "System Prompt"
short: "AIの振る舞いを決めるために、裏側で事前に与えておく指示のこと。"
category: 使うとき
date: 2026-10-08
tags: []
related: [glossary/prompt, glossary/prompt-engineering, glossary/guardrail, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

ふだん私たちが入力する[プロンプト](/glossary/prompt/)とは別に、AIサービスの側で「あなたは親切なアシスタントです」「〇〇の話題には答えない」などの指示を最初に入れていることがあります。これが **システムプロンプト** です。

## 自分で設定できることも

- ChatGPT の「カスタム指示」や、Claude の「プロジェクト」の指示など、**自分好みのシステムプロンプトに近い設定** ができるサービスもあります。
- 例：「いつも初心者向けに、専門用語には説明をつけて答えてください」

:::warning
システムプロンプトを無理やり聞き出したり、無視させたりしようとする行為（プロンプトインジェクション）は、セキュリティの問題として注意されています。
:::
