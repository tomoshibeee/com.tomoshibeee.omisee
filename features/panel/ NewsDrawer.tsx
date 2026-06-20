"use client";
import { useEffect, useState } from "react";

import { NewsItem } from "@/features/block/news/types";
import { NewsCard } from "@/components/news/NewsCard";

type Props = {
  newsItems: NewsItem[];
};

export function NewsDrawer(props: Props) {
  const { newsItems } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log("🚦🚦🚦open🚦🚦🚦", open);
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
          }}
        >
          開く
        </button>
      </div>

      {/* ドロワー本体 */}
      <div className={drawerClass}>
        {/* News */}
        <section className="p-4 font-bold text-black">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>

          <div className="space-y-3">
            {newsItems.map((newsItem, i) => (
              <NewsCard key={newsItem.id ?? `global_news_${i}`} {...newsItem} />
            ))}
          </div>
        </section>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setOpen(false);
          }}
        >
          閉じる
        </button>
      </div>
    </>
  );
}
