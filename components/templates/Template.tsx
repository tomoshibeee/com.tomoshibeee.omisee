import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BaseSection from "@/features/section/components/BaseSection";
import { SectionData } from "@/features/section/types";
import { SiteData } from "@/types/site";

type TemplateProps = SiteData & {
  edit?: boolean;
};

export default function Template({ edit = false, ...site }: TemplateProps) {
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
        />
      ))}
      <Footer site={site} edit={edit} />
    </div>
  );
}
