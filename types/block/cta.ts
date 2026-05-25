export type CtaBlockData = {
  buttons?: { label: string; href: string }[];
};

export type CtaBlockType = {
  id?: string;
  type: "cta";
  data: CtaBlockData;
};
