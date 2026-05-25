import { news1 } from "@/data/news1";
import { news2 } from "@/data/news2";

type NewsGroup = {
  id: string;
  items: NewsItem[];
};

// TODO : DBからお知らせを取得するようにする
export const NEWS_LIST : NewsGroup[] = [
  { id: "news1", items: news1 },
  { id: "news2", items: news2 }
  // { id: "news3", items: news3 },
];

type NewsItem = {
  title: string;
  content?: string;
  eventDate: string;
  publishedAt: string;
  doc?: string;
  youtube?: string;
};

import { NewsBlockData } from "@/types/block";

import { FaFileAlt, FaYoutube } from "react-icons/fa";

export default function NewsBlock({ source, limit }: NewsBlockData) {
  const data = NEWS_LIST.find((news) => news.id === source);

  if (data === undefined) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded">
        ニュースのデータが見つかりませんでした。
      </div>
    );
  } 

  const now = new Date();

  const sortedItems = [...data.items]
    .filter((item) => new Date(item.publishedAt) <= now)
    .sort(
      (a, b) =>
        new Date(b.eventDate ?? b.publishedAt).getTime() -
        new Date(a.eventDate ?? a.publishedAt).getTime(),
    );

  const displayedItems =
    limit !== undefined ? sortedItems.slice(0, limit) : sortedItems;
  return (
    <div className="m-4 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">お知らせ</h2>
        <div className="space-y-4">
          {displayedItems.map((item: NewsItem, index) => {
            const isLong = item.content && item.content.length > 60;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-2 md:gap-4 border-b pb-4"
              >
                {/* 日付 */}
                <span className="text-gray-600 text-sm md:text-base">
                  {item.eventDate &&
                    new Date(item.eventDate).toLocaleDateString("ja-JP")}
                </span>

                {/* メイン（タイトル＋本文） */}
                <div>
                  <span className="font-semibold block">{item.title}</span>

                  {item.content && (
                    <p
                      className={`text-gray-700 text-sm md:text-base mt-1 ${isLong ? "line-clamp-2" : ""}`}
                    >
                      {item.content}
                    </p>
                  )}

                  {isLong && (
                    <a
                      href="#access"
                      className={`block text-right text-blue-500 text-sm underline mt-1`}
                    >
                      詳しくはこちら →
                    </a>
                  )}
                </div>

                {/* ボタン */}
                <div className="flex gap-2 justify-end items-start">
                  {item.doc && (
                    <a
                      href={item.doc}
                      target="_blank"
                      className="flex items-center justify-center w-8 h-8 rounded bg-blue-500 text-white hover:bg-blue-600"
                    >
                      <FaFileAlt />
                    </a>
                  )}

                  {item.youtube && (
                    <a
                      href={item.youtube}
                      target="_blank"
                      className="flex items-center justify-center w-8 h-8 rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      <FaYoutube />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
