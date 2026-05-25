import { ServiceBlockData } from "@/types/block";

import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const getGridCols = (count: number) => {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1 md:grid-cols-3";
};

export default function ServiceBlock({ items }: ServiceBlockData) {
  const gridCols = getGridCols(items.length);
  return (
    <div className={`p-10 grid ${gridCols} gap-6`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-6 shadow-md hover:shadow-md transition"
        >
          <h3 className="font-semibold mb-3">{item.title}</h3>

          {/* 時間 */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaClock className="text-gray-400" />
            <span>{item.time}</span>
          </div>

          {/* 場所 */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>{item.location}</span>
          </div>

          {/* コメント */}
          {item.comment && (
            <p className="mt-4 text-sm text-gray-700">{item.comment}</p>
          )}

          {/* 任意リンク（例：アクセス） */}
          {item.link && (
            <a
              href={item.link}
              className="inline-block mt-3 text-sm text-blue-500 hover:underline"
            >
              詳しく見る →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}