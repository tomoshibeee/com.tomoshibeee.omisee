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

export function PrimaryNavigation( props: Props) {
  const {site, user, onOpenNews} = props;
  if (!site) {
    const menu: MenuItem[] = [
      { label: "お知らせ", href: "", icon: "" }, // TODO: 全体のお知らせを表示
      { label: user?.name ?? "", href: "", icon: user?.avator, children: [] },
    ];

    return (
      <nav className="hidden md:flex items-center gap-6">
        <DropDownMenu menu={menu} onOpenNews={onOpenNews}/>
      </nav>
    );
  }

  const sortedSocialLinks = [...(site.socialLinks ?? [])].sort(
    (a, b) => a.display_order - b.display_order,
  );

  const headerSocialLinks = sortedSocialLinks.slice(0, 2);

  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropDownMenu menu={site.navigation?.menu ?? []} />

      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="flex items-center gap-2 pl-2">
        {headerSocialLinks.map((item) => (
          <LinkButtonHeader key={item.id} item={item} />
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="pl-2">
        <ShareButtonHeader />
      </div>
    </nav>
  );
}
