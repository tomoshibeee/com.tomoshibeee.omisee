import { supabase } from "@/lib/supabase";

import { SiteData } from "@/types/site";
import { SectionData } from "@/features/section/types"
import { SocialLink } from "@/types/socialLink";
import { MenuItem } from "@/types/menu";
import { NewsBlockType } from "@/features/block/news/types"

import { Site } from "@/models/site";
import { SiteMeta } from "@/models/siteMeta";
import { SiteNews } from "@/models/siteNews";
import { SiteSocialLink } from "@/models/siteSocialLink";

import { getSiteSections } from "@/services/siteSectionService";
import { getSiteBlocks } from "@/services/siteBlockService";

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
    .select("site_id")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching site ID for slug "${slug}":`, error);
    throw error;
  }

  return data?.site_id || "";
}

export async function getSiteId(no: number) {
  const { data, error } = await supabase
    .from("t_site_metas")
    .select("site_id")
    .eq("site_no", no)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching site for no "${no}":`, error);
    throw error;
  }

  return data?.site_id || "";
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
    .eq("site_id", siteId)
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
  const [site, meta, news, socialLinks, sections] = await Promise.all([
    getaSite(siteId),
    getSiteMeta(siteId),
    getSiteNews(siteId),
    getSiteSocialLinks(siteId),
    getSiteSections(siteId)
  ]);
  const sectionData = await Promise.all(
    sections.map(async (s) => {
      const blocks = await getSiteBlocks(s.id);
      return {
        id: s.id,
        type: s.type,
        blocks: blocks
      } as SectionData;
    })
  );
  const newsData = news.map((n) => {
    return {
      id: n.id,
      type: "news",
      data: {
        title: n.title,
        content: n.content ?? "",
        eventDate: n.event_date,
        publishedAt: n.published_at,
        doc: n.doc,
        youtube: n.youtube
      }
    } as NewsBlockType;
  });
  return {
    meta: {
      site_id: site.id,
      site_no: site.site_no,
      slug: meta.slug,
      name: meta.name,
      tel: meta.tel,
      email: meta.email,
      postalCode: meta.postal_code,
      address: meta.address,
      bldg: meta.building,
      access: meta.access,
      description: site?.description,
    },
    navigation: {
      menu: site?.navigation ?? []
    } as { menu?: MenuItem[] },
    layout: {
      sections: sectionData as SectionData[],
    },
    socialLinks: socialLinks.map((l): SocialLink => ({
      type: l.type,
      url: l.url,
      orderBy: l.display_order,
    })),
    news: newsData,
  } as SiteData;
}


