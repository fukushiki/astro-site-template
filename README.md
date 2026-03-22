# Astro Multilingual Blog v1

Astro + Markdown + Content Collections で、`ja/en` 2言語の最小ブログ構成を実装したサンプルです。

## ルーティング

- `/ja/`
- `/ja/profile/` ( `/ja/` へリダイレクト )
- `/ja/blog/`
- `/ja/blog/[slug]`
- `/en/`
- `/en/profile/` ( `/en/` へリダイレクト )
- `/en/blog/`
- `/en/blog/[slug]`

`/` は `/ja/` へリダイレクトします。

## セットアップ

```bash
npm install
npm run dev
```

## `fukushiki.dev` 公開向け設定

このリポジトリは `astro.config.mjs` で本番URLを `https://fukushiki.dev` に固定しています。

- `site`: `https://fukushiki.dev`
- `output`: `static`
- ビルド成果物: `dist/`

追加済みのSEO系エンドポイント:

- `/sitemap.xml`
- `/rss.xml`
- `/robots.txt`

## Cloudflare Pages デプロイ

1. Cloudflare Pages でこのリポジトリを接続
2. Build command を `npm run build` に設定
3. Build output directory を `dist` に設定
4. デプロイ後、Pages の `Custom domains` で `fukushiki.dev` を追加
5. 必要なら `www.fukushiki.dev` も追加し、`fukushiki.dev` へリダイレクト設定

DNS の基本方針:

- Apex (`fukushiki.dev`): Cloudflare Pages の案内に従って接続
- `www`: `fukushiki.dev` へ寄せる（将来の運用を単純化）

## サイト設定ファイル

`src/config/site.ts` で以下をまとめて変更できます。

- `brandName`: ヘッダー左上のサイト名
- `footerStackText`: フッター文言（例: `Astro + Markdown + Content Collections`）
- `profileImageSrc`: プロフィール画像のパス

## アイコン設定

- アイコンのパス定義: `src/config/icons.ts`
- 実ファイル配置: `public/icon/`

`About` のアイコン表示は `src/config/icons.ts` を参照します。

## タグ色設定

タグごとの色は `src/config/tags.ts` で管理しています。

- `tagConfig.colors.<tag名>` に `bg / border / text` を設定
- 設定がないタグは `tagConfig.default` の色を使用

例:
- `astro`
- `multilingual`
- `sample`

## カラーテーマ設定

`src/config/theme.ts` でテーマを切り替えられます。

- `activeTheme` を変更するだけで全体配色を切り替え
- 用意済みテーマ:
  - `paper`
  - `ocean`
  - `forest`
  - `sunset`
- 各テーマの色トークンは `themes` オブジェクトで調整可能

## About設定ファイル

`src/config/about.ts` でプロフィール文言とSNS設定を変更できます。

- `aboutConfig.ja` / `aboutConfig.en`: 言語ごとの表示内容
- `socials.<service>.enabled`: `true/false` で表示ON/OFF
- `socials.<service>.url`: リンク先URL

対応サービス:
- `github`
- `x`
- `zenn`
- `qiita`
- `devto`

## 実装方針

1. ルーティング: `src/pages/[lang]/...` で言語別ページを静的生成
2. Markdown記事表示: `src/content/blog/<slug>/ja.md` と `en.md` を `getCollection('blog')` で取得
3. 共通レイアウト: `src/layouts/BaseLayout.astro` を全ページで利用
4. Content Collections: `src/content/config.ts` でスキーマ定義

## ブログ記事の作り方（推奨）

記事ごとにフォルダを作り、その中に `ja.md` と `en.md` を置きます。

```text
src/content/blog/
  welcome/
    ja.md
    en.md
  another-post/
    ja.md
    en.md
```

- ルーティングはフォルダ名が使われます（例: `welcome` → `/ja/blog/welcome/`）
- `ja.md` と `en.md` が揃っていれば、記事詳細で言語切替が有効
- どちらか一方しかなくても投稿可能（その記事では言語切替は非表示）
- 「日本語だけ投稿」「英語だけ投稿」も可能
- 切替可能なページはヘッダー右上に言語切替（`EN` / `日本語`）を表示

## 外部投稿リンク（Qiita / Zenn / Note / dev.to）

`src/content/external/*.md` に frontmatter を追加すると、ブログ一覧に外部投稿を混在表示できます。

```yaml
title: "..."
description: "..."
pubDate: "2026-03-22"
lang: "ja" # or "en"
source: "qiita" # qiita | zenn | note | devto
url: "https://..."
tags: ["astro", "qiita"]
```

- 一覧に `Qiita / Zenn / Note / dev.to` バッジを表示
- 外部記事は新規タブで遷移
- 内部記事は `Blog` バッジ + `対訳あり/なし` バッジ + タグを表示
- 記事詳細にもタグを表示

## プロフィールページ

- `/<lang>/` はプロフィールページ（About）として動作
- 右上の言語切替で `ja/en` を移動可能
- `/<lang>/profile/` でも同ページにアクセス可能（リダイレクト）

## 主要ファイル

- `src/content/config.ts`
- `src/layouts/BaseLayout.astro`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/blog/index.astro`
- `src/pages/[lang]/blog/[slug].astro`
- `src/content/blog/welcome/ja.md`
- `src/content/blog/welcome/en.md`
