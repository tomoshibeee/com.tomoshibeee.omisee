import { Section } from "@/features/section/types";
import { MetaData } from "./meta";
import { MenuItem } from "./menu";
import { SocialLink } from "./socialLink";
import { NewsBlockType } from "@/features/block";

export type SiteData = {
  meta: MetaData;
  navigation?: {
    menu?: MenuItem[];
  };
  layout: {
    sections: Section[];
  };
  socialLinks?: SocialLink[];
  news : NewsBlockType[];
};
