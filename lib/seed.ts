import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
// import { seedData } from "../data/seed-data";
import { seedDataNews } from "../data/seed-data-news";
import { seedDataSites } from "../data/seed-data-site";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function runSeed() {
  console.log("🌱 Seeding started...");
  //   // =========================
  //   // 1. News作成
  //   // =========================
  //   const { data: news, error: newsError } = await supabase
  //     .from("t_news")
  //     .insert(seedDataNews)
  //     .select()
  // ;

  //   if (newsError || !news) {
  //     console.error("❌ news insert error:", newsError);
  //     return;
  //   }

  //   const newsIds = news.map(n => n.id);
  //   console.log("✅ news created:", newsIds);

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

  // // =========================
  // // 3. NAVIGATION
  // // =========================
  // const { error: navError } = await supabase.from("site_navigation").insert(
  //   seedData.navigation.map((n) => ({
  //     site_id: siteId,
  //     label: n.label,
  //     href: n.href,
  //   })),
  // );

  // if (navError) {
  //   console.error("❌ navigation insert error:", navError);
  //   return;
  // }

  // console.log("✅ navigation inserted");

  // // =========================
  // // 4. LAYOUT
  // // =========================
  // const { error: layoutError } = await supabase.from("site_layout").insert({
  //   site_id: siteId,
  //   template: seedData.layout.template,
  //   data: seedData.layout,
  // });

  // if (layoutError) {
  //   console.error("❌ layout insert error:", layoutError);
  //   return;
  // }

  // console.log("✅ layout inserted");

  console.log("🚀 Seed completed!");
}

runSeed();
