"use client";
import { useEffect, useState } from "react";

export function NewsDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("🚦🚦🚦open🚦🚦🚦", open);
  });

  const drawerClass = open
    ? "fixed bottom-0 left-0 w-full h-40 bg-slate-200 shadow-2xl transform transition-transform duration-300 z-50 translate-y-0 block"
    : "fixed bottom-0 left-0 w-full h-40 bg-slate-200 shadow-2xl transform transition-transform duration-300 z-50 translate-y-full block";

  return (
    <>
      {/* 操作ボタン */}
      <div className="fixed top-4 left-4 z-[60] flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => {
            setOpen(true);
            console.log("開くがクリックされました");
          }}
        >
          開く
        </button>
      </div>

      {/* ドロワー本体 */}
      <div className={drawerClass}>
        <div className="p-4 font-bold text-black">
          ここにお知らせ（開きました！）
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setOpen(false);
            console.log("閉じるがクリックされました");
          }}
        >
          閉じる
        </button>
      </div>
    </>
  );
}