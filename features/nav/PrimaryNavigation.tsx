import { SiteSocialLink } from "@/models/siteSocialLink";
import { DropDownMenu } from "../menu/DropDownMenu";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";
import { SiteData } from "@/types/site";
import { MenuItem } from "@/types/siteMenu";

type Props = {
  site?: SiteData;
};

export function PrimaryNavigation(props: Props) {
  const { site } = props;
  if (!site) {
    const menu: MenuItem[] = [
      { label: "ユーザー情報", href: "", children: [] },
    ];
    return (
      <nav className="hidden md:flex items-center gap-6">
        <DropDownMenu menu={menu} />
      </nav>
    );
  }

  const sortedSocialLinks = site?.socialLinks?.sort(
    (a, b) => a.display_order - b.display_order,
  ) as SiteSocialLink[];
  const headerSocialLinks = sortedSocialLinks.slice(0, 2);

  // console.log("🚦[Debug] PrimaryNavigation received site:", site);
  // console.log("🚦[Debug] PrimaryNavigation site.navigation:", site.navigation);

  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropDownMenu menu={site.navigation?.menu ?? []} />

      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="flex items-center gap-2 pl-2">
        {headerSocialLinks.map((item: SiteSocialLink, i: number) => (
          <LinkButtonHeader key={`${item.type}-${i}`} item={item} />
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="pl-2">
        <ShareButtonHeader />
      </div>
    </nav>
  );
}
