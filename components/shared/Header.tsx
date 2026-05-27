"use client";
import { MenuItem } from "@/types/menu";
import { SNSItem } from "@/types/sns";
import { useState, useRef, useEffect } from "react";
import LinkButton from "@/components/buttons/LinkButton";

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
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 pb-0 text-gray-800 font-semibold shadow-sm">
      {" "}
      <div className="flex items-center gap-2 text-gray-900">
        {/* TODO : ロゴ画像を入れるかもしれない */}
        {/* TODO : ロゴがあればここに画像を入れる */}
        <span className="text-blue-600 leading-none text-lg leading-tight md:text-2xl ">
          [LG]
        </span>
        <span className="leading-none text-lg leading-tight md:text-2xl ">
          {site.meta.name}
        </span>
      </div>
      <nav ref={menuRef} className="hidden gap-4 text-sm items-center md:flex">
        {site.navigation.menu?.map((m: MenuItem, i: number) => (
          <div key={i} className="relative">
            <button
              onClick={() => toggle(i)}
              className={`my-0 py-4 height-full px-2 py-1 transition-colors ${
                openIndex === i
                  ? "border-b-0 border-blue-600 text-gray-900"
                  : "border-b-0 border-transparent text-gray-700 hover:bg-slate-100 hover:text-gray-900 transition-colors"
              } leading-tight text-lg md:text-lg m-0`}
            >
              {m.label}
            </button>

            {m.children && m.children.length > 0 && openIndex === i && (
              <div className="absolute left-0 top-full w-[180px] border border-slate-100 bg-slate-50 shadow-sm">
                {m.children.map((c: MenuItem, j: number) => (
                  <a
                    key={j}
                    href={c.href}
                    className="block px-4 py-4 whitespace-nowrap text-gray-700 hover:bg-white hover:text-gray-900 leading-tight text-md md:text-md"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* 区切り線を入れる */}

        {site.meta.sns?.map((item: SNSItem, i: number) => {
          return <LinkButton key={`${item.type}-${i}`} item={item} />;
        })}

        {/* Share */}
        <button className="ml-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-gray-700 hover:bg-slate-200">
          Share
        </button>
      </nav>
      {/* スマホ用 */}
      <button className="text-gray-700 transition-colors hover:text-blue-600 md:hidden">
        ☰
      </button>
    </header>
  );
}
