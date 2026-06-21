"use client";

import { MetaData } from "@/types/siteMeta";
import { SectionData } from "@/features/section/types";
import { Block } from "@/features/block/index";
import BlockRenderer from "@/features/block/BlockRenderer";

type Props = {
  section: SectionData;
  meta: MetaData;
  edit?: boolean;
  onEdit?: (b: Block) => void;
};
export default function BaseSection(props: Props) {
  const { section, meta, edit, onEdit } = props;
  if (!section) return null;
  return (
    <section id={section.id} className="p-0 text-gray-800">
      {(section.blocks ?? []).map((block, i) => (
        <BlockRenderer
          key={block.id ?? `${block.type}-${i}`}
          meta={meta}
          block={block}
          edit={edit}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}
