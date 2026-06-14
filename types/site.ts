import { Section as SectionUI } from "@/features/section/types";
import { MetaData } from "./meta";
import { MenuItem } from "./menu";
import { SiteSocialLink } from "@/models/siteSocialLink";

export type SiteData = {
  meta: MetaData;
  navigation?: {
    menu?: MenuItem[];
  };
  layout: {
    sections: SectionUI[];
  };
  socialLinks?: SiteSocialLink[];
};
