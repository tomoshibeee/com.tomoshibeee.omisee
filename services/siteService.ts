import { supabase } from "@/lib/supabase";

import { SiteData } from "@/types/site";
import { SectionData } from "@/features/section/types"
import { MenuItem } from "@/types/menu";

import { Site } from "@/models/site";
import { SiteSocialLink } from "@/models/siteSocialLink";

import { getSiteMeta, toMetaData } from "@/services/siteMetaService";
import { getSiteSections } from "@/services/siteSectionService";
import { getSiteBlocks } from "@/services/siteBlockService";
import { getSiteNews } from "@/services/siteNewsService";
import { getGlobalNews } from "@/services/globalNewsService";

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


async function getSite(siteId: string): Promise<Site> {
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
  const [site, meta, globalNews, siteNews, socialLinks, sections] = await Promise.all([
    getSite(siteId),
    getSiteMeta(siteId),
    getGlobalNews(),
    getSiteNews(siteId),
    getSiteSocialLinks(siteId),
    getSiteSections(siteId)
  ]);
  const siteNewsItems = siteNews.map(n => {
    return {
      news_id: n.id,
      title: n.title,
      content: n.content ?? "",
      eventDate: n.event_date,
      publishedAt: n.published_at,
      doc: n.doc,
      youtube: n.youtube
    }
  });

  const sectionData = await Promise.all(
    sections.map(async (s) => {
      const blocks = await getSiteBlocks(s.id);

      const blocksWithSiteNews =
        s.type === "site_news"
          ? [
            {
              id: s.id,
              type: "site_news",
              variant: "",
              data: {
                items: siteNewsItems
              }
            }
          ]
          : blocks;

      return {
        id: s.id,
        type: s.type,
        blocks: blocksWithSiteNews
      };
    })
  );
  const ret = {
    meta: toMetaData(site, meta),
    navigation: {
      menu: site?.navigation ?? []
    } as { menu?: MenuItem[] },
    layout: {
      sections: sectionData as SectionData[],
    },
    socialLinks: socialLinks.map((l): SiteSocialLink => ({
      id: l.id,
      site_id: l.site_id,
      type: l.type,
      url: l.url,
      display_order: l.display_order,
      created_at: l.created_at,
      updated_at: l.updated_at,
    })),
  };

  return ret as SiteData;
}


