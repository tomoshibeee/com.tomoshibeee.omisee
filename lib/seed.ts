import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

import { dummyNewsModelData } from "../data/seed-data-news";
import { dummySiteModelData } from "../data/seed-data-sites";
import { dummySiteMetaModelData } from "../data/seed-data-site-metas";
import { dummySiteNewsModelData } from "../data/seed-data-site-news";
import { dummySiteSocialLinkModelData } from "../data/seed-data-site-social-links";
import { dummySiteSectionModelData } from "../data/seed-data-site-sections";
import { dummySiteBlockModelData } from "../data/seed-data-site-blocks";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function runSeed() {
  const env = process.env.NODE_ENV || "dev";

  console.log("🚦URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("🚦ENV:", env);

  if (env === "production") {
    throw new Error("❌ Do NOT run seed in production");
  }

  console.log("🌱 Seeding started...");
  // =========================
  // 0. Clear existing data
  // =========================
  // todo : delete all tables only on development environment
  const tables = [
    "t_site_news",
    "t_blocks",
    "t_sections",
    "t_site_social_links",
    "t_site_metas",
    "t_sites",
    "t_global_news",
  ];
  for (const table of tables) {
    const { error } =
      await supabase.from(table).delete().not("id", "is", null);
    // await supabase.from(table).delete();
    if (error) {
      console.error(`❌ Error clearing table ${table}:`, error);
      return;
    }
    console.log(`✅ Cleared table ${table}`);
  }

  // =========================
  // 1. News作成
  // =========================
  const { data: news, error: newsError } = await supabase
    .from("t_global_news")
    .insert(dummyNewsModelData())
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
    .insert(dummySiteModelData())
    .select();
  if (sitesError || !sites) {
    console.error("❌ sites insert error:", sitesError);
    return;
  }

  const siteIds = sites.map((n) => n.id);
  console.log("✅ sites created:", siteIds);

  // =========================
  // 3. Site Metas
  // =========================
  const dummySiteMetasModelData = dummySiteMetaModelData(siteIds);
  const { data: siteMetas, error: siteMetasError } = await supabase
    .from("t_site_metas")
    .insert(dummySiteMetasModelData)
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
  const siteNewsRows = dummySiteNewsModelData(siteIds);
  const { data: siteNews, error: siteNewsError } =
    await supabase.from("t_site_news")
      .insert(siteNewsRows)
      .select();

  if (siteNewsError || !siteNews) {
    console.error("❌ siteNews insert error:", siteNewsError);
    return;
  }

  const siteNewsIds = siteNews.map((n) => n.id);
  console.log("✅ site news created:", siteNewsIds);

  // =========================
  // 5. Site Social Links
  // =========================
  const { data: siteSocialLinks, error: siteSocialLinksError } =
    await supabase.from("t_site_social_links")
      .insert(dummySiteSocialLinkModelData(siteIds))
      .select();

  if (siteSocialLinksError || !siteSocialLinks) {
    console.error("❌ siteSocialLinks insert error:", siteSocialLinksError);
    return;
  }

  const siteSocialLinksIds = siteSocialLinks.map((n) => n.id);
  console.log("✅ site social links created:", siteSocialLinksIds);

  // =========================
  // 6. Site Sections
  // =========================
  const siteSectionModelData = dummySiteSectionModelData(siteIds);
  const { data: siteSections, error: siteSectionsError } =
    await supabase.from("t_sections")
      .insert(siteSectionModelData)
      .select();

  if (siteSectionsError || !siteSections) {
    console.error("❌ siteSections insert error:", siteSectionsError);
    return;
  }

  const siteSectionsIds = siteSections.map((n) => n.id);
  console.log("✅ site sections created:", siteSectionsIds);

  // =========================
  // 7. Site Blocks
  // =========================
  const siteBlockModelData = dummySiteBlockModelData(
    siteIds,
    siteSectionModelData
  );
  const { data: siteBlocks, error: siteBlocksError } =
    await supabase.from("t_blocks")
      .insert(siteBlockModelData)
      .select();

  if (siteBlocksError || !siteBlocks) {
    console.error("❌ siteBlocks insert error:", siteBlocksError);
    return;
  }

  const siteBlocksIds = siteBlocks.map((n) => n.id);
  console.log("✅ site blocks created:", siteBlocksIds);

  console.log("🚀 Seed completed!");
}


runSeed();
