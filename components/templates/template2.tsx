import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AboutBlock from "../blocks/AboutBlock";
import AccessBlock from "../blocks/AccessBlock";

export default function Template2({ site }: any) {
  const hero = site.blocks.find((b: any) => b.type === "hero");
  const info = site.blocks.find((b: any) => b.type === "info");
  const about = site.blocks.find((b: any) => b.type === "about");
  const access = site.blocks.find((b: any) => b.type === "access");

  return (
    <>
      <Header site={site} />

      <main>
        {/* Heroだけ巨大表示 */}
        {/* <section className="bg-gradient-to-r from-purple-500 to-pink-500"> */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          {/* <section className="h-screen flex items-center justify-center bg-black text-white"> */}
          <h1 className="text-5xl">{hero?.title}</h1>
        </section>

        {/* AboutはHeroの次に大きく表示 */}
        <AboutBlock block={about} />

        {/* Infoはカード風 */}
        <section className="p-10 grid grid-cols-2 gap-4">
          <div className="border p-4">{info?.text}</div>
        </section>

        {/* Accessはシンプルに */}
        <AccessBlock block={access} />

      </main>
      <Footer site={site} />
    </>
  );
}
