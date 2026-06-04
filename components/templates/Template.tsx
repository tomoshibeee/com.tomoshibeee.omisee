import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BaseSection from "@/features/section/components/BaseSection";
import { SectionData } from "@/features/section/types";
import { SiteData } from "@/types/site";

export default function Template(site: SiteData) {
  const sections = site?.layout?.sections;
  console.log("🚦[Template]site", site);
  return (
    <div>
      <Header site={site} />
      {sections.map((section: SectionData, sectionIndex: number) => (
        <BaseSection
          key={section.id ?? sectionIndex}
          meta={site.meta}
          section={{ ...section }}
        />
      ))}
      <Footer site={site} />
    </div>
  );
}
