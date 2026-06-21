"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BaseSection from "@/features/section/components/BaseSection";
import { SectionData } from "@/features/section/types";
import { Block } from "@/features/block/index";
import { SiteData } from "@/types/site";

type Props = {
  site: SiteData;
  edit?: boolean;
  onEdit?: (b: Block) => void;
};

export default function Template(props: Props) {
  const { site, edit, onEdit } = props;
  const sections = site?.layout?.sections;

  return (
    <div>
      <Header site={site} />
      {sections?.map((section: SectionData, sectionIndex: number) => (
        <BaseSection
          key={section.id ?? sectionIndex}
          meta={site.meta}
          section={{ ...section }}
          edit={edit}
          onEdit={onEdit}
        />
      ))}
      <Footer site={site} edit={edit} />
    </div>
  );
}
