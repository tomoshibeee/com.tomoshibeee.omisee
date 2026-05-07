import { Section } from "./section";

export type SiteData = {
  meta: {
    slug: string;
    name: string;
    email: string;
    message: string;
    sns: { type: string; url: string }[];
  };
  navigation: {
    menu?: Array<{
      href: string;
      label: string;
    }>;
  };
  layout: {
    template: string;
    sections: Section[];
  };
};
