import { Section } from "../types/section";
import { MetaData } from "./meta";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

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
