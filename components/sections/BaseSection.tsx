import { MetaData } from "@/types/meta";
import { SectionData } from "@/types/section";
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
