export type { HeroBlockData, HeroBlockType } from "./hero";
export type { GreetingBlockData, GreetingBlockType } from "./greeting";
export type { ServiceBlockData, ServiceBlockType } from "./service";
export type { NewsBlockData, NewsBlockType } from "./news";
export type { AccessBlockData, AccessBlockType } from "./access";
export type { CtaBlockData, CtaBlockType } from "./cta";

import type { HeroBlockType } from "./hero";
import type { GreetingBlockType } from "./greeting";
import type { ServiceBlockType } from "./service";
import type { NewsBlockType } from "./news";
import type { AccessBlockType } from "./access";
import type { CtaBlockType } from "./cta";

export type Block =
  | HeroBlockType
  | GreetingBlockType
  | ServiceBlockType
  | NewsBlockType
  | AccessBlockType
  | CtaBlockType;
