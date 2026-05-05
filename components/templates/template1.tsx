import Header from "@/components/shared/Header";
import BlockRenderer from "../blocks/BlockRenderer";
import Footer from "@/components/shared/Footer";

export default function Template1({ site }: any) {
  console.log("Rendering Template1 with site:", site);
  const sections = site?.layout?.sections;
  const blocks = site?.layout?.blocks ?? [];

  return (
    <div>
      <Header site={site} />
      {Array.isArray(sections) && sections.length ? (
        sections.map((section: any, sectionIndex: number) => (
          <section key={section.id ?? sectionIndex} id={section.id ?? `section-${sectionIndex}`}>
            {(section.blocks ?? []).map((block: any, blockIndex: number) => (
              <div key={block.id ?? `${block.type}-${blockIndex}`}>
                <BlockRenderer block={block} />
              </div>
            ))}
          </section>
        ))
      ) : (
        blocks.map((block: any, i: number) => (
          <section key={block.id ?? i} id={block.id ?? `${block.type}-${i}`}>
            <BlockRenderer block={block} />
          </section>
        ))
      )}
      <Footer site={site} />
    </div>
  );
}
