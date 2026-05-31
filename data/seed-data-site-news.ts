import { randomUUID } from "crypto";
import { SiteNews } from "../models/siteNews";

// 過去1年のランダム日付を生成
function getRandomDate(): string {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());

  return new Date(randomTime).toISOString();
}

export function dummySiteNewsData(siteIds: string[]) {
  const now = new Date().toISOString();

  return siteIds.flatMap(siteId =>
    Array.from({ length: 3 }).map((_, i) => ({
      id: randomUUID(),
      site_id: siteId,
      title: `site-${siteId}news-${i + 1}`,
      content:
        "これはサイトニュースのサンプルコンテンツです。サイトIDに紐づくニュースの内容をここに記載します。",
      doc: null,
      youtube: null,
      published_at: getRandomDate(),
      event_date: getRandomDate(),
      created_at: now,
      updated_at: now,
    }))
  );
}