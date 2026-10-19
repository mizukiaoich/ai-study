---
type: glossary
term: "APIキー"
reading: えーぴーあいきー
english: "API Key"
short: "API を使うときの「合言葉（パスワード）」のようなもの。他人に知られると勝手に使われてしまう。"
category: 使うとき
date: 2026-10-19
tags: [アプリ開発]
related: [glossary/api, glossary/pay-as-you-go, glossary/git, articles/ai-app-dev-flow, learning/day007]
sources:
  - type: discord
    title: Day 7 の資料「AIを活用したPC・スマホアプリ開発フロー」
---
## もう少しくわしく

AIなどの [API](/glossary/api/) を使うとき、「誰が使っているか」を確認するために使う長い文字列です。
API は使った分だけ料金がかかる（[従量課金](/glossary/pay-as-you-go/)）ことが多いので、もれると **他人に使われて高額な請求が来る** ことがあります。

:::warning[守り方]
- プログラムの中に直接書かない（`.env` などの別ファイルに書く）
- そのファイルは [Git](/glossary/git/) に入れない（`.gitignore` に書く）
- GitHub などに公開してしまったら、**すぐに無効にして作り直す**
- 使える金額の上限を設定しておく
:::
