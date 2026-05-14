export type HeroData = {
  title: string;
  messages: string;
  images: { url: string; alt: string }[];
};

export type AboutData = {
  name: string;
  role?: string;
  image: string;
  bio?: string;
  message?: string;
};

export type GreetingData = AboutData;

export type InfoData = {
  text: string;
};

export type AccessData = {
};

export type CtaData = {
  buttons?: { label: string; href: string }[];
};

export type Block =
  | {
      id?: string;
      type: "hero";
      variant?: "single" | "carousel";
      data: HeroData;
    }
  | { id?: string; type: "greeting"; data: GreetingData }
  | { id?: string; type: "about"; data: AboutData }
  | { id?: string; type: "info"; data: InfoData }
  | { id?: string; type: "access"; data: AccessData }
  | { id?: string; type: "cta"; data: CtaData };
