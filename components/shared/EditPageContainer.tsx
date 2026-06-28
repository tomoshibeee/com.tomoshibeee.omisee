"use client";

import { useState } from "react";

import Template from "@/components/templates/Template";
import { SiteData } from "@/types/site";
import { Block } from "@/features/block/index";
import { ImageDrawer } from "@/features/drawer/ImageDrawer";

type Props = {
  site: SiteData;
};

export default function EditPageContainer(props: Props) {
  const { site } = props;

  const [editingBlock, setEditingBlock] = useState<Block | null>(null);
  const [sections, setSections] = useState(site.layout.sections);

  return (
    <>
      <Template
        site={{
          ...site,
          layout: { ...site.layout, sections: sections },
        }}
        edit
        onEdit={(b) => setEditingBlock(b)}
      />

      {editingBlock && (
        <ImageDrawer
          open={true}
          onClose={() => setEditingBlock(null)}
          // onChange={(updatedBlock) => {
          //   setSections((prev) =>
          //     prev.map((section) => ({
          //       ...section,
          //       blocks: section.blocks.map((b) =>
          //         b.id === updatedBlock.id ? updatedBlock : b,
          //       ),
          //     })),
          //   );

          //   setEditingBlock(updatedBlock); 
          // }}
        />
      )}
    </>
  );
}
