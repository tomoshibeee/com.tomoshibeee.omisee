import { MetaData } from "@/types/siteMeta";
import { SectionData } from "@/features/section/types";
import { NewsBlockData } from "@/features/block/news/types";
import BlockRenderer from "@/features/block/BlockRenderer";

type Props = {
  section: SectionData;
  meta: MetaData;
  edit: boolean;
};
export default function BaseSection(props: Props) {
  const { section, meta, edit } = props;
  if (!section) return null;
  return (
    <section id={section.id} className="p-0 text-gray-800">
      {(section.blocks ?? []).map((block, i) => (
        <BlockRenderer
          key={block.id ?? `${block.type}-${i}`}
          meta={meta}
          block={block}
          edit={edit}
        />
      ))}
    </section>
  );
}
