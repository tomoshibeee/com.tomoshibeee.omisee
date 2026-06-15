import { getSiteData } from "@/services/siteService";
import Template from "@/components/templates/Template";

export default async function Page({
  params,
}: {
  params: { siteId: string };
}) {
  const { siteId } = params;

  if (!siteId) return <div>Site Not Found</div>;

  const site = await getSiteData(siteId);
  if (!site) return <div>Not Found</div>;

  return <Template {...site} edit />;
}