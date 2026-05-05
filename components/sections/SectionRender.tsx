import BaseSection from "./BaseSection";
import { SectionData } from "@/types/section";

export default function SectionRenderer({ section }: { section: SectionData }) {
  switch (section.type) {
    case "about":
      return (
        <>
          {section.blocks.map((block: any, i) =>
            block.type === "about" ? <BaseSection key={i} {...block} /> : null,
          )}
        </>
      );

    default:
      return null;
  }
}
