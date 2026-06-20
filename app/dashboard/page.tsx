import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth"; // TODO : 仮

import { UserData } from "@/types/user";

import { getSiteMetas } from "@/services/siteMetaService";
import { getGlobalNews, toGlobalNewsItems } from "@/services/globalNewsService";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SiteLink } from "@/components/siteLink/SiteLink";
import { NewsDrawer } from "@/features/panel/ NewsDrawer";

export default async function Page() {
  const session = await getSession();
  let userName = "";
  let userAvatar = "";
  if (session?.user) {
    userName =
      session.user.user_metadata?.full_name ||
      session.user.user_metadata?.name ||
      session.user.email;
    userAvatar = session.user.user_metadata?.avatar_url;
  }

  const siteMetas = await getSiteMetas();

  if (!session) {
    redirect("/login");
  }
  // console.log("🚦🚦🚦 ダッシュボードのレンダリングテスト 🚦🚦🚦");

  const user: UserData = { name: userName, avator: userAvatar };

  const news = await getGlobalNews();
  const globalNewsItems = toGlobalNewsItems(news);

  return (
    <>
      <Header user={user} />
      <main style={{ padding: "20px" }}>
        <h1>omisee Dashboard Page</h1>
        <NewsDrawer newsItems={globalNewsItems}/>
        <section>
          <h2 className="text-xl font-semibold mb-4">Available Sites</h2>
          {/* これは表示されない */}
          <div className="grid md:grid-cols-2 gap-4">
            {siteMetas.map((m) => (
              <SiteLink {...m} key={m.site_id} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
