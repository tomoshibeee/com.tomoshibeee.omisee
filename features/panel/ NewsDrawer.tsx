"use client";
import { useEffect, useState } from "react";

export function NewsDrawer() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("🚦🚦🚦open🚦🚦🚦", open);
  });

  return (
    <>
      {/* ボタンが隠れないように、画面上部に固定して z-index を高くします */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setOpen(true);
            console.log("開くがクリックされました");
          }}
        >
          開く
        </button>
      </div>

      {/* ドロワー本体。z-40 でボタンより下に配置 */}
      <div
        // className={`fixed bottom-0 left-0 w-full h-40 bg-slate-200 shadow-2xl z-40
        // transform transition-transform duration-300
        // ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "160px",
          backgroundColor: "#f3f4f6", // 少しグレーにしています
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          transform: open ? "translateY(0)" : "translateY(100%)",
        }}
      >
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
