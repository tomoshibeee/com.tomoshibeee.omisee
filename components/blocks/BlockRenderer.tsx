import HeroBlockImage from "./hero/HeroBlockImage";
import HeroBlockCarousel from "./hero/HeroBlockCarousel";
import GreetingBlock from "./greeting/GreetingBlock";
import InfoBlock from "./info/InfoBlock";
import AccessBlock from "./access/AccessBlock";
import CtaBlock from "./cta/CtaBlock";

import { Block } from "../../types/block";

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        block.variant === "carousel"
          ? <HeroBlockCarousel {...block.data} />
          : <HeroBlockImage {...block.data} />
      );

    case "greeting":
      return <GreetingBlock {...block.data} />;

    case "info":
      return <InfoBlock {...block.data} />;

    case "access":
      return <AccessBlock {...block.data} />;

    case "cta":
      return <CtaBlock {...block.data} />;

    default:
      return null;
  }
}