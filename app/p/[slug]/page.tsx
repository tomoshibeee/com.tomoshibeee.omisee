import { sites } from "@/lib/data";

import { getSiteIdBySlug } from "@/services/siteService";

import Template from "@/components/templates/Template";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const siteId = await getSiteIdBySlug(slug);
  console.log("🚦Site ID for slug:", slug, siteId);
  // TODO : design a better error page
  if (!siteId) return <div>Site Not Found</div>;

  const site = sites.find((s) => s.meta.slug === slug);
  // console.log("Found site for slug:", slug, site);
  if (!site) return <div>Not Found</div>;

  if (!Template) return <div>Template Not Found</div>;

  return <Template site={site} />;
}
