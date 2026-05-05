import { SectionData } from "@/types/section";
import BlockRenderer from "@/components/blocks/BlockRenderer";

export default function AboutSection(data: SectionData) {
  return <section id={data.id} className="p-6 text-gray-800">
    {(data.blocks ?? []).map((block: any, blockIndex: number) => (
      <div key={block.id ?? `${block.type}-${blockIndex}`}>
        <BlockRenderer block={block} />
      </div>
    ))}
  </section>;
}
