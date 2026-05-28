import { SNSItem } from "@/types/sns";
import { DropDownMenu } from "../menu/DropDownMenu";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";
import { SiteData } from "@/types/site";
export function PrimaryNavigation({ site }: { site: SiteData }) {
  const sortedSNSItems = [...site.meta.sns].sort(
    (a, b) => a.priority - b.priority,
  );
  const headerSNSItems = sortedSNSItems.slice(0, 2);

  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropDownMenu site={site} />
      <div className="mx-2 h-5 w-px bg-slate-300" />

      {/* SNS */}
      <div className="flex items-center gap-2 pl-2">
        {headerSNSItems.map((item: SNSItem, i: number) => (
          <LinkButtonHeader key={`${item.type}-${i}`} item={item} />
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-slate-300" />

      {/* Share */}
      <div className="pl-2">
        <ShareButtonHeader />
      </div>
    </nav>
  );
}
