import { Section as SectionUI } from "@/features/section/types";
import { MetaData } from "./siteMeta";
import { MenuItem } from "./siteMenu";
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
