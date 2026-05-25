export type { HeroBlockData, HeroBlockType } from "./hero/types";
export type { GreetingBlockData, GreetingBlockType } from "./greeting/types";
export type { ServiceBlockData, ServiceBlockType } from "./service/types";
export type { NewsBlockData, NewsBlockType } from "./news/types";
export type { AccessBlockData, AccessBlockType } from "./access/types";
export type { CtaBlockData, CtaBlockType } from "./cta/types";

import type { HeroBlockType } from "./hero/types";
import type { GreetingBlockType } from "./greeting/types";
import type { ServiceBlockType } from "./service/types";
import type { NewsBlockType } from "./news/types";
import type { AccessBlockType } from "./access/types";
import type { CtaBlockType } from "./cta/types";

export type Block =
  | HeroBlockType
  | GreetingBlockType
  | ServiceBlockType
  | NewsBlockType
  | AccessBlockType
  | CtaBlockType;
