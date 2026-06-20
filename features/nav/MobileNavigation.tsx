import { SiteData } from "@/types/site";
import { HamburgerMenu } from "@/features/menu/HamburgerMenu";

type Props = {
  site?: SiteData;
};

export function MobileNavigation(props: Props) {
  const { site } = props;
  return <HamburgerMenu site={site} />;
}
