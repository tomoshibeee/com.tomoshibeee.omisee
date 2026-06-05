import { randomUUID } from "crypto";
import { Site } from "../models/site";
import { dummySites } from "@/lib/data";

export function dummySiteModelData(): Site[] {
  const navigations = [
    [
      {
        label: "教会紹介",
        children: [
          { label: "牧師紹介", href: "#about" },
          { label: "教会のビジョン", href: "#vision" }
        ]
      },
      {
        label: "礼拝案内",
        children: [
          { label: "礼拝", href: "#service" },
          { label: "イベント情報", href: "#events" }
        ]
      },
      {
        label: "活動紹介",
        children: [
          { label: "ボランティア", href: "#volunteer" },
          { label: "地域交流", href: "#community" }
        ]
      },
      { label: "アクセス", href: "#access" },
      { label: "お問い合わせ", href: "#contact" }
    ]
    ,
    [
      { label: "店舗情報", href: "#about" },
      { label: "フェアトレードの歴史", href: "#story" },
      { label: "アクセス", href: "#access" },
      { label: "お問い合わせ", href: "#contact" }
    ],
    [
      {
        label: "店舗情報", href: "#about", "priority": 1, children: [
          { label: "当店のビジョン", href: "#vision", "priority": 1 },
          { label: "店長挨拶", href: "#greeting", "priority": 2 }
        ]
      },
      { label: "オンラインストア", href: "#service", "priority": 2 },
      { label: "アクセス", href: "#access", "priority": 3 },
      { label: "お問い合わせ", href: "#contact", "priority": 4 }
    ]

  ];

  return dummySites.map((s, i) => {
    return {
      id: randomUUID(),
      site_no: 1,
      navigation: navigations[i],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }) as Site[];
}
