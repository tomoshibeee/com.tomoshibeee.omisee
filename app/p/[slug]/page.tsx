import { sites } from "@/lib/data";

import Template1 from "@/components/templates/Template1";
import Template2 from "@/components/templates/Template2";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const templateMap: any = {
    template1: Template1,
    template2: Template2,
  };

  const site = sites.find((s) => s.slug === slug);

  if (!site) return <div>Not Found</div>;

  const Template = templateMap[site.template];

  if (!Template) return <div>Template Not Found</div>;

  return <Template site={site} />;
}
