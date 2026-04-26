import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroBlock from "../blocks/HeroBlock";
import InfoBlock from "../blocks/InfoBlock";
import AboutBlock from "../blocks/AboutBlock";

const blockMap: any = {
  hero: HeroBlock,
  info: InfoBlock,
  about: AboutBlock,
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
