あなたはこのリポジトリの実装担当です。
個人サイトを Astro ベースで新規構築してください。

## 目的
- 個人ブランドサイト兼技術ブログを作る
- 参考にしたい方向性は、シンプルで静かな1カラム中心の個人サイト
- ただしデザインや文言のコピーは禁止
- 参考にするのは「情報設計」と「導線」
- 日本語 / 英語の2言語対応にする
- 記事本文や固定ページ本文は Markdown で管理する
- 本番デプロイ先は Cloudflare Pages
- 独自ドメインは `fukushiki.dev`

## 技術方針
- Astro を採用
- コンテンツ管理は Markdown + frontmatter
- Astro Content Collections を使う
- スタイリングはミニマルでよい
- クライアントサイド JavaScript は最小限
- まずは静的サイトとして成立させる
- 将来的な拡張を妨げない構成にする

## サイト構成
以下のルートを作成してください。

- `/ja/`
- `/ja/blog/`
- `/ja/blog/[slug]`
- `/en/`
- `/en/blog/`
- `/en/blog/[slug]`

## ページ要件
### 1. 日本語トップ `/ja/`
含める要素:
- 名前
- 一言肩書き
- 2〜3行の自己紹介
- 外部リンク一覧
  - GitHub
  - X
  - LinkedIn
  - Zenn
- Contact セクション
- Activities / Certifications / Talks / Writing / Projects を置ける構成
- Blog への導線

### 2. 英語トップ `/en/`
- 日本語トップと同等構成
- 英語文面で用意
- 海外向けプロフィールとして読めること

### 3. ブログ一覧 `/ja/blog/` `/en/blog/`
- 新着順一覧
- 各記事に date / title / description を表示
- シンプルな一覧
- ページネーションは後回しでもよいが、拡張しやすい設計にする

### 4. 記事詳細 `/ja/blog/[slug]` `/en/blog/[slug]`
- title
- date
- description
- 本文レンダリング
- 必要なら tags
- 前後記事リンクは optional

## コンテンツ配置
以下のような content 構成にしてください。

src/content/
  ja/
    pages/
      about.md
    blog/
      first-post.md
  en/
    pages/
      about.md
    blog/
      first-post.md

必要に応じて Astro の推奨構成に合わせて整理してよいですが、
「日本語と英語の固定ページ・ブログを Markdown で管理する」方針は維持してください。

## frontmatter
ブログ記事の frontmatter は最低限以下を持てるようにしてください。

- title
- date
- description
- lang
- tags
- draft

## コンポーネント要件
最低限以下を分離してください。

- Header
- Footer
- LanguageSwitcher
- BlogList
- BlogPostLayout
- ProfileSection

## デザイン方針
- 余白を広め
- 1カラム中心
- 落ち着いた配色
- 装飾は少なめ
- 可読性重視
- 「派手なポートフォリオ」ではなく「静かな信頼感」

## SEO / 補助要件
以下は可能な範囲で初期実装してください。
- title / description の meta
- OGP の基本設定
- sitemap
- RSS
- canonical の基本対応

## デプロイ方針
- Cloudflare Pages にデプロイしやすい構成にする
- build コマンドと output ディレクトリが明確であること
- `fukushiki.dev` を本番ドメインとして想定する
- `www.fukushiki.dev` は将来的に apex へ寄せやすい構成にする

## やってほしいこと
1. Astro プロジェクトを初期化
2. 必要なディレクトリを作成
3. Content Collections を設定
4. 日本語 / 英語トップページを作成
5. 日本語 / 英語ブログ一覧・記事詳細を作成
6. サンプル Markdown を入れる
7. 共通レイアウトを整える
8. README にローカル起動方法とデプロイ方法を書く

## 完了条件
- `npm install` 後にローカル起動できる
- 2言語のトップとブログ導線が動く
- Markdown の記事が一覧と詳細で表示される
- ディレクトリ構成が理解しやすい
- README を読めば Cloudflare Pages に載せられる

## 実装の進め方
- まず最小構成で動くものを作る
- その後に整える
- 1回で完璧を目指さず、小さく成立させる
- 迷ったらシンプルな実装を選ぶ

## 出力ルール
- 変更したファイルを明示する
- 重要な設計判断は短く理由を書く
- README にはセットアップ手順を書く
- 不要に複雑な依存を増やさない