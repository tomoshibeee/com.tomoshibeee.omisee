import Link from "next/link";

import { News } from "@/models/news";

import { getSiteMetas } from "@/services/siteService";
import { getLatestNews } from "@/services/newsService";

export default async function Page() {
  const siteMetas = await getSiteMetas();
  const news = await getLatestNews();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* タイトル */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Tomoshibeee Church1 SaaS</h1>
        <p className="text-gray-500">It works 🚀</p>
      </section>

      {/* News */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>

        <div className="space-y-3">
          {news?.map((item: News) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">{item.title}</p>
              <small className="text-gray-500">
                {new Date(item.published_at).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* Sites */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Sites</h2>

        <div className="space-y-2">
          {siteMetas.map((meta) => (
            <div
              key={meta.slug}
              className="flex items-center justify-between border rounded-lg px-4 py-3 hover:bg-gray-50 transition"
            >
              <div>
                <p className="font-medium">{meta.name}</p>
                <p className="text-sm text-gray-500">/p/{meta.slug}</p>
              </div>

              <Link
                href={`/p/${meta.slug}`}
                className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition"
              >
                Visit
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
