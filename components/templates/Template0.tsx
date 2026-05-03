import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroBlock from "../blocks/HeroBlock";
import InfoBlock from "../blocks/info/InfoBlock";
import AboutBlock from "../blocks/about/AboutBlock";
import AccessBlock from "../blocks/AccessBlock";

const blockMap: any = {
  hero: HeroBlock,
  info: InfoBlock,
  about: AboutBlock,
  access: AccessBlock,
};

function renderBlock(block: any, i: number) {
  const Block = blockMap[block.type];

  if (!Block) return null;

  return <Block key={i} block={block} />;
}

export default function Template0({ site }: any) {
  return;
  <>
    <Header site={site} />

    <main>{site.blocks.map(renderBlock)}</main>

    <Footer site={site} />
  </>;
  //   return (
  //     <main>
  //       <pre>{JSON.stringify(site, null, 2)}</pre>
  //     </main>
  //   )
}
