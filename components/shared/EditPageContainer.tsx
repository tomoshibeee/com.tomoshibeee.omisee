"use client";

import { useState } from "react";

import Template from "@/components/templates/Template";
import { SiteData } from "@/types/site";
import { Block } from "@/features/block/index";
import { BlockDrawer } from "@/features/block/BlockDrawer";

type Props = {
  site: SiteData;
};

export default function EditPageContainer(props: Props) {
  const { site } = props;

  const [editingBlock, setEditingBlock] = useState<Block | null>(null);
  return (
    <>
      <Template site={site} edit onEdit={(b) => setEditingBlock(b)} />

      {editingBlock && (
        <BlockDrawer
          block={editingBlock}
          open={true}
          onClose={() => setEditingBlock(null)}
        />
      )}
    </>
  );
}
