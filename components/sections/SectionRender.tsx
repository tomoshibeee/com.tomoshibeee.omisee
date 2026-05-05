import BaseSection from "./BaseSection";
import { SectionData } from "@/types/section";

export default function SectionRenderer({ section }: { section: SectionData }) {
  return <BaseSection key={i} {...section} />;
}
