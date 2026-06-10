# 🌍 Deployment Guide

This guide explains how to deploy omisee.

---

## 🚀 Recommended: Deploy with Vercel

---

## 1. Push to GitHub

```bash
git add .
git commit -m "initial commit"
git push origin main
```

---

## 2. Import project in Vercel

* Go to Vercel
* Click "Add New Project"
* Select your GitHub repository

---

## 3. Set environment variables

In Vercel dashboard, add:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## 4. Deploy

Click "Deploy"

---

## 5. Done 🎉

Your app will be live at:

```
https://your-project.vercel.app
```

---

## 🔐 Notes

* Make sure Supabase project is using production settings
* Add your domain to Supabase redirect URLs if using OAuth

---

## 🧯 Troubleshooting

### ❌ Login not working

→ Check redirect URL in Supabase

### ❌ Environment variables missing

→ Verify values in Vercel dashboard

---

## ✨ Custom Domain (Optional)

* Add domain in Vercel
* Update Supabase redirect URL
