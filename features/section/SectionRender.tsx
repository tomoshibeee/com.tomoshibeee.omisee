import BaseSection from "./components/BaseSection";

import { MetaData } from "@/types/meta";
import { SectionData } from "@/features/section/components/types";

export default function SectionRenderer({ meta, section }: { meta: MetaData, section: SectionData}) {
  return <BaseSection meta={meta} section={section} />;
}
