import { Site } from "../models/site";
import { SiteNews } from "../models/siteNews";
import { randomUUID } from "crypto";

// 過去1年のランダム日付を生成
function getRandomDate(): string {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());

  return new Date(randomTime).toISOString();
}

const sites: Site[] = []; // TODO : DBからサイトデータを取得するように変更
const site1 = sites.find(s => s.slug === "tokyo-biblical-church")!;
const site2 = sites.find(s => s.slug === "organic-apple")!;
const site3 = sites.find(s => s.slug === "takajo-glasses-store")!;

export const seedDataSiteNews: SiteNews[] = [
  {
    id: randomUUID(),
    site_id: site1.id,
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
    site_id: site1.id,
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
    site_id: site1.id,
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
    site_id: site2.id,
    title: "新しい牧師の就任のお知らせ",
    content:
      "来月から新しい牧師が就任します。これからの教会活動にご期待ください。",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  {
    id: randomUUID(),
    site_id: site2.id,
    title: "夏のバーベキューイベントのお知らせ",
    content:
      "7月15日に夏のバーベキューイベントを開催します。友達や家族と一緒に楽しみましょう！",
    doc: null,
    youtube: null,
    published_at: getRandomDate(),
    event_date: getRandomDate(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  {
    id: randomUUID(),
    site_id: site2.id,
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
    site_id: site3.id,
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
];