import HeroBlock from "../blocks/HeroBlock";
import InfoBlock from "../blocks/InfoBlock";

const blockMap: any = {
  hero: HeroBlock,
  info: InfoBlock,
};

function renderBlock(block: any, i: number) {
  const Block = blockMap[block.type];

  if (!Block) return null;

  return <Block key={i} block={block} />;
}

export default function Template0({ site }: any) {
  return <main>{site.blocks.map(renderBlock)}</main>;
//   return (
//     <main>
//       <pre>{JSON.stringify(site, null, 2)}</pre>
//     </main>
//   )
}

