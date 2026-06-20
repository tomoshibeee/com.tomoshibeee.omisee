"use client";
import { NewsItem } from "@/features/block/news/types";
import { NewsCard } from "@/components/news/NewsCard";

type Props = {
  newsItems: NewsItem[];
  open: boolean;
  onClose: () => void;
};

export function NewsDrawer({ newsItems, open, onClose }: Props) {
  const baseDrawerClass = "fixed bottom-0 left-0 w-full max-h-[80vh] overflow-y-auto bg-slate-100 shadow-2xl transform transition-transform duration-300 z-50  block pb-10";
  const drawerClass = open
    ? `${baseDrawerClass} translate-y-0`
    : `${baseDrawerClass} translate-y-full`;

    const baseOverlayClass = "fixed inset-0 bg-black/40 z-40";
  const overlayClass = open
    ? `${baseOverlayClass} transition-opacity duration-300 opacity-100 block`
    : `${baseOverlayClass} transition-opacity duration-300 opacity-0 hidden`;

  return (
    <>
      <div className={overlayClass} onClick={onClose} />

      <div className={drawerClass}>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow absolute top-4 right-4 z-50 cursor-pointer"
          onClick={onClose}
        >
          閉じる
        </button>

        <section className="p-6 font-bold text-black max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6 border-b pb-2 text-gray-800">Latest News</h2>
          
          <div className="space-y-4">
            {newsItems.map((newsItem, i) => (
              <NewsCard key={newsItem.id ?? `global_news_${i}`} {...newsItem} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}