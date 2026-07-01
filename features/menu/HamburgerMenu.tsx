"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link"; // 💡 ページまるごとリロードを防ぐため Link に変更
import { MenuItem } from "@/types/siteMenu";
import { supabase } from "@/lib/supabase";

import { FaBars, FaXmark } from "react-icons/fa6";

type Props = {
  menu: MenuItem[];
  onOpenNews?: () => void;
};

export function HamburgerMenu(props: Props) {
  const { menu, onOpenNews } = props;
  const [isOpen, setIsOpen] = useState(false);

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
        className="text-gray-600 p-2 text-xl hover:text-gray-900 transition-colors"
      >
        <FaBars />
      </button>

      {/* 📱 メニュー本体（開いている時だけ表示） */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* 背景の黒透明 */}
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
                className="text-gray-500 p-2 text-xl hover:text-gray-900 transition-colors"
              >
                <FaXmark />
              </button>
            </div>

            {/* 階層メニュー一覧 */}
            <nav className="flex flex-col gap-5 overflow-y-auto">
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
                      // 💡 クリック可能なものは `cursor-pointer` をつけておくと親切です
                      className={`text-sm font-bold text-gray-800 py-1 ${
                        m.type === "news"
                          ? "cursor-pointer hover:text-blue-600"
                          : ""
                      }`}
                    >
                      {m.label}
                    </div>

                    {/* 第二階層（子メニュー：インデント付き） */}
                    {hasChildren && (
                      <div className="flex flex-col gap-1 border-l-2 border-slate-200 pl-3 ml-1">
                        {m.children!.map((c: MenuItem, j: number) => (
                          // 💡 Link コンポーネントに差し替え
                          <Link
                            key={`${m.label}-${i}-${c.label}-${j}`}
                            href={c.href || "#"}
                            onClick={() => {
                              setIsOpen(false);
                              if (c.type === "logout") {
                                handleLogout();
                              }
                            }}
                            className={`block py-1.5 text-sm transition-colors ${
                              c.type === "logout"
                                ? "text-red-600 font-medium hover:text-red-700"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            {c.label}
                          </Link>
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
