"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";

const SNS_ICON_MAP: any = {
  x: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  note: FaBlog,
};

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
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 text-gray-800 shadow-sm">
      <div className="flex items-center gap-2 border-b border-blue-200 font-bold text-gray-900">
        {/* TODO : ロゴ画像を入れるかもしれない */}
        {/* TODO : ロゴがあればここに画像を入れる */}
        <span className="text-blue-600 leading-none text-lg leading-tight md:text-2dxl ">
          [LOGO]
        </span>
        <span className="leading-none text-lg leading-tight md:text-2xl ">
          {site.meta.name}
        </span>
      </div>
      <nav ref={menuRef} className="hidden gap-4 text-sm md:flex">
        {site.navigation.menu?.map((m, i) => (
          <div key={i} className="relative">
            <button
              onClick={() => toggle(i)}
              className={`px-2 py-1 transition-colors ${
                openIndex === i
                  ? "border-b-2 border-blue-600 text-gray-900"
                  : "border-b-2 border-transparent text-gray-700 hover:text-gray-900"
              } leading-tight md:text-2xl`}
            >
              {m.label}
            </button>

            {m.children && m.children.length > 0 && openIndex === i && (
              <div className="absolute left-0 top-full w-[180px] rounded-md border border-slate-100 bg-slate-50 shadow-sm">
                {m.children.map((c, j) => (
                  <a
                    key={j}
                    href={c.href}
                    className="block px-4 py-2 whitespace-nowrap text-gray-700 hover:bg-white hover:text-gray-900"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {site.meta.sns?.map((s: any, i: number) => {
          const Icon = SNS_ICON_MAP[s.type];
          if (!Icon) return null;

          return (
            <a
              key={`${s.type}-${i}`}
              href={s.url}
              className="text-blue-600 hover:text-blue-500"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </nav>

      {/* スマホ用 */}
      <button className="text-gray-700 transition-colors hover:text-blue-600 md:hidden">
        ☰
      </button>
    </header>
  );
}
