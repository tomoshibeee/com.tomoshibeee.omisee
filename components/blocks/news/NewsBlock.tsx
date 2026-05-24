import { NewsData } from "@/types/block";

import { FaFileAlt, FaYoutube } from "react-icons/fa";

export default function NewsBlock({ items }: NewsData) {
  return (
    <div className="m-4 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">お知らせ</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-2 md:gap-4 border-b pb-4"
            >
              {/* 日付 */}
              <span className="text-gray-600 text-sm md:text-base">
                {item.date}
              </span>
              {/* タイトル */}
              <span className="font-semibold">{item.title}</span>
              {/* ボタン */}
              <div className="flex gap-2 justify-end mt-1 md:mt-0">
                <button className="flex items-center justify-center w-8 h-8 rounded bg-blue-500 text-white hover:bg-blue-600">
                  <FaFileAlt />
                </button>

                <button className="flex items-center justify-center w-8 h-8 rounded bg-red-500 text-white hover:bg-red-600">
                  <FaYoutube />
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
