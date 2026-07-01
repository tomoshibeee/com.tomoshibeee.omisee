import { getSiteIdBySlug } from "@/services/siteService";
import { getSiteData } from "@/services/siteService";
import { getGlobalNews, toGlobalNewsItems } from "@/services/globalNewsService";

import Template from "@/components/templates/Template";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const siteId = await getSiteIdBySlug(slug);
  if (!siteId) return <div>Site Not Found</div>;

  const site = await getSiteData(siteId);
  if (!site) return <div>Not Found</div>;

  if (!Template) return <div>Template Not Found</div>;

  const news = await getGlobalNews();
  const newsItems = toGlobalNewsItems(news);

  return <Template site={site} edit={false} newsItems={newsItems} />;
}
