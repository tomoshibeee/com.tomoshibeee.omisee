export type HeroData = {
  title: string;
  message?: string;
  images: { url: string; alt: string }[];
};

export type AboutData = {
  name: string;
  role?: string;
  image: string;
  bio?: string;
  message?: string;
};

export type NewsData = {
  source: string;
  limit?: number;
};

export type GreetingData = AboutData;

export type ServiceData = {
  items: {
    id: string;
    title: string;
    time: string;
    location: string;
    link?: string;
    comment?: string;
  }[];
};

export type AccessData = {};

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
  | { id?: string; type: "news"; data: NewsData }
  | { id?: string; type: "greeting"; data: GreetingData }
  | { id?: string; type: "about"; data: AboutData }
  | { id?: string; type: "service"; data: ServiceData }
  | { id?: string; type: "access"; data: AccessData }
  | { id?: string; type: "cta"; data: CtaData };
