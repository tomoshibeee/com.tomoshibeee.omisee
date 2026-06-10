# 🌿 omisee

omisee is a lightweight one-page platform for small shops and communities.

It enables individuals, small businesses, and churches to create a simple yet trustworthy online presence — without the complexity of traditional website builders.

## 🧭 Concept

**"One page. One place."**

omisee helps you create your own **omise(maison)** — a small, personal place on the internet.

A maison is:

* simple, but intentional
* small, but meaningful
* personal, but open to others

---

## 🎯 Target

* Small shops (cafes, nail salons, local services)
* Solo creators / freelancers
* Churches (treated as one “site”)

---

## 🚀 Quick Start

This diagram shows how to run omisee locally with Supabase and Google Auth.

![omisee architecture](docs/architecture.png)

Follow these steps to run omisee locally.

---

### 1. Create a Supabase project

* Create a new project in Supabase
* Go to **Project Settings → API**
* Copy:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

### 2. Create `.env`

Create a file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_ENV=dev
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Run the app

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

### 5. (Optional) Enable Google Login

1. Create OAuth credentials in Google Cloud
2. Add this redirect URL:

```
https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback
```

3. In Supabase:

* Authentication → Providers → Google
* Enable and paste Client ID / Secret

---

### 6. (Optional) Seed data

```bash
npm run seed
```

---

## ✅ Done

You should now be able to:

* Open the app locally
* Connect to Supabase
* Start building your page


---

## 🚀 Setup
See [docs/setup.md](docs/setup.md)

## 🌍 Deployment
See [docs/deploy.md](docs/deploy.md)

## 🧱 Core Structure (MVP)

A single scrollable page:

1. **Hero (Showcase)**

   * Name
   * Image
   * Short message

2. **Primary CTA (only one)**

   * Reservation / Visit / Contact

3. **Links**

   * Instagram
   * Google Maps
   * External pages

4. **Mini Services / Menu (max 3)**

5. **News (optional, latest 1–3 items)**

---

## ✨ Philosophy

* Simplicity over flexibility
* One-page over multi-page
* Action-oriented design (clear CTA)
* Mobile-first

---

## 💰 Business Model

* Free plan (basic page)
* Paid plans (¥1,000–¥3,000/month)
* Optional transaction fee (events, donations)

---

## 🚫 Non-Goals

* Full CMS
* Multi-page websites
* Heavy customization

---

## 🔮 Future

* Analytics (CTR, user behavior)
* Donation / event features
* Church-specific extensions

---

## 📍 Current Stage

We are currently in **Ver1 (MVP phase)**.

The goal is to enable a single page to be created, edited, and publicly accessible.

---


---

## 🧩 Tech Stack

This project is built with **Next.js** (`create-next-app`).

---

## 🚀 Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📚 Learn More

* [https://nextjs.org/docs](https://nextjs.org/docs)
* [https://nextjs.org/learn](https://nextjs.org/learn)

---

## 🚀 Deployment

Deploy easily using Vercel:

[https://vercel.com/new](https://vercel.com/new)

---

## 🧱 Supabase

### Local development (Docker)

- start Docker 

```bash
$ supabase start
$ npm run build
```

---

### Environment variables

```.env
NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUPABASE_ANON_KEY from supabase start>
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
```

```.env
NEXT_PUBLIC_ENV=dev
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxx_yyy
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
```

---

## 🗄 Database Design

omisee uses Supabase (PostgreSQL) as its backend.

### t_site (sites / maisons)

```sql
create table public.t_sites (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    name text not null,
    description text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
```

---

### t_site_news (site news)

```sql
create table public.t_site_news (
    id uuid primary key default gen_random_uuid(),
    site_id uuid not null references public.t_sites(id) on delete cascade,
    title text not null,
    content text,
    event_date date not null,
    published_at timestamptz not null default now(),
    doc text,
    youtube text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
```

---

## 🔗 Relationship

```
t_site (1) ─── (N) t_site_news
```

---

## 🔌 Supabase Client

```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### [only dev(localhost)]

```
supabase db reset
```

```
npm run seed
```

---

## 📦 Seed / Reset

```bash
tsx lib/seed.ts
```

```bash
$ cd 
$ supabase db reset
```

---

## 🔑 Summary

omisee is not just a link-in-bio tool.

It is a **small but real place on the internet** — your own **maison**.
