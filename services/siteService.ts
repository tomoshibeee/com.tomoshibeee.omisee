import { supabase } from "@/lib/supabase";

export async function getSites() {
  const { data, error } = await supabase.from("t_sites").select("*");
  if (error) {
    console.error("Error fetching sites:", error);
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
