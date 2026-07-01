"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { MenuItem } from "@/types/siteMenu";
import { SiteData } from "@/types/site";
import { UserData } from "@/types/user";
import { supabase } from "@/lib/supabase";

import { FaBars, FaXmark } from "react-icons/fa6";

type Props = {
  site?: SiteData;
  user?: UserData;
  onOpenNews?: () => void;
};

export function HamburgerMenu(props: Props) {
  const { site, user, onOpenNews } = props;
  const [isOpen, setIsOpen] = useState(false);

  // メニューの組み立て
  const menu: MenuItem[] = site?.navigation?.menu ?? [
    { label: "お知らせ", type: "news" },
    {
      label: user?.name ?? "マイページ",
      children: [{ label: "ログアウト", type: "logout" }],
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <>
      {/* 🍔 トリガーとなる普通のハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="メニューを開く"
        className="text-gray-600 p-2 text-xl hover:text-gray-900"
      >
        <FaBars />
      </button>

      {/* 📱 メニュー本体（開いている時だけ表示） */}
      {isOpen && (
        // 固定配置（fixed）で画面全体を覆う
        <div className="fixed inset-0 z-50 flex">
          {/* 背景の黒透明（ここをタップしても閉じられる） */}
          <div
            className="fixed inset-0 bg-black/40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* 右側から出てくるグレーベースのメニューボード */}
          <div className="relative ml-auto flex h-full w-[280px] flex-col bg-slate-50 p-6 shadow-xl animate-in slide-in-from-right duration-200">
            {/* 閉じるボタン */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="メニューを閉じる"
                className="text-gray-500 p-2 text-xl hover:text-gray-900"
              >
                <FaXmark />
              </button>
            </div>

            {/* 階層メニュー一覧 */}
            <nav className="flex flex-col gap-4 overflow-y-auto">
              {menu.map((m: MenuItem, i: number) => {
                const hasChildren = m.children && m.children.length > 0;

                return (
                  <div key={`${i}-${m.label}`} className="flex flex-col gap-2">
                    {/* 第一階層（親メニュー） */}
                    <div
                      onClick={() => {
                        if (m.type === "news" && onOpenNews) {
                          onOpenNews();
                          setIsOpen(false);
                        }
                      }}
                      className="text-sm font-bold text-gray-800 py-1"
                    >
                      {m.label}
                    </div>

                    {/* 第二階層（子メニュー：インデント付き） */}
                    {hasChildren && (
                      <div className="flex flex-col gap-1 border-l-2 border-slate-200 pl-3 ml-1">
                        {m.children!.map((c: MenuItem, j: number) => (
                          <a
                            key={`${m.label}-${i}-${c.label}-${j}`}
                            href={c.href}
                            onClick={() => {
                              setIsOpen(false);
                              if (c.type === "logout") {
                                handleLogout();
                              }
                            }}
                            className={`block py-1.5 text-sm transition ${
                              c.type === "logout"
                                ? "text-red-600 font-medium"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
