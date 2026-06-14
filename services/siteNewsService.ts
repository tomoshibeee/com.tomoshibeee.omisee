import { supabase } from "@/lib/supabase";

import { SiteNews } from "@/models/siteNews";

export async function getSiteNews(siteId: string): Promise<SiteNews[]> {
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

export async function toSiteNewsItems(siteNews: SiteNews[]) {
    return siteNews.map((n) => ({
        id: n.id,
        title: n.title,
        content: n.content ?? "",
        publishedAt: n.published_at,
    }));

}