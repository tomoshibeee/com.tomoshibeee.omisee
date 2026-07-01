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
    // 💡 PC版と同じく、ここも h-full を付与しておくと位置がヘッダー下にぴったり揃います
    <nav className="flex h-full md:hidden items-center gap-6">
      <HamburgerMenu site={site} user={user} onOpenNews={onOpenNews} />
    </nav>
  );
}