# Settings Guide

このファイルは「どこを編集すると何が変わるか」をまとめた設定ガイドです。

## 1. サイト全体の基本設定

編集ファイル: `src/config/site.ts`

- `brandName`: ヘッダー左上のサイト名
- `footerStackText`: フッターの文言
- `profileImageSrc`: プロフィール画像のパス（`public` 配下のURL）

## 2. Aboutページ（プロフィール）設定

編集ファイル: `src/config/about.ts`

言語ごとに `ja` / `en` を編集します。

- `name`: 名前
- `role`: 肩書き
- `bio`: 自己紹介文（配列）
- `contactTitle`: Contact 見出し
- `contactEmail`: メールアドレス
- `contactX`: X 表示名（例: `@sample_user`）
- `contactXUrl`: X のリンク先URL

### SNSのON/OFFとリンク変更

`socials` で制御します。

```ts
socials: {
  github: { enabled: true, url: 'https://github.com/...' },
  x: { enabled: true, url: 'https://x.com/...' },
  zenn: { enabled: true, url: 'https://zenn.dev/...' },
  qiita: { enabled: false, url: 'https://qiita.com/...' },
  devto: { enabled: false, url: 'https://dev.to/...' }
}
```

- `enabled: true` で表示
- `enabled: false` で非表示

## 3. アイコンパス設定

編集ファイル: `src/config/icons.ts`

- `profileImageSrc`: プロフィール画像
- `zennLogoSrc`: Zennロゴ画像

実ファイルは `public/icon/` に配置します。

## 4. カラーテーマ設定

編集ファイル: `src/config/theme.ts`

- `activeTheme` を変更してテーマ切替
  - `paper`
  - `ocean`
  - `forest`
  - `sunset`

```ts
export const activeTheme: ThemeKey = 'ocean';
```

`themes` オブジェクトを編集すると、各テーマの色を細かく調整できます。

## 5. タグ色設定

編集ファイル: `src/config/tags.ts`

- `tagConfig.colors.<tag名>` でタグごとの色を指定
- `tagConfig.default` は未定義タグの色

```ts
colors: {
  astro: { bg: '#e8f3ff', border: '#9cc8f3', text: '#1f4f80' }
}
```

## 6. ブログ記事の追加方法

編集ディレクトリ: `src/content/blog/`

記事ごとにフォルダを作って、その中に `ja.md` と `en.md` を作成します。

```text
src/content/blog/
  welcome/
    ja.md
    en.md
  next/
    ja.md
```

URLはフォルダ名から生成されます。

- `welcome/ja.md` -> `/ja/blog/welcome/`
- `welcome/en.md` -> `/en/blog/welcome/`

## 7. 外部投稿（Qiita/Zenn/Note/dev.to）追加

編集ディレクトリ: `src/content/external/`

frontmatter に `source` と `url` を指定します。

```yaml
title: "[Sample] ..."
description: "..."
pubDate: "2026-03-22"
lang: "ja"
source: "qiita" # qiita | zenn | note | devto
url: "https://..."
tags: ["astro", "qiita"]
```

## 8. 反映確認

```bash
npm run dev
```

またはビルド確認:

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

