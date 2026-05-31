import "dotenv/config";
import { randomUUID } from "crypto";

import { createClient } from "@supabase/supabase-js";

import { seedDataNews } from "../data/seed-data-news";
import { seedDataSites } from "../data/seed-data-site";
import { seedDataSiteNews } from "../data/seed-data-site-news";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

function getRandomDate(): string {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());

  return new Date(randomTime).toISOString();
}

async function runSeed() {
  console.log("🌱 Seeding started...");
  // =========================
  // 1. News作成
  // =========================
  const { data: news, error: newsError } = await supabase
    .from("t_news")
    .insert(seedDataNews)
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
    .insert(seedDataSites)
    .select();
  if (sitesError || !sites) {
    console.error("❌ sites insert error:", sitesError);
    return;
  }

  const sitesIds = sites.map((n) => n.id);
  console.log("✅ sites created:", sitesIds);

  // =========================
  // 3. Site News
  // =========================
  const newsRows = sitesIds.flatMap(siteId =>
    Array.from({ length: 3 }).map(() => ({
      id: randomUUID(),
      site_id: siteId,
      title: `news-site-${siteId}-${Math.random().toString(36).slice(2, 5)}`,
      content:
        "これはサイトニュースのサンプルコンテンツです。サイトIDに紐づくニュースの内容をここに記載します。",
      doc: null,
      youtube: null,
      published_at: getRandomDate(),
      event_date: getRandomDate(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }))
  );
  const { data: siteNews, error: siteNewsError } =
    await supabase.from("t_site_news")
      .insert(newsRows)
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
