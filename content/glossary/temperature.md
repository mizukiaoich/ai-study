---
type: glossary
term: "温度（Temperature）"
reading: おんど
english: "Temperature"
short: "答えのランダムさ（ばらつき）を決める設定。高いほど多様に、低いほど安定する。"
category: 発展
date: 2026-10-08
tags: []
related: [glossary/api, learning/day001, learning/day005]
sources:
  - type: discord
    title: Day 5 でメンバーが作った用語集（materials/day005/）
---
## もう少しくわしく

AIは「次に来そうな言葉」の候補から言葉を選んで文章を作ります。温度は、その選び方の **冒険度** を決める設定です。

| 温度 | 答えの特徴 | 向いていること |
| --- | --- | --- |
| 低い | 毎回にた答え、安定している | 事実の確認、まとめ、計算 |
| 高い | 毎回ちがう答え、意外性がある | アイデア出し、物語づくり |

:::tried
[Day 1](/learning/day001/) で「同じ質問をしても、毎回少しちがう答えが返ってくる」ことに気づきました。これはこの設定などが関係しています。
:::

:::point
ふつうのチャット画面では温度を変えられないことが多く、主に [API](/glossary/api/) を使うときに設定します。
:::
