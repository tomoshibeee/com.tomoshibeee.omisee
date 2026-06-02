import { SNSItem } from "@/types/socialLink";
import { DropDownMenu } from "../menu/DropDownMenu";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";
import { SiteData } from "@/types/site";
import { sns } from "@/lib/data";

export function PrimaryNavigation({ site }: { site: SiteData }) {
  // const sortedSNSItems = sns[site.meta.sns - 1];
  // const headerSNSItems = sortedSNSItems.slice(0, 2);

  console.log("🚦[Debug] PrimaryNavigation received site:", site);
  console.log("🚦[Debug] PrimaryNavigation site.navigation:", site.navigation);

  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropDownMenu menu={site.navigation?.menu || []} />

      {/*
      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="flex items-center gap-2 pl-2">
        {headerSNSItems.map((item: SNSItem, i: number) => (
          <LinkButtonHeader key={`${item.type}-${i}`} item={item} />
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-slate-300" />

      <div className="pl-2">
        <ShareButtonHeader />
      </div>
      */}
    </nav>
  );
}
