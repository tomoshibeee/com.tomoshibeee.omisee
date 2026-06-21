import { SiteLink } from "@/components/siteLink/SiteLink";

import { getSiteMetas } from "@/services/siteMetaService";

export default async function Page() {
  const siteMetas = await getSiteMetas();

  return (
    <main className="w-full px-4 py-10 space-y-12">
      {/* タイトル */}
      <section>
        <h1 className="text-3xl font-bold mb-2">omisee</h1>
        <p className="text-gray-500">It works 🚀</p>
      </section>
      {/* Sites */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Sites</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {siteMetas.map((m) => (
            <SiteLink meta={m} key={m.site_id} />
          ))}
        </div>
      </section>
    </main>
  );
}
