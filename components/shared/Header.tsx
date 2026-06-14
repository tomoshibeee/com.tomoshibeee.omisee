import { Logo } from "@/components/logos/Logo";
import { LayoutVariant } from "@/types/layout";
import { PrimaryNavigation } from "@/features/nav/PrimaryNavigation";
import { MobileNavigation } from "@/features/nav/MobileNavigation";
import { SiteData } from "@/types/site";

type HeaderProps = {
  variant?: LayoutVariant;
  site?: SiteData;
};

export default function Header({ variant = "site", site }: HeaderProps) {
  const baseClass =
    "sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-100 bg-white px-4 text-sm text-gray-800 tracking-tight shadow-sm";

  if (variant === "dashboard") {
    return <header className={baseClass}>Dashboard</header>;
  }

  return (
    <header className={baseClass}>
      {site && (
        <>
          <Logo site={site} />
          <PrimaryNavigation site={site} />
          <MobileNavigation site={site} />
        </>
      )}
    </header>
  );
}
