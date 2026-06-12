# 🛠 omisee Setup Guide

このガイドでは、omiseeプロジェクトのセットアップ手順を説明します。

---

## 🧭 概要：どちらの環境を使いますか？

開発環境には2つの選択肢があります。**迷ったら「オプションA」を選んでください。**

| 選択肢 | 特徴 | 推奨用途 |
| :--- | :--- | :--- |
| **Option A: Supabase Cloud** | Google認証が利用可能 | 基本はこちら（推奨） |
| **Option B: Local (Docker)** | ローカルで完結（Google認証不可） | オフライン開発など |

---

# ✅ Option A: Supabase Cloud (推奨)

## 1. Supabaseプロジェクトの作成
1. [Supabase Dashboard](https://supabase.com/dashboard) にアクセスし、新規プロジェクトを作成します。
2. **Project Settings → API** を開き、以下の情報をコピーして控えておきます。
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2. 環境変数の設定
omiseeでは、**アプリ用**と**データ投入スクリプト用**で2つの環境変数ファイルを使い分けます。プロジェクトのルート直下に**両方**作成してください。

### ① `.env.local` (フロントエンドアプリ用)
Next.jsの画面側からSupabaseと通信するために必要です。
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_ENV=dev
```

### ② `.env` (データ投入スクリプト用)
`npm run seed` などのNode.jsスクリプトを実行する時に必要です。
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
```

> **⚠️ 注意**
> * `.env.local` に書いた内容は、Node.jsスクリプトからは読み込めません。
> * `.env` に書いた内容は、セキュリティのためブラウザ側には公開されません。
> * そのため、両方のファイルにそれぞれの形式で同じURLとKEYを設定する必要があります。

## 3. 依存関係のインストール
```bash
npm install
```

## 4. データベースマイグレーション
Supabase CLIを使用してデータベーススキーマを同期します。

```bash
npm install -g supabase
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

## 5. アプリの起動
```bash
npm run dev
```
起動後、 `http://localhost:3000` にアクセスして確認してください。

## 6. (任意) Googleログインの設定

### Step 1: Google Cloud での OAuth 設定
* Google Cloud Console で OAuth クライアント（Web アプリケーション）を作成します。
* 以下のリダイレクト URI を承認済みリダイレクト URI に追加します：
  ```
  https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
  ```

### Step 2: Supabase でのプロバイダー有効化
* Supabaseダッシュボードの **Authentication → Providers → Google** を開きます。
* プロバイダーを「有効（Enable）」にし、Google Cloud で取得した「クライアントID」と「クライアントシークレット」を貼り付けます。

## 7. (任意) シードデータの投入
初期データをデータベースに投入する場合は、以下のコマンドを実行します。
```bash
npm run seed
```

---

# 🐳 Option B: Supabase Local (Docker)

> **⚠️ 注意:** ローカル環境ではGoogle認証（OAuth）は動作しません。メールログインを使用するか、認証機能を無効にして開発してください。

## 1. 必要要件
* Docker がインストールされ、起動していること
* Supabase CLI がインストールされていること

## 2. Supabaseの起動
```bash
supabase start
```

## 3. 環境変数の設定
ローカル環境用の `.env.local` を作成または書き換えます。
```env
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_local_anon_key
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
NEXT_PUBLIC_ENV=dev
```

## 4. データベースのリセットとシード
```bash
supabase db reset
npm run seed
```

---

# 🧯 トラブルシューティング

### ❌ Invalid Refresh Token
👉 **対処法:** ブラウザの `localStorage` をクリアするか、一度ログアウトして再ログインしてください。

### ❌ Unsupported provider
👉 **対処法:** Supabaseダッシュボードの **Authentication → Providers** で、対象のプロバイダー（Googleなど）が正しく有効化されているか確認してください。

### ❌ Redirect mismatch
👉 **対処法:** Google Cloud Console に登録したリダイレクトURIが、SupabaseのコールバックURLと完全に一致しているか再確認してください。

---

# ✅ 完了！
これで環境構築はすべて完了です。ローカルサーバーとSupabaseが連携され、開発を始めることができます。