import { randomUUID } from "crypto";

import { dummySiteNews } from "@/lib/data";

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

  return dummySiteNews.flatMap((siteNews, i) => {
    return siteNews.map((n, j) => {
      return {
        id: randomUUID(),
        site_id: siteIds[i],
        title: n.title,
        content: n.content,
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