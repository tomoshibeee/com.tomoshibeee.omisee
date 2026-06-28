"use client";

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
  edit?: boolean;
  onEdit?: (block: Block) => void;
}
type BlockRendererMap = {
  hero: (block: HeroBlockType, meta?: MetaData, edit?: boolean) => JSX.Element;
  news: (block: NewsBlockType, meta?: MetaData, edit?: boolean) => JSX.Element;
  greeting: (
    block: GreetingBlockType,
    meta?: MetaData,
    edit?: boolean,
  ) => JSX.Element;
  access: (
    block: AccessBlockType,
    meta: MetaData,
    edit?: boolean,
  ) => JSX.Element;
  cta: (block: CtaBlockType, meta?: MetaData, edit?: boolean) => JSX.Element;
  contact: (
    block: ContactBlockType,
    meta: MetaData,
    edit?: boolean,
  ) => JSX.Element;
  service: (
    block: ServiceBlockType,
    meta?: MetaData,
    edit?: boolean,
  ) => JSX.Element;
};

const blockRegistry: BlockRendererMap = {
  hero: (block, _meta, edit) => {
    if (block.type !== "hero") return {} as JSX.Element;
    return block.variant === "carousel" ? (
      <HeroBlockCarousel
        data={block.data}
        edit={Boolean(edit)}
      />
    ) : (
      <HeroBlockImage
        data={block.data}
        edit={Boolean(edit)}
      />
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

export default function BlockRenderer(props: Props) {
  const { meta, block, edit, onEdit } = props;
  const render = blockRegistry[block.type];

  if (!render) return null;

  const content = render(block as any, meta, edit);

  // if (edit && onEdit) {
  //   return <div onClick={() => onEdit(block)}>{content}</div>;
  // }
  return <div>{content}</div>;
}
