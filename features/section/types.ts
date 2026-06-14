import { Block } from "@/features/block";
import { SectionType } from "@/models/siteSection";

export type Section = {
  id: string;
  type: SectionType;
  blocks: Block[];
};