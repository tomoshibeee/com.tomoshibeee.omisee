import { getSiteIdBySlug } from "@/services/siteService";
import { getSiteData } from "@/services/siteService";

import Template from "@/components/templates/Template";

export default async function Page({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;

  if (!siteId) return <div>Site Not Found</div>;

  const site = await getSiteData(siteId);
  if (!site) return <div>Not Found</div>;

  if (!Template) return <div>Template Not Found</div>;

  return <Template {...site} />;
}
