import { sites } from "@/lib/data";

import { getSiteIdBySlug } from "@/services/siteService";

import Template1 from "@/components/templates/Template1";
// import Template2 from "@/components/templates/Template2";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const templateMap: any = {
    template1: Template1,
    // template2: Template2,
  };

  const siteId = await getSiteIdBySlug(slug);
  console.log("🚦Site ID for slug:", slug, siteId);
  // TODO : design a better error page
  if (!siteId) return <div>Site Not Found</div>;

  const site = sites.find((s) => s.meta.slug === slug);
  // console.log("Found site for slug:", slug, site);
  if (!site) return <div>Not Found</div>;

  const Template = templateMap[site.layout.template];

  if (!Template) return <div>Template Not Found</div>;

  return <Template site={site} />;
}
