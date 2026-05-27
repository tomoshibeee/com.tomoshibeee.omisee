import { Section } from "@/features/section/types";
import { MetaData } from "./meta";
import { MenuItem } from "./menu";

export type SiteData = {
  meta: MetaData;
  navigation: {
    menu?: MenuItem[];
  };
  layout: {
    template: string;
    sections: Section[];
  };
};
