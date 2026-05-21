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
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 border-b bg-white border-blue-200">
      <div className="font-bold">{site.meta.name}</div>
      <nav ref={menuRef} className="hidden md:flex gap-4">
        {site.navigation.menu?.map(
          (
            m: {
              href?: string;
              label: string;
              children?: { href: string; label: string }[];
            },
            i: number,
          ) => (
            <div key={i} className="relative">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="px-2 py-1"
              >
                {m.label}
              </button>

              {m.children && m.children.length > 0 && openIndex === i && (
                <div className="absolute top-full left-0 pt-4 bg-white shadow">
                  {m.children.map((c, j) => (
                    <a
                      key={j}
                      href={c.href}
                      className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100 border-b last:border-0"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ),
        )}

        {site.meta.sns?.map((s: any, i: number) => {
          const Icon = SNS_ICON_MAP[s.type];
          if (!Icon) return null;

          return (
            <a key={`${s.type}-${i}`} href={s.url}>
              <Icon size={18} />
            </a>
          );
        })}
      </nav>{" "}
      {/* スマホ用 */}
      <button className="md:hidden">☰</button>
    </header>
  );
}
