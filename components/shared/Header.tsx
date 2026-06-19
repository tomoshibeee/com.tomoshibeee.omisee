"use client";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logos/Logo";
import { PrimaryNavigation } from "@/features/nav/PrimaryNavigation";
import { MobileNavigation } from "@/features/nav/MobileNavigation";
import { SiteData } from "@/types/site";

type Props = {
  site?: SiteData;
};

export default function Header({ site }: Props) {
  const baseClass =
    "w-full border-t border-slate-200 bg-slate-950 px-6 pt-14 text-sm text-slate-300";

  const pathname = usePathname();

  const isTop = pathname === "/";
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isTop) {
    return <header className={baseClass}>Top Page Header</header>;
  }
  if (isDashboard) {
    return <header>Dashboard Header</header>;
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
