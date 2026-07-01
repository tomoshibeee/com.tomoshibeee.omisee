import Link from "next/link"; // 💡 Linkを導入
import { HamburgerMenu } from "@/features/menu/HamburgerMenu";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";
import { SiteData } from "@/types/site";
import { UserData } from "@/types/user";
import { MenuItem } from "@/types/siteMenu";

type Props = {
  site?: SiteData;
  user?: UserData;
  onOpenNews?: () => void;
};

export function MobileNavigation(props: Props) {
  const { site, user, onOpenNews } = props;

  // 💡 siteが無い場合（ログイン前など）のフォールバック
  if (!site) {
    const menu: MenuItem[] = [
      { label: "お知らせ", type: "news" },
      {
        label: user?.name ?? "",
        icon: user?.avator,
        children: [{ label: "ログアウト", type: "logout" }],
      },
    ];
    return (
      // 💡 `hidden md:flex` から `flex md:hidden` へ修正してスマホで表示されるように
      <nav className="flex h-full md:hidden items-center gap-4">
        <HamburgerMenu menu={menu} onOpenNews={onOpenNews} />
      </nav>
    );
  }

  const sortedSocialLinks = [...(site?.socialLinks ?? [])].sort(
    (a, b) => a.display_order - b.display_order,
  );
  // スマホ画面の幅を考慮し、SNSリンクは1つか2つに絞る設計はGOODです！
  const headerSocialLinks = sortedSocialLinks.slice(0, 2);

  return (
    // 💡 ボタンが密集するので、gap-6 から gap-3〜4 程度に調整すると綺麗です
    <nav className="flex h-full md:hidden items-center gap-3">
      <div className="flex items-center gap-2">
        {headerSocialLinks.map((item) => (
          <LinkButtonHeader key={item.id} item={item} />
        ))}
      </div>
      
      <div className="pl-1">
        <ShareButtonHeader />
      </div>
      
      <HamburgerMenu menu={site.navigation?.menu ?? []} onOpenNews={onOpenNews} />
    </nav>
  );
}