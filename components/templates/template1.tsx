import Header from "@/components/shared/Header";
import BlockRenderer from "../blocks/BlockRenderer";
import Footer from "@/components/shared/Footer";

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
        <section
          key={section.id ?? sectionIndex}
          id={section.id ?? `section-${sectionIndex}`}
        >
          {(section.blocks ?? []).map((block: any, blockIndex: number) => (
            <div key={block.id ?? `${block.type}-${blockIndex}`}>
              <BlockRenderer block={block} />
            </div>
          ))}
        </section>
      ))}
      <Footer site={site} />
    </div>
  );
}
