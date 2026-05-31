import { News } from "../models/news";

// 過去1年のランダム日付を生成
function getRandomDate(): string {
  const now = new Date();
  const past = new Date();
  past.setFullYear(now.getFullYear() - 1);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());

  return new Date(randomTime).toISOString();
}

export function dummyNewsData(): News[] {
  return [
    {
      title: "システムメンテナンスのお知らせ",
      published_at: getRandomDate(),
    },
    {
      title: "Apple Walletから名刺がわりになる「Apple Contact Card」発表",
      published_at: getRandomDate(),
    },
    {
      title: "料金改定のお知らせ",
      published_at: getRandomDate(),
    },
    {
      title: "新機能リリースのお知らせ",
      published_at: getRandomDate(),
    },
    {
      title: "年末年始の営業について",
      published_at: getRandomDate(),
    },
    {
      title: "夏季休暇について",
      published_at: getRandomDate(),
    },
    {
      title: "春季イベントのお知らせ",
      published_at: getRandomDate(),
    },
    {
      title: "秋季セールのお知らせ",
      published_at: getRandomDate(),
    },
    {
      title: "冬季特別キャンペーン",
      published_at: getRandomDate(),
    },
    {
      title: "春季特別割引",
      published_at: getRandomDate(),
    },
  ];
}
