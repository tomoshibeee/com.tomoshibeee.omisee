import Template from "@/components/templates/Template";
import SiteNavigation from "@/components/shared/SiteNavigation";

import { getSiteData } from "@/services/siteService";

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

  return <SiteNavigation site={site} />;
}
