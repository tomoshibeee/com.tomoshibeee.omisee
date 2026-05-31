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

export const seedDataSiteNews: SiteNews[] = [
  {
    id: randomUUID(),
    site_id: "uuid-site-1",
    title: "教会改装のお知らせ",
    content:
      "来月から教会の改装工事が始まります。期間中は一部エリアが利用できなくなりますのでご了承ください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-1",
    title: "新しい礼拝時間のお知らせ",
    content:
      "来週から新しい礼拝時間が始まります。日曜日の午前10時と午後2時の2回になります。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-1",
    title: "クリスマスイベントのお知らせ",
    content:
      "12月24日にクリスマスイベントを開催します。家族で楽しめる内容となっていますので、ぜひご参加ください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-2",
    title: "新しい店長の就任のお知らせ",
    content:
      "来月から新しい店長が就任します。これからのお店の活動にご期待ください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-2",
    title: "クラフトイベントのお知らせ",
    content:
      "7月15日にクラフトイベントを開催します。手芸を一緒に楽しみましょう！",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-2",
    title: "秋の収穫祭のお知らせ",
    content:
      "10月20日に秋の収穫祭を開催します。地元の農産物を使った料理や楽しいアクティビティが盛りだくさんです。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-3",
    title: "メガネフェアのお知らせ",
    content:
      "来月からメガネフェアを開催します。最新のフレームやレンズが揃っていますので、ぜひお越しください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-3",
    title: "サングラスセールのお知らせ",
    content:
      "夏に向けてサングラスのセールを開催します。人気のブランドも多数取り揃えていますので、この機会をお見逃しなく！",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    site_id: "uuid-site-3",
    title: "メガネクリエーター橋本景さんの個展のお知らせ",
    content:
      "7月15日に橋本景さんの個展を開催します。最新のデザインが展示されますので、ぜひお越しください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
