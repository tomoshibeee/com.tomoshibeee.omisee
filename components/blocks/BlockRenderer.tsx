import HeroBlockSingleImage from "./hero/HeroSingleImage";
import HeroCarousel from "./hero/HeroCarousel";
import InfoBlock from "./info/InfoBlock";
import AccessBlock from "./access/AccessBlock";
import CtaBlock from "./cta/CtaBlock";

import { Block } from "../../types/block";

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        block.variant === "carousel"
          ? <HeroCarousel {...block.data} />
          : <HeroBlockSingleImage {...block.data} />
      );

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