import Link from "next/link";

import { News } from "@/models/news";

import { NewsCard } from "@/components/news/NewsCard";
import { NewsItem } from "@/features/block/news/types";

import { getSiteMetas } from "@/services/siteService";
import { getLatestNews } from "@/services/newsService";

export default async function Page() {
  const siteMetas = await getSiteMetas();
  const news = await getLatestNews();

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
          {news?.map((item: News, index: number) => {
            const key = `news-${index}-${item.id}`;
            const newsItem: NewsItem = {
              id: item.id ?? "",
              title: item.title,
              content: item.content ?? "",
              eventDate: item.event_date,
              publishedAt: item.published_at,
            };
            return <NewsCard key={key} item={newsItem} />;
          })}
        </div>
      </section>
      {/* Sites */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Sites</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {siteMetas.map((meta) => (
            <Link
              key={meta.slug}
              href={`/p/${meta.slug}`}
              className="block border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition bg-white"
            >
              <div className="space-y-2">
                {/* タイトル */}
                <p className="font-semibold text-lg">{meta.name}</p>

                {/* スラッグ */}
                <p className="text-sm text-gray-500">/p/{meta.slug}</p>

                {/* CTA */}
                <div className="pt-2">
                  <span className="text-sm text-blue-600 font-medium hover:underline">
                    Visit →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
