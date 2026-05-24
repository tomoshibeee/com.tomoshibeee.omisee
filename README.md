# 🌿 Tomoshibeee Church Platform

A lightweight CMS-powered platform for creating and publishing church websites.

Each church can manage its own content and publish a public-facing site.

---

## 📍 Current Stage

We are currently in **Ver1 (MVP phase)**.

The goal is to enable a single church site to be created, edited, and publicly accessible.

---

## 🧭 Roadmap

### 🟢 Ver1 — Public Site (MVP)
**Goal:** A single church site can be created and viewed publicly.

- `/p/:slug` public page
- Block-based rendering system
- Simple CMS input
- Google authentication (basic)

✔ Ver1 is complete when:
- A site can be created
- Content can be edited via CMS
- Public page is accessible via URL

---

### 🟡 Ver2 — Management System
**Goal:** Make the system usable for daily operations.

- `/dashboard` admin panel
- Site management
- Navigation (submenu / header) refinement
- Roles (admin / editor)

---

### 🔵 Ver3 — SaaS Platform
**Goal:** Scale into a multi-tenant SaaS product.

- Multi-tenant architecture (per church)
- SEO optimization
- Analytics integration
- Billing / subscription system
- UI/UX improvements (mobile + desktop)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.



Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
