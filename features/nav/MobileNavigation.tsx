import { SiteData } from "@/types/site";
import { HamburgerMenu } from "@/features/menu/HamburgerMenu";

export function MobileNavigation({ site }: { site: SiteData }) {
  return <HamburgerMenu />;
}
