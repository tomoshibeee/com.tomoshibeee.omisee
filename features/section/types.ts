import { Block } from "@/features/block";
import { SectionType } from "@/models/siteSection";

export type SectionData = {
  id: string;
  type: SectionType;
  blocks: Block[];
};