import { supabase } from "@/lib/supabase";

import { GlobalNews } from "@/models/globalNews";

export async function getGlobalNews(): Promise<GlobalNews[]> {
  const { data, error } = await supabase
    .from("t_global_news")
    .select("*")
    .order("published_at", { ascending: false })
    // .limit(5)
    ;

  if (error) {
    console.error(`Error fetching global news":`, error);
    throw error;
  }

  return data;
}

export function toGlobalNewsItems(globalNews: GlobalNews[]) {
  return globalNews.map((n) => ({
    id: n.id,
    title: n.title,
    content: n.content ?? "",
    publishedAt: n.published_at,
  }));
}