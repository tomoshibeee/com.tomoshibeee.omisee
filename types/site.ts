import { Section } from "@/features/section/types";
import { MetaData } from "./meta";
import { MenuItem } from "./menu";
import { SocialLink } from "./socialLink";

export type SiteData = {
  meta: MetaData;
  navigation: {
    menu?: MenuItem[];
  };
  layout: {
    sections: Section[];
  };
  socialLinks?: SocialLink[];
};
