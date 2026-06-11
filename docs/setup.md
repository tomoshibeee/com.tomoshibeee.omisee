# 🛠 Setup Guide

This guide explains how to fully set up omisee.

---

## 🧭 Overview

You can run omisee in two ways:

* **Option A (Recommended): Supabase Cloud**
* Option B: Supabase Local (Docker)　❌ Google Auth

If you're unsure, use **Option A**.

---

# ✅ Option A: Supabase Cloud (Recommended)

## 1. Create a Supabase project

* Go to Supabase dashboard
* Create a new project
* Open **Project Settings → API**

Copy:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## 2. Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_ENV=dev
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Migration

To manage database schema, we use Supabase CLI.

```bash
npm install -g supabase
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

---

## 5. Run the app

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 6. (Optional) Enable Google Login

### Step 1: Create OAuth in Google Cloud

* Create OAuth Client (Web)
* Add redirect URI:

```
https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
```

---

### Step 2: Configure Supabase

* Authentication → Providers → Google
* Enable
* Paste Client ID / Secret

---

## 7. (Optional) Seed data

```bash
npm run seed
```

---

# 🐳 Option B: Supabase Local (Docker)

## Requirements

* Docker installed
* Supabase CLI installed

---

## 1. Start Supabase locally

```bash
supabase start
```

---

## 2. Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_local_anon_key
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
NEXT_PUBLIC_ENV=dev
```

---

## 3. Reset database

```bash
supabase db reset
```

---

## 4. Seed data

```bash
npm run seed
```

---

## ⚠️ Notes

* Local Supabase does not support OAuth (Google login)
* Use email login or disable auth features during local dev

---

# 🧯 Troubleshooting

## ❌ Invalid Refresh Token

→ Clear localStorage or re-login

---

## ❌ Unsupported provider

→ Enable provider in Supabase

---

## ❌ Redirect mismatch

→ Check callback URL in Google Cloud

---

# ✅ Done

You should now be able to:

* Run the app locally
* Connect to Supabase
* Start building your site
