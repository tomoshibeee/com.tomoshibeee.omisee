import { Labrada } from "next/font/google";

export const site1 = {
  meta: {
    slug: "tokyo-church",
    name: "東京教会（デモ）",
    email: "info@tokyo-church.com",
    address: "東京都新宿区1-2-3",
    access: "JR新宿駅から徒歩5分",
    message: "unused",
    sns: [
      { type: "x", url: "#" },
      { type: "facebook", url: "#" },
      { type: "instagram", url: "#" },
      { type: "youtube", url: "#" },
      { type: "note", url: "#" },
    ],
  },
  navigation: {
    menu: [
      {
        label: "教会紹介",
        children: [
          { label: "牧師紹介", href: "#about" },
          { label: "教会のビジョン", href: "#vision" },
        ],
      },
      {
        label: "礼拝案内",
        children: [
          { label: "礼拝", href: "#service" },
          { label: "イベント情報", href: "#events" },
        ],
      },
      {
        label:"活動紹介",
        children: [
          { label: "ボランティア", href: "#volunteer" },
          { label: "地域交流", href: "#community" },
        ],
      },
      { label: "アクセス", href: "#access" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
  layout: {
    template: "template1",
    sections: [
      {
        id: "hero",
        type: "hero",
        blocks: [
          {
            id: "hero-simple",
            type: "hero",
            variant: "single",
            data: {
              title: "東京の下町に佇む小さな教会",
              images: [
                { url: "https://picsum.photos/1200/600", alt: "Hero Image" },
              ],
            },
          },
          {
            id: "contact-cta",
            type: "cta",
            data: {
              buttons: [
                { label: "礼拝動画", href: "#info" },
                { label: "お問い合わせ", href: "#contact" },
              ],
            },
          },
        ],
      },
      {
        id: "news",
        type: "news",
        blocks: [
          {
            id: "news-main",
            type: "news",
            data: {
              items: [
                { title: "クリスマス礼拝のお知らせ", date: "2024-12-24" },
                { title: "新年礼拝のお知らせ", date: "2025-01-01" },
                { title: "復活祭礼拝のお知らせ", date: "2025-04-20" },
              ],
            },
          },
        ],
      },
      {
        id: "about",
        type: "about",
        blocks: [
          {
            id: "greeting-main",
            type: "greeting",
            data: {
              name: "東京太郎",
              role: "主任牧師",
              image: "https://i.pravatar.cc/150",
              bio: "東京生まれ。神学校卒業後、国内外の教会で牧師として奉仕。2020年より現職。",
              message:
                "東京教会の主任牧師を務めています。皆さんとお会いできるのを楽しみにしています！",
            },
          },
        ],
      },
      {
        id: "service",
        type: "service",
        blocks: [
          {
            id: "service-info1",
            type: "service",
            data: {
              items: [
                { icon: "map", text: "日曜礼拝 日曜10:00〜" },
                { icon: "map", text: "聖書勉強会 水曜10:00〜" },
                { icon: "map", text: "青年委員会 木曜10:00〜" },
              ],
            },
          },
        ],
      },
      {
        id: "access",
        type: "access",
        blocks: [
          {
            id: "access-block",
            type: "access",
            data: {},
          },
        ],
      },
      {
        id: "contact",
        type: "contact",
        blocks: [],
      },
    ],
  },
};
