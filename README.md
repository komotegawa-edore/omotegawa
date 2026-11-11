# Kazuyoshi Omotegawa — Portfolio

Astro、TypeScript、Tailwind CSSを使用した静的な1ページのポートフォリオです。

## ローカルで確認

Node.js 22.12.0以上を用意し、このフォルダで次を実行します。

```sh
npm install
npm run dev
```

表示されたローカルURL（通常は http://localhost:4321/ ）をブラウザで開きます。終了するにはターミナルで `Ctrl + C` を押します。

```sh
npm run check  # Astro / TypeScriptの検証
npm run build  # 本番用ファイルをdist/に生成
npm run preview # ビルド結果をローカルで確認
```

## 内容の編集

- `src/data/site.ts`：プロフィール、プロジェクト、スキル、連絡先を編集します。`contact` の各値は空文字の場合、ページに表示されません。Emailは `mailto:hello@example.com` の形式で設定してください。
- `src/pages/index.astro`：各セクションの本文や構成を編集します。
- `src/components/`：見出しとプロジェクトの表示を編集します。
- `src/styles/global.css`：色、余白、文字組み、画面幅ごとの表示を編集します。
- `public/og-fv.webp`：SNS共有用の画像です。

## 公開するとき

1. `astro.config.mjs` の `site` を公開先URLに設定します。
2. `src/data/site.ts` に実際の連絡先を設定します。
3. `npm run check` と `npm run build` を実行し、`dist/` をCloudflare Pages、Netlifyなどの静的ホスティングに公開します。ビルドコマンドは `npm run build`、出力ディレクトリは `dist` です。
4. SNSで共有した際に画像が表示されるか確認してください。



## GitHub Pagesへの公開

`main` ブランチへの更新時にGitHub Actionsがビルドし、GitHub Pagesへ公開します。サイトURLとベースパスは `astro.config.mjs` で管理します。独自ドメインへ切り替える場合は `site` と `base` を変更してください。
