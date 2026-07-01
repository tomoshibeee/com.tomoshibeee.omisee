import { DropDownMenu } from "../menu/DropDownMenu";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";
import { SiteData } from "@/types/site";
import { MenuItem } from "@/types/siteMenu";
import { UserData } from "@/types/user";

type Props = {
  site?: SiteData;
  user?: UserData;
  onOpenNews?: () => void;
};

export function PrimaryNavigation(props: Props) {
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
      <nav className="hidden h-full md:flex items-center gap-6">
        <DropDownMenu menu={menu} onOpenNews={onOpenNews} />
      </nav>
    );
  }

  const sortedSocialLinks = [...(site.socialLinks ?? [])].sort(
    (a, b) => a.display_order - b.display_order,
  );
  const headerSocialLinks = sortedSocialLinks.slice(0, 2);

  return (
    // 💡 gap-4 で全体を程よい間隔に。無駄な pl-2 などを徹底排除して等間隔化！
    <nav className="hidden h-full md:flex items-center gap-4">
      <DropDownMenu menu={site.navigation?.menu ?? []} />

      {/* 📐 仕切り線をほんの少しマイルドなslate-200に */}
      <div className="h-4 w-px bg-slate-200" />

      <div className="flex items-center gap-1.5">
        {headerSocialLinks.map((item) => (
          <LinkButtonHeader key={item.id} item={item} />
        ))}
      </div>

      <div className="h-4 w-px bg-slate-200" />

      <ShareButtonHeader />
    </nav>
  );
}
