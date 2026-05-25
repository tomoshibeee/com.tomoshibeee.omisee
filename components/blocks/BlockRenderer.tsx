import React, { JSX } from "react";
import HeroBlockImage from "./hero/HeroBlockImage";
import HeroBlockCarousel from "./hero/HeroBlockCarousel";
import NewsBlock from "./news/NewsBlock";
import GreetingBlock from "./greeting/GreetingBlock";
import ServiceBlock from "./service/ServiceBlock";
import AccessBlock from "./access/AccessBlock";
import CtaBlock from "./cta/CtaBlock";

import { MetaData } from "@/types/meta";
import { Block } from "../../types/block";
interface Props {
  meta: MetaData;
  block: Block;
}

type BlockRendererFn = (block: Block, meta?: MetaData) => JSX.Element;

const blockRegistry: Record<string, BlockRendererFn> = {
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
    if (block.type !== "service") return {} as JSX.Element;
    return <ServiceBlock {...block.data} />;
  },

  access: (block, meta) => {
    if (block.type !== "access") return {} as JSX.Element;
    if (!meta) throw new Error("meta missing");
    if (!meta.slug) throw new Error("slug missing");
    return <AccessBlock {...meta } />;
  },

  cta: (block) => {
    if (block.type !== "cta") return {} as JSX.Element;
    return <CtaBlock {...block.data} />;
  },
};

export default function BlockRenderer({ meta, block }: Props) {
  const render = blockRegistry[block.type];

  if (!render) return null;

  return render(block, meta);
}
