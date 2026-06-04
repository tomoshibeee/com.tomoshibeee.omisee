import { randomUUID } from "crypto";

import news1 from "@/lib/data/site1/news.json";
import news2 from "@/lib/data/site2/news.json";
import news3 from "@/lib/data/site3/news.json";
const newsJson = [news1, news2, news3];

// 過去1年のランダム日付を生成
function getRandomDate(): string {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());

  return new Date(randomTime).toISOString();
}

export function dummySiteNewsModelData(siteIds: string[]) {
  const now = new Date().toISOString();

  return newsJson.flatMap((siteNews, i) => {
    return siteNews.map((n, j) => {
      return {
        id: randomUUID(),
        site_id: siteIds[i],
        title: n.title,
        content:n.content,
        doc: n.doc,
        youtube: n.youtube,
        published_at: getRandomDate(),
        event_date: getRandomDate(),
        created_at: now,
        updated_at: now,
      }

    })
  });
}