import { supabase } from "@/lib/supabase";

import { SiteData } from "@/types/site";
import { MenuItem } from "@/types/menu";
import { Section } from "@/features/section/types";


import { Site } from "@/models/site";
import { SiteMeta } from "@/models/siteMeta";
import { SiteNews } from "@/models/siteNews";
import { SiteSocialLink } from "@/models/siteSocialLink";

export async function getSites() {
  const { data, error } = await supabase.from("t_sites").select("*");
  if (error) {
    console.error("Error fetching sites:", error);
    throw error;
  }

  return data;
}

export async function getSiteMetas() {
  const { data, error } = await supabase.from("t_site_metas").select("*");
  if (error) {
    console.error("Error fetching site metas:", error);
    throw error;
  }
  return data;
}

export async function getSiteIdBySlug(slug: string) {
  const { data, error } = await supabase
    .from("t_site_metas")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching site ID for slug "${slug}":`, error);
    throw error;
  }

  return data?.id || "";
}

async function getaSite(siteId: string): Promise<Site> {
  const { data, error } = await supabase
    .from("t_sites")
    .select("*")
    .eq("id", siteId)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching site for site ID "${siteId}":`, error);
    throw error;
  }

  return data;
}

async function getSiteMeta(siteId: string): Promise<SiteMeta> {
  const { data, error } = await supabase
    .from("t_site_metas")
    .select("*")
    .eq("id", siteId)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching site meta for site ID "${siteId}":`, error);
    throw error;
  }

  return data;
}

async function getSiteNews(siteId: string): Promise<SiteNews[]> {
  const { data, error } = await supabase
    .from("t_site_news")
    .select("*")
    .eq("site_id", siteId)
    .order("published_at", { ascending: false })
    .limit(5);

  if (error) {
    console.error(`Error fetching news for site ID "${siteId}":`, error);
    throw error;
  }

  return data;
}

async function getSiteSocialLinks(siteId: string): Promise<SiteSocialLink[]> {
  const { data, error } = await supabase
    .from("t_site_social_links")
    .select("*")
    .eq("site_id", siteId);

  if (error) {
    console.error(`Error fetching social links for site ID "${siteId}":`, error);
    throw error;
  }

  return data;
}

export async function getSiteData(siteId: string): Promise<SiteData> {
  const [site, meta, news, socialLinks] = await Promise.all([
    getaSite(siteId),
    getSiteMeta(siteId),
    getSiteNews(siteId),
    getSiteSocialLinks(siteId),
  ]);

  return {
    meta: {
      slug: meta.slug,
      name: meta.name,
      tel: meta.tel,
      email: meta.email,
      postalCode: meta.postal_code,
      address: meta.address,
      bldg: meta.building,
      access: meta.access,
    },
    navigation: site?.navigation ?? {},
    layout: {
      sections: [] as Section[], // TODO : sectionsテーブルを作成してデータを取得する形に変更予定
    },
  } as SiteData;
}


