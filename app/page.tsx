import Link from "next/link";

import { NewsCard } from "@/components/news/NewsCard";
import { SiteLink } from "@/components/siteLink/SiteLink";

import { getSiteMetas } from "@/services/siteMetaService";
import { getGlobalNews, toGlobalNewsItems } from "@/services/globalNewsService";

export default async function Page() {
  const siteMetas = await getSiteMetas();
  const news = await getGlobalNews();
  const globalNewsItems = toGlobalNewsItems(news);

  return (
    <main className="w-full px-4 py-10 space-y-12">
      {/* タイトル */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Tomoshibeee Church1 SaaS</h1>
        <p className="text-gray-500">It works 🚀</p>
      </section>
      {/* News */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>

        <div className="space-y-3">
          {globalNewsItems.map((n, i) => (
            <NewsCard key={n.id ?? `global_news_${i}`} item={n} />
          ))}{" "}
        </div>
      </section>
      {/* Sites */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Sites</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {siteMetas.map((m) => (
            <SiteLink {...m} key={m.site_id} />
          ))}
        </div>
      </section>
    </main>
  );
}
