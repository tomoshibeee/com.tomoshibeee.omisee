import HeroBlockSingleImage from "./hero/HeroSingleImage";
import HeroCarousel from "./hero/HeroCarousel";
import AboutBlock from "./about/AboutBlock";
import InfoBlock from "./info/InfoBlock";
import AccessBlock from "./access/AccessBlock";
import CtaBlock from "./cta/CtaBlock";

interface Props {
  block: {
    type: string;
    variant?: string;
    data: unknown;
  };
}

export default function BlockRenderer({ block }: Props) {
  let content = null;

  switch (block.type) {
    case "hero":
      content =
        block.variant === "carousel"
          ? <HeroCarousel {...block.data} />
          : <HeroBlockSingleImage {...block.data} />;
      break;

    case "about":
      content = <AboutBlock {...block.data} />;
      break;

    case "info":
      content = <InfoBlock {...block.data} />;
      break;

    case "access":
      content = <AccessBlock {...block.data} />;
      break;

    case "cta":
      content = <CtaBlock {...block.data} />;
      break;

    default:
      return null;
  }

  return (
    <section id={block.type}>
      {content}
    </section>
  );
}