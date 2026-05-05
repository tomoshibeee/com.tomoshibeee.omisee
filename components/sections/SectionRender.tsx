import AboutSection from "./about/AboutSection";

import { Section } from "@/types/section";

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "about":
      return (
        <section id={section.id}>
          {section.blocks.map((block, i) =>
            block.type === "about" ? (
              <AboutSection key={i} {...block.data} />
            ) : null
          )}
        </section>
      );

    default:
      return null;
  }
}
