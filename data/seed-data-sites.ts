import { randomUUID } from "crypto";
import { Site } from "../models/site";

export function dummySiteData(): Site[] {
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

  return [
    {
      id: randomUUID(),
      name: "東京チャーチ",
      description: "東京チャーチの公式サイト",
      navigation: navigations[0],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      name: "オーガニックアップル",
      description: "オーガニックアップルの公式サイト",
      navigation: navigations[1],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      name: "メガネの鷹匠",
      description: "メガネの鷹匠の公式サイト",
      navigation: navigations[2],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ] as Site[];
}
