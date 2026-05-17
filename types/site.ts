import { Section } from "../types/section";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

export type SiteData = {
  meta: {
    slug: string;
    name: string;
    email: string;
    message: string;
    sns: { type: string; url: string }[];
  };
  navigation: {
    menu?: MenuItem[];
  };
  layout: {
    template: string;
    sections: Section[];
  };
};
