import React, { JSX } from "react";
import HeroBlockImage from "@/features/block/hero/components/HeroBlockImage";
import HeroBlockCarousel from "@/features/block/hero/components/HeroBlockCarousel";
import NewsBlock from "@/features/block/news/components/NewsBlock";
import GreetingBlock from "@/features/block/greeting/components/GreetingBlock";
import ServiceBlock from "@/features/block/service/components/ServiceBlock";
import AccessBlock from "@/features/block/access/components/AccessBlock";
import CtaBlock from "@/features/block/cta/components/CtaBlock";
import ContactBlock from "./contact/components/ContactBlock";

import { MetaData } from "@/types/siteMeta";
import {
  Block,
  HeroBlockType,
  NewsBlockType,
  GreetingBlockType,
  AccessBlockType,
  CtaBlockType,
  ServiceBlockType,
  ContactBlockType,
} from "@/features/block/index";
interface Props {
  meta: MetaData;
  block: Block;
}
type BlockRendererMap = {
  hero: (block: HeroBlockType) => JSX.Element;
  news: (block: NewsBlockType) => JSX.Element;
  greeting: (block: GreetingBlockType) => JSX.Element;
  access: (block: AccessBlockType, meta: MetaData) => JSX.Element;
  cta: (block: CtaBlockType) => JSX.Element;
  contact: (block: ContactBlockType, meta: MetaData) => JSX.Element;
  service: (block: ServiceBlockType) => JSX.Element;
};

const blockRegistry: BlockRendererMap = {
  hero: (block) => {
    if (block.type !== "hero") return {} as JSX.Element;
    return block.variant === "carousel" ? (
      <HeroBlockCarousel {...block.data} />
    ) : (
      <HeroBlockImage {...block.data} />
    );
  },

  news: (block) => {
    if (block.type !== "news") return {} as JSX.Element;
    return <NewsBlock {...block.data} />;
  },

  greeting: (block) => {
    if (block.type !== "greeting") return {} as JSX.Element;
    return <GreetingBlock {...block.data} />;
  },

  service: (block) => {
    return <ServiceBlock {...block.data} />;
  },

  contact: (block, meta) => {
    return <ContactBlock {...block.data} meta={meta} />;
  },

  access: (block, meta) => {
    // if (block.type !== "access") return {} as JSX.Element;
    if (!meta) throw new Error("meta missing");
    // if (!meta.slug) throw new Error("slug missing");
    return <AccessBlock {...meta} />;
  },

  cta: (block) => {
    if (block.type !== "cta") return {} as JSX.Element;
    return <CtaBlock {...block.data} />;
  },
};

export default function BlockRenderer({ meta, block }: Props) {
  const render = blockRegistry[block.type];

  if (!render) return null;

  return render(block as any, meta);
}
