---
type: article
title: AIを活用したPC・スマホアプリ開発フロー 〜7つの工程と主なAIツール〜
category: make
topic: アプリ開発の流れ
date: 2026-10-19
summary: 企画から運用までの7工程で、「人が決めること」と「AIに任せること」、工程ごとのAIツール、進め方のコツと注意点をまとめました（2026年10月時点のメンバー調べ）。
tags: [アプリ開発, AIエージェント, プログラミング, スマホアプリ, Webアプリ]
related: [learning/day007, tools/claude-code, tools/cursor, tools/github-copilot, tools/openai-codex, tools/google-antigravity, glossary/ai-agent, glossary/rules-file, glossary/mvp, glossary/prd, glossary/git, glossary/pull-request, glossary/mcp]
sources:
  - type: discord
    title: Day 7 で mizuki さんが作成した「AIを活用したPC・スマホアプリ開発フロー」（materials/day007/）
  - type: other
    title: 元資料の参考文献（Scrimba、nocode.mba、Rork、Figma、Dupple、Techsy などの2026年の比較記事）
  - type: tried
    title: このサイト自体を Claude Code・CLAUDE.md・GitHub Actions で作った経験
  - type: other
    title: AIが存在しないパッケージ名を提案する問題（slopsquatting）についての記事
    url: https://www.endorlabs.com/learn/slopsquatting-when-ai-agents-hallucinate-malicious-packages
---

このページは、[Day 7](/learning/day007/) で mizuki さんがまとめた資料をもとに、補足を加えて整理したものです。

:::warning[ツールや料金について]
AIの開発ツールは、名前・機能・料金がとても早く変わります。ここに書いているのは **2026年10月時点のメンバー調べ** です。使う前に、必ず各公式サイトで確認してください。
:::

## 全体像

:::member[資料より]
AIでのアプリ開発は、企画から運用までの **7工程を小さく繰り返す** のが基本です。人は **「何を作るか」と「最終確認」** を担い、作業の大半をAIに任せます。
:::

![AIアプリ開発フロー：7つの工程と主なAIツール](/images/learning/day007-app-dev-flow.png)

| まとまり | 工程 | 主なAIツール |
| --- | --- | --- |
| 準備 | 1. 企画・要件定義 | ChatGPT・Claude・Gemini で壁打ち → 要件定義書 |
| 準備 | 2. 技術選定・設計 | チャットAIで技術比較 → AGENTS.md にルール化 |
| 作る | 3. UIデザイン・プロトタイプ | Google Stitch・Figma Make → Rork・Bolt で試作 |
| 作る | **4. 実装（中心工程）** | Claude Code・Cursor・Copilot・Codex・Antigravity |
| 作る | 5. テスト・レビュー | Playwright MCP・Maestro・CodeRabbit |
| 届ける | 6. リリース | GitHub Actions・Expo EAS でビルド、ストア文面もAI |
| 届ける | 7. 運用・改善 | Sentry・Crashlytics のログをAIに渡して修正 → 1へ戻る |

:::point
実装（4）が中心ですが、**品質を決めるのは 1〜2 で用意する「指示書」** です。試作（3）で気づいた変更も、そのつど要件定義書に戻します。
前の工程で作ったもの（成果物）が、次の工程でAIに渡す「指示書」になる、というのがこの流れのポイントです。
:::

## 工程ごとの作業手順

### 1. 企画・要件定義

| | 内容 |
| --- | --- |
| 目的 | 何を、誰のために作るかを決め、最初に作る範囲（[MVP](/glossary/mvp/)）をしぼる |
| 作業 | アイデア整理、ターゲットと利用シーン、競合調査、機能一覧、優先順位付け |
| AIの使い方 | チャットAIで壁打ち → 競合はリサーチ機能で調査 → [要件定義書（PRD）](/glossary/prd/)のたたき台を書かせる |
| 成果物 | 要件定義書、機能一覧（必須／後回し） |

### 2. 技術選定・設計

| | 内容 |
| --- | --- |
| 目的 | 対応する端末と開発方式を決め、AIが迷わず実装できる設計を用意する |
| 作業 | iOS / Android / Windows / Mac のどれに対応するか、[クロスプラットフォーム](/glossary/cross-platform/)にするか（例：スマホは Flutter や React Native / Expo、PCは Tauri や Electron）、データの保存先、画面遷移 |
| AIの使い方 | 要件定義書を渡して、技術の比較表と構成案を出させる。決めた内容は AGENTS.md / CLAUDE.md（[ルールファイル](/glossary/rules-file/)）にまとめ、以降のAIが毎回読むルールにする |
| 成果物 | 技術構成、画面一覧・遷移図、データ設計、AI向けルールファイル |

### 3. UIデザイン・プロトタイプ

| | 内容 |
| --- | --- |
| 目的 | 作り込む前に「さわれる形」で方向性を確かめる |
| 作業 | ワイヤーフレーム → デザイン案 → 動く試作品。実際にさわって要件を修正 |
| AIの使い方 | デザインAIで画面案を複数作る → 良いものを Figma で仕上げる。アプリビルダーで小さな動作版を作る |
| 成果物 | 主要画面のデザイン、プロトタイプ |

### 4. 実装

| | 内容 |
| --- | --- |
| 目的 | 設計どおりに機能を作り込む |
| 作業 | 環境構築 → 機能ごとに「計画 → 実装 → 動作確認 → コミット」をくり返す |
| AIの使い方 | AIコーディングエージェントに **1機能ずつ** 依頼。まず計画を出させて確認してから実装させる。大きな改修はエージェント、細かい修正はエディタ補完と使い分ける |
| 成果物 | ソースコード（[Git](/glossary/git/) で管理） |

### 5. テスト・レビュー

| | 内容 |
| --- | --- |
| 目的 | AIが書いたコードの不具合・セキュリティ問題をつぶす |
| 作業 | 単体テスト、画面操作の [E2Eテスト](/glossary/e2e-test/)、実機確認、コードレビュー |
| AIの使い方 | テストコードをAIに作らせる。[プルリクエスト](/glossary/pull-request/)ごとにAIレビューを自動で実行。ただし **最終判断は人が実機で行う** |
| 成果物 | テストコード、修正済みのコード |

### 6. リリース

| | 内容 |
| --- | --- |
| 目的 | ストアや配布ページで公開する |
| 作業 | ビルドの自動化（[CI/CD](/glossary/ci-cd/)）、App Store / Google Play / Microsoft Store への申請、ストアの説明文・スクリーンショット、プライバシーポリシー |
| AIの使い方 | ビルド設定やCIの設定ファイルをAIに書かせる。説明文・規約の下書きもAI。審査で却下（リジェクト）された理由の解説にも使える |
| 成果物 | 公開版アプリ、ストア掲載情報 |

### 7. 運用・改善

| | 内容 |
| --- | --- |
| 目的 | 使われ方と不具合を見て、次の改善につなげる |
| 作業 | クラッシュの監視、レビュー・問い合わせ対応、利用データの分析 |
| AIの使い方 | エラーログをAIに渡して原因調査・修正。ストアレビューをまとめて要望を分類させ、次の要件定義に戻す |
| 成果物 | 改善リスト（→ 工程1へ） |

## 工程別AIツール一覧

:::member[資料より]
実装の中心は「AIコーディングエージェント」、前の工程は「チャットAI＋デザインAI」です。
スマホのネイティブアプリをノーコードで作れるのは一部のビルダーだけなので注意してください。
:::

| 工程 | ツール | 種類 | 向いている用途・特徴（メンバー調べ） |
| --- | --- | --- | --- |
| 1 企画 / 2 設計 | [ChatGPT](/tools/chatgpt/) / [Claude](/tools/claude/) / [Gemini](/tools/gemini/) | チャットAI | 壁打ち、要件定義書・設計書の下書き、リサーチ機能で競合・技術調査 |
| 2 設計 | AGENTS.md（[ルールファイル](/glossary/rules-file/)） | しくみ | 1つのファイルを Codex・Antigravity・Claude Code・Cursor で共通利用できる |
| 3 デザイン | Google Stitch | デザインAI | 無料。文章・画像・手描きからアプリ画面を作り、Figma へ書き出し |
| 3 デザイン | Figma Make | デザインAI | Figma の中でプロンプトから試作。Figma の [MCP](/glossary/mcp/) でデザインをコーディングAIに渡せる |
| 3 プロトタイプ | Rork | アプリビルダー | iOS / Android のネイティブアプリ向け（Expo）。Swift 版の Rork Max もあり |
| 3 プロトタイプ | Bolt.new / Lovable / v0 | アプリビルダー | Webアプリ専用。ブラウザだけで素早く試作 |
| 3 プロトタイプ | Dreamflow | アプリビルダー | FlutterFlow 社のAIビルダー（Flutter系） |
| 4 実装 | [Claude Code](/tools/claude-code/) | コーディングエージェント | ターミナル発。複数ファイルの大きな改修、CLAUDE.md、MCP連携 |
| 4 実装 | [Cursor](/tools/cursor/) | AIエディタ | VS Code ベース。日々の編集、補完、複数モデルの切り替え |
| 4 実装 | [GitHub Copilot](/tools/github-copilot/) | エディタ拡張＋エージェント | 今使っているエディタで使える。Issue をエージェントに割り当て可能 |
| 4 実装 | [OpenAI Codex](/tools/openai-codex/) | コーディングエージェント | CLI・IDE・アプリ・Webで利用。ChatGPT のプランに含まれる |
| 4 実装 | [Google Antigravity](/tools/google-antigravity/) | コーディングエージェント | IDE・デスクトップ・CLI。無料枠あり。2026年6月に Gemini CLI の後継に |
| 5 テスト | Playwright MCP | E2Eテスト | Web・PC向けの画面操作テストをAIから実行 |
| 5 テスト | Maestro | E2Eテスト | スマホアプリの画面操作テスト |
| 5 レビュー | CodeRabbit | AIコードレビュー | GitHub / GitLab などのプルリクエストを自動レビュー。導入数が最多 |
| 5 レビュー | Claude Code Review / Copilot code review | AIコードレビュー | 使っているコーディングAIに付属 |
| 5 レビュー | SonarQube | 品質・セキュリティ検査 | MCP サーバー経由で開発中にもチェック |
| 6 リリース | GitHub Actions / Expo EAS / fastlane | ビルド・配信の自動化 | 設定ファイルはコーディングAIに書かせる |
| 7 運用 | Sentry / Firebase Crashlytics | エラー監視 | ログをコーディングAIに渡して修正 |

:::member[資料より]
料金・提供形態は変化が早いため、導入前に各公式サイトで確認してください（例：Copilot は2026年6月から従量制クレジットへ移行）。リリース・運用の行のツールは一般的な定番で、今回の調査対象外です。
:::

## 進め方のコツと注意点

:::member[資料より]
- **先に書類、後でコード**：要件定義書と AGENTS.md があると、AIの出力が安定し、ツールを乗り換えてもそのまま使える
- **小さく依頼して、こまめにコミット**：1回の指示は1機能まで。Git で戻せる状態を保つ
- **計画を確認してから実装させる**：いきなり書かせず、方針を出させて人が承認する
- **ツールは2つ併用が定番**：たとえば日々の編集は Cursor や Copilot、大きな作業は Claude Code や Codex
- **スマホは「Webアプリ」と「ネイティブ」を区別**：Bolt や Lovable で作ったWebアプリは、そのままストアに出せない。ストア公開が目標なら、最初からモバイル向けの構成を選ぶ
- **AIのコードを鍵に守る**：[APIキー](/glossary/api-key/)をコードに直書きしない。レビューツールと実機確認を必ず通す
- **ストア公開には人の手続きが必要**：開発者登録（Apple・Google）や審査対応はAIに代行できないので、日程に余裕を持つ
:::

### 補足（サイト更新時に追記）

:::tried[このサイトも、この流れで作りました]
このサイト自体が、この資料の流れとほぼ同じ方法で作られています。

| 工程 | このサイトでやったこと |
| --- | --- |
| 1 企画 | 「AI初心者がDiscordで学んだ記録を残すサイト」という指示書（要件）を用意 |
| 2 設計 | Astro で作ると決め、更新ルールを `CLAUDE.md`（[ルールファイル](/glossary/rules-file/)）にまとめた |
| 4 実装 | [Claude Code](/tools/claude-code/) に作ってもらい、[Git](/glossary/git/) でこまめにコミット |
| 5 テスト | ビルドとリンク切れチェックを自動で実行、スマホ幅の画面も確認 |
| 6 リリース | [GitHub Actions](/glossary/ci-cd/) で GitHub Pages に自動公開 |
| 7 改善 | 学習資料を渡すたびに、[プルリクエスト](/glossary/pull-request/)で更新 |

実際にやってみて、「先に書類（CLAUDE.md）があると、毎回同じルールで更新してもらえる」ことの大事さを感じました。
:::

:::warning[AIが「存在しない部品」を提案することがある]
AIが、実在しないライブラリ（パッケージ）の名前を提案してしまうことがあります（[ハルシネーション](/glossary/hallucination/)の一種）。悪い人がその名前で **ウイルス入りのパッケージを先に登録しておく** 攻撃（「スロップスクワッティング」と呼ばれる）も報告されています。
AIが「これをインストールして」と言ったら、**本当に有名で正しいものか確認してから** 入れましょう。
:::

:::point[ストアの開発者登録にはお金がかかる]
- **Apple（App Store）**：Apple Developer Program は **年99ドル**（毎年かかる）
- **Google（Google Play）**：デベロッパー登録は **25ドル（1回だけ）**

（2026年10月時点でWeb記事を確認。円での金額は為替で変わります。公式サイトで確認してください）
:::

:::point[Webアプリとネイティブアプリの「あいだ」もある]
Webアプリをスマホのホーム画面に追加してアプリのように使える **PWA（プログレッシブWebアプリ）** という方法もあります。ストアに出さなくてよいなら、最初の一歩として手軽です。
:::

:::point[APIキーを守るために]
- APIキーは `.env` などの別ファイルに書き、そのファイルは Git に入れない（`.gitignore` に書く）
- うっかり公開してしまったら、**すぐにキーを無効にして作り直す**
:::

## まだ分からないこと

:::question
- ノーコードのアプリビルダーと、コーディングエージェントは、初心者にはどちらから始めるのがよいのか？
- AIが書いたコードの著作権やライセンスは、どう考えればいいのか？
- 実際に小さなアプリを1つ作ると、どれくらいの時間とお金がかかるのか？（AI実験室で試したい）
:::
