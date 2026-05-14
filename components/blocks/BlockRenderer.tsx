import HeroBlockImage from "./hero/HeroBlockImage";
import HeroBlockCarousel from "./hero/HeroBlockCarousel";
import GreetingBlock from "./greeting/GreetingBlock";
import ServiceBlock from "./service/ServiceBlock";
import AccessBlock from "./access/AccessBlock";
import CtaBlock from "./cta/CtaBlock";

import { MetaData } from "@/types/meta";
import { Block } from "../../types/block";

export default function BlockRenderer({ meta, block }: { meta: MetaData, block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        block.variant === "carousel"
          ? <HeroBlockCarousel {...block.data} />
          : <HeroBlockImage {...block.data} />
      );

    case "greeting":
      return <GreetingBlock {...block.data} />;

    case "service":
      return <ServiceBlock {...block.data} />;

    case "access":
      return <AccessBlock {...meta} />;

    case "cta":
      return <CtaBlock {...block.data} />;

    default:
      return null;
  }
}
