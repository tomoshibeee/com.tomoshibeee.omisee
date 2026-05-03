import Header from "@/components/shared/Header";
import BlockRenderer from "../blocks/BlockRenderer";
import Footer from "@/components/shared/Footer";

export default function Template1({ site }: any) {
  console.log("Rendering Template1 with site:", site);
  return (
    <div>
      <Header site={site} />
      {site.layout.blocks.map((block: any, i: number) => (
        <BlockRenderer key={i} block={block} />
      ))}
      <Footer site={site} />
    </div>
  );
}
