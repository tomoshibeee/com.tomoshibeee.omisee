import { Block } from "@/features/block";

export type SectionData = {
  id: string;
  type: string;
  blocks: Block[];
};

export type Section =
  | {
      id: string;
      type: "hero";
      blocks: Block[];
    }
  | {
      id: string;
      type: "about";
      blocks: Block[];
    }
  | {
      id: string;
      type: "site_news";
      blocks: Block[];
    }
  | {
      id: string;
      type: "service";
      blocks: Block[];
    }
  | {
      id: string;
      type: "access";
      blocks: Block[];
    }
  | {
      id: string;
      type: "contact";
      blocks: Block[];
    };
