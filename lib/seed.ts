import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

import { dummyNewsData } from "../data/seed-data-news";
import { dummySiteData } from "../data/seed-data-sites";
import { dummySiteMetasData } from "../data/seed-data-site-metas";
import { dummySiteNewsData } from "../data/seed-data-site-news";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function runSeed() {
  console.log("🌱 Seeding started...");
  // =========================
  // 1. News作成
  // =========================
  const { data: news, error: newsError } = await supabase
    .from("t_news")
    .insert(dummyNewsData())
    .select()
    ;

  if (newsError || !news) {
    console.error("❌ news insert error:", newsError);
    return;
  }

  const newsIds = news.map(n => n.id);
  console.log("✅ news created:", newsIds);

  // =========================
  // 2. Sites
  // =========================
  const { data: sites, error: sitesError } = await supabase
    .from("t_sites")
    .insert(dummySiteData())
    .select();
  if (sitesError || !sites) {
    console.error("❌ sites insert error:", sitesError);
    return;
  }

  const sitesIds = sites.map((n) => n.id);
  console.log("✅ sites created:", sitesIds);

  // =========================
  // 3. Site Metas
  // =========================
  const { data: siteMetas, error: siteMetasError } = await supabase
    .from("t_site_metas")
    .insert(dummySiteMetasData(sitesIds))
    .select();
  if (siteMetasError || !siteMetas) {
    console.error("❌ siteMetas insert error:", siteMetasError);
    return;
  }

  const siteMetasIds = sites.map((n) => n.id);
  console.log("✅ site metas created:", siteMetasIds);

  // =========================
  // 4. Site News
  // =========================
  const siteNewsRows = dummySiteNewsData(sitesIds);
  const { data: siteNews, error: siteNewsError } =
    await supabase.from("t_site_news")
      .insert(siteNewsRows)
      .select();

  if (siteNewsError || !siteNews) {
    console.error("❌ siteNews insert error:", siteNewsError);
    return;
  }

  const siteNewsIds = siteNews.map((n) => n.id);
  console.log("✅ siteNews created:", siteNewsIds);

  console.log("🚀 Seed completed!");
}

runSeed();
