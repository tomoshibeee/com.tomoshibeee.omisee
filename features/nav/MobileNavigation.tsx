import Link from "next/link";
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
      <nav className="flex h-full md:hidden items-center gap-4">
        <HamburgerMenu menu={menu} onOpenNews={onOpenNews} />
      </nav>
    );
  }

  const sortedSocialLinks = [...(site?.socialLinks ?? [])].sort(
    (a, b) => a.display_order - b.display_order,
  );
  const headerSocialLinks = sortedSocialLinks.slice(0, 2);

  return (
    // 💡 スマホ版も PC版と全く同じ美的なロジック（等間隔 ＋ 仕切り線）を適用！
    <nav className="flex h-full md:hidden items-center gap-3">
      {/* SNSリンクの塊 */}
      <div className="flex items-center gap-1">
        {headerSocialLinks.map((item) => (
          <LinkButtonHeader key={item.id} item={item} />
        ))}
      </div>

      {/* 📐 スマホにも仕切り線を入れることで、「外部SNS」と「自サイトの機能」が直感的に分離します */}
      <div className="h-4 w-px bg-slate-200" />

      {/* 共有ボタン */}
      <ShareButtonHeader />

      {/* ハンバーガーメニュー */}
      <HamburgerMenu
        menu={site.navigation?.menu ?? []}
        onOpenNews={onOpenNews}
      />
    </nav>
  );
}
