import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth"; // 仮

import { getSiteMetas } from "@/services/siteMetaService";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SiteLink } from "@/components/siteLink/SiteLink";

export default async function Page() {
  const session = await getSession();

  const siteMetas = await getSiteMetas();

  console.log("🚦🚦🚦session🚦🚦🚦", session);
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header variant="dashboard" />
      <main>
        <h1>omisee Dashboard Page</h1>
        {/* Sites */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Available Sites</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {siteMetas.map(m => (
              <SiteLink {...m} key={m.site_id} />
            ))}
          </div>
        </section>
      </main>
      <Footer variant="dashboard" />
    </>
  );
}
