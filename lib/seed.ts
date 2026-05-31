import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { seedData } from "../data/seed-data";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function runSeed() {
  console.log("🌱 Seeding started...");
  // TODO : insert t_news
  // // =========================
  // // 1. SITE作成
  // // =========================
  // const { data: site, error: siteError } = await supabase
  //   .from("sites")
  //   .insert(seedData.site)
  //   .select()
  //   .single();

  // if (siteError || !site) {
  //   console.error("❌ site insert error:", siteError);
  //   return;
  // }

  // const siteId = site.id;
  // console.log("✅ site created:", siteId);

  // // =========================
  // // 2. SNS
  // // =========================
  // const { error: snsError } = await supabase.from("site_sns").insert(
  //   seedData.sns.map((s) => ({
  //     site_id: siteId,
  //     type: s.type,
  //     url: s.url,
  //   })),
  // );

  // if (snsError) {
  //   console.error("❌ sns insert error:", snsError);
  //   return;
  // }

  // console.log("✅ sns inserted");

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
