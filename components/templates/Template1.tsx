import Header from "@/components/shared/Header";
import BlockRenderer from "../blocks/BlockRenderer";
import Footer from "@/components/shared/Footer";
import BaseSection from "../sections/BaseSection";

export default function Template1({ site }: any) {
  console.log("Rendering Template1 with site:", site);
  const rawSections = site?.layout?.sections;
  const blocks = site?.layout?.blocks ?? [];
  const sections =
    Array.isArray(rawSections) && rawSections.length
      ? rawSections
      : [{ id: "content", type: "content", blocks }];

  return (
    <div>
      <Header site={site} />
      {sections.map((section: any, sectionIndex: number) => (
        <BaseSection key={section.id ?? sectionIndex} {...section} />
      ))}
      <Footer props={site} />
    </div>
  );
}
