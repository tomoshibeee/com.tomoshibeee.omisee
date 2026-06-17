import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth"; // 仮

import { getSiteMetas } from "@/services/siteMetaService";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SiteLink } from "@/components/siteLink/SiteLink";

export default async function Page() {
  const session = await getSession();
  let userName = ""
  if (session?.user) {
    userName =
      session.user.user_metadata?.full_name ||
      session.user.user_metadata?.name ||
      session.user.email;

    console.log("🚦ログインユーザー名:", userName);
  }

  const siteMetas = await getSiteMetas();

  if (!session) {
    redirect("/login");
  }
  console.log("🚦🚦🚦 ダッシュボードのレンダリングテスト 🚦🚦🚦");

  return (
    <>
      <Header variant="dashboard" />
      <main style={{ padding: "20px" }}>
        <h1>omisee Dashboard Page</h1>
        <p>もしこの画面が見えていたら、ファイルの配置（URL）は正常です！</p>
        <p>ユーザー名：{userName}</p>

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
      <Footer variant="dashboard" />
    </>
  );
}
