import { SiteData } from "@/types/site";
import { HamburgerMenu } from "@/features/menu/HamburgerMenu";
import { UserData } from "@/types/user";

type Props = {
  site?: SiteData;
  user?: UserData;
  onOpenNews?: () => void;
};


export function MobileNavigation(props: Props) {
  const { site, user, onOpenNews } = props;
  return (
    <nav className="flex md:hidden items-center gap-6">
      <HamburgerMenu site={site} />
    </nav>
  );
}
