import BaseSection from "./components/BaseSection";

import { MetaData } from "@/types/siteMeta";
import { SectionData } from "@/features/section/types";

export default function SectionRenderer({ meta, section }: { meta: MetaData, section: SectionData}) {
  return <BaseSection meta={meta} section={section} />;
}
