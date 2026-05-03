export type HeroData = {
  title: string;
  message: string;
};

export type AboutData = {
  name: string;
  role?: string;
  image: string;
  bio?: string;
  message?: string;
};

export type InfoData = {
  text: string;
};

export type AccessData = {
  address: string;
  mapUrl: string;
  access: string;
};

export type CtaData = {
  label: string;
  href: string;
};

export type Block =
  | { type: "hero"; variant?: "single" | "carousel"; data: HeroData }
  | { type: "about"; data: AboutData }
  | { type: "info"; data: InfoData }
  | { type: "access"; data: AccessData }
  | { type: "cta"; data: CtaData };