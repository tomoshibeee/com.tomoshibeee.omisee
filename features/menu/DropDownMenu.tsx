"use client";

import { useRef } from "react";
import { MenuItem } from "@/types/siteMenu";

import { useState, useEffect } from "react";

export function DropDownMenu({ menu }: { menu: MenuItem[] }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="flex items-center gap-6">
      {menu.map((m: MenuItem, i: number) => (
        <div key={`${m.label}-${i}`} className="relative">
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
            <div className="absolute left-0 top-full mt-2 w-[180px] border border-slate-100 bg-white shadow-sm">
              {m.children.map((c: MenuItem, j: number) => (
                <a
                  key={`${m.label}-${i}-${c.label}-${j}`}
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
    </div>
  );
}
