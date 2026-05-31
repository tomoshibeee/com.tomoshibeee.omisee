import { supabase } from "@/lib/supabase";

export async function getLatestNews(limit = 5) {
  const { data, error } = await supabase
    .from("t_news")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching news:", error);
    throw error;
  }

  return data;
}
