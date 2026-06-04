import { MetaData } from "@/types/meta";
import { SectionData } from "@/features/section/types";
import BlockRenderer from "@/features/block/BlockRenderer";

export default function BaseSection({
  section,
  meta,
}: {
  section: SectionData;
  meta: MetaData;
}) {
  if (!section) return null;
  return (
    <section id={section.id} className="p-0 text-gray-800">
      <p>[DEBUG]section.id={section.id}</p>
      <p>[DEBUG]section.blocks.length={section.blocks.length}</p>
      {(section.blocks ?? []).map((block, i) => (
        <BlockRenderer
          key={block.id ?? `${block.type}-${i}`}
          meta={meta}
          block={block}
        />
      ))}
    </section>
  );
}
