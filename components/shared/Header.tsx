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
  const pathname = usePathname();

  const isTop = pathname === "/";
  const isDashboard = pathname?.startsWith("/dashboard");

  const baseClass =
    "sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-100 bg-white px-4 text-sm text-gray-800 tracking-tight shadow-sm";

  if (isTop) {
    return (
      <header className={baseClass}>
        <Logo />
      </header>
    );
  }
  if (isDashboard) {
    return (
      <header className={baseClass}>
        <Logo />
        <PrimaryNavigation />
      </header>
    );
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
