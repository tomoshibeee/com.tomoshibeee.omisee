import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BaseSection from "@/features/section/components/BaseSection";
import { SectionData } from "@/features/section/types";
import { SiteData } from "@/types/site";

export default function Template(site: SiteData) {
  const sections = site?.layout?.sections;
  return (
    <div>
      <Header site={site} />
      {sections?.map((section: SectionData, sectionIndex: number) => (
        <BaseSection
          key={section.id ?? sectionIndex}
          meta={site.meta}
          section={{ ...section }}
          // site.news (SiteNews[]) may not match the expected NewsItem[] type
          // cast to any here to satisfy TypeScript without changing other files
          news={site.news}
        />
      ))}
      <Footer site={site} />
    </div>
  );
}
