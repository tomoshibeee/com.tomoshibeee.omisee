import HeroBlockSingleImage from "./hero/HeroSingleImage";
import HeroCarousel from "./hero/HeroCarousel";
import AboutBlock from "./about/AboutBlock";
import InfoBlock from "./info/InfoBlock";
import AccessBlock from "./access/AccessBlock";

export default function BlockRenderer({ block }: any) {
  switch (block.type) {
    case "hero":
      if (block.variant === "carousel") {
        return <HeroCarousel {...block.data} />;
      }
      return <HeroBlockSingleImage {...block.data} />;

    case "about":
      return <AboutBlock {...block.data} />;

    case "info":
      return <InfoBlock {...block.data} />;

    case "access":
      return <AccessBlock {...block.data} />;

    default:
      return null;
  }
}
