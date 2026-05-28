"use client";
import { MenuItem } from "@/types/menu";
import { SNSItem } from "@/types/sns";
import { useState, useRef, useEffect } from "react";
import { LinkButtonHeader } from "@/components/buttons/LinkButton";
import { ShareButtonHeader } from "@/components/buttons/ShareButton";

export default function Header({ site }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const sortedSNSItems = [...site.meta.sns].sort(
    (a, b) => a.priority - b.priority,
  );
  const headerSNSItems = sortedSNSItems.slice(0, 2);

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-slate-100 bg-white px-4 text-sm text-gray-800 tracking-tight shadow-sm">
      {/* ロゴ */}
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-base font-semibold">[LG]</span>
        <span className="text-base font-semibold text-gray-900">
          {site.meta.name}
        </span>
      </div>

      {/* ナビ */}
      <nav ref={menuRef} className="hidden md:flex items-center gap-6">
        {site.navigation.menu?.map((m: MenuItem, i: number) => (
          <div key={i} className="relative">
            <button
              onClick={() => toggle(i)}
              className={`px-2 py-2 text-sm transition-colors ${
                openIndex === i
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900 hover:bg-slate-50"
              }`}
            >
              {m.label}
            </button>

            {m.children && m.children.length > 0 && openIndex === i && (
              <div className="absolute left-0 top-full mt-2 w-[180px] rounded-md border border-slate-100 bg-white shadow-sm">
                {m.children.map((c: MenuItem, j: number) => (
                  <a
                    key={j}
                    href={c.href}
                    className="block px-4 py-2 text-sm text-gray-600 transition hover:bg-slate-50 hover:text-gray-900"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

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

      {/* モバイル */}
      <button className="text-gray-600 transition hover:text-gray-900 md:hidden">
        ☰
      </button>
    </header>
  );
}
