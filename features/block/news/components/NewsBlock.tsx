// TODO : DBからお知らせを取得するようにする
import news1 from "@/lib/data/news1.json";
import news2 from "@/lib/data/news2.json";
import { NewsBlockData } from "@/features/block";
import {
  FaArrowRight,
  FaCalendarDays,
  FaFileLines,
  FaYoutube,
} from "react-icons/fa6";

type NewsGroup = {
  id: string;
  items: NewsItem[];
};

// TODO : DBからお知らせを取得するようにする
export const NEWS_LIST : NewsGroup[] = [
  { id: "news1", items: news1 },
  { id: "news2", items: news2 },
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

const formatDate = (date: string) => {
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${year}.${month}.${day}`;
};

export default function NewsBlock({ source, limit }: NewsBlockData) {
  const data = NEWS_LIST.find((news) => news.id === source);

  if (data === undefined) {
    return (
      <div className="bg-white px-6 py-14">
        <div className="mx-auto max-w-5xl rounded-lg bg-red-50 p-6 text-red-700 shadow-sm">
          ニュースのデータが見つかりませんでした。
        </div>
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
    <div className="bg-slate-50 px-6 py-14 text-gray-800">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">News</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">お知らせ</h2>
          </div>
          <p className="max-w-xl leading-7 text-gray-600">
            礼拝、集会、教会からのお知らせを新しい順に掲載しています。
          </p>
        </div>

        <div className="grid gap-4">
          {displayedItems.map((item: NewsItem, index) => {
            const isLong = item.content && item.content.length > 60;

            return (
              <article
                key={index}
                className="grid gap-5 rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md md:grid-cols-[150px_1fr_auto]"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-blue-600 md:items-start">
                  <FaCalendarDays className="mt-0.5 shrink-0" />
                  <time dateTime={item.eventDate || item.publishedAt}>
                    {formatDate(item.eventDate || item.publishedAt)}
                  </time>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {item.content && (
                    <p
                      className={`mt-2 text-sm leading-7 text-gray-600 md:text-base ${
                        isLong ? "line-clamp-2" : ""
                      }`}
                    >
                      {item.content}
                    </p>
                  )}

                  {isLong && (
                    <a
                      href="#access"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      詳しくはこちら
                      <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </div>

                <div className="flex gap-2 md:justify-end">
                  {item.doc && (
                    <a
                      href={item.doc}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.title}の資料を開く`}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      <FaFileLines />
                    </a>
                  )}

                  {item.youtube && (
                    <a
                      href={item.youtube}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.title}の動画を開く`}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                      <FaYoutube />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
