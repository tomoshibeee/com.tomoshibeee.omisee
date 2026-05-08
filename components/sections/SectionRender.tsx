import BaseSection from "./BaseSection";

import { MetaData } from "@/types/meta";
import { SectionData } from "@/types/section";

export default function SectionRenderer({ meta, section }: { meta: MetaData, section: SectionData}) {
  return <BaseSection meta={meta} section={section} />;
}
