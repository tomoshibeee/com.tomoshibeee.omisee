export type HeroBlockData = {
  title: string;
  message?: string;
  images: { url: string; alt: string }[];
};

export type HeroBlockType = {
  id?: string;
  type: "hero";
  variant?: "single" | "carousel";
  data: HeroBlockData;
};
