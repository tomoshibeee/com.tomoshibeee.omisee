import { Logo } from "@/components/logos/Logo";
import { PrimaryNavigation } from "@/features/nav/PrimaryNavigation";
import { MobileNavigation } from "@/features/nav/MobileNavigation";
import { SiteData } from "@/types/site";

export default function Header({ site }: { site: SiteData }) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-100 bg-white px-4 text-sm text-gray-800 tracking-tight shadow-sm">
      <Logo site={site} />
      {/* <PrimaryNavigation site={site} />
      <MobileNavigation site={site} /> */}
    </header>
  );
}
