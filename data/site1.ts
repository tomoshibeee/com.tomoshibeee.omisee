import { SiteData } from "@/types/site";

export const site1: SiteData = {
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
        label: "活動紹介",
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
              source: "news1",
              limit: 3,
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
                {
                  id: "service1",
                  title: "日曜礼拝",
                  time: "日曜10:00〜",
                  location: "本堂",
                  comment: "カジュアルな服装でお越しいただけます",
                  link: "#news",
                },
                {
                  id: "service2",
                  title: "聖書勉強会",
                  time: "水曜10:00〜",
                  location: "教室",
                  comment: "どなたでも参加できます",
                }
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
        blocks: [
          {
            id: "contact-main",
            type: "contact",
            data: {
              description:
                "初めての方、礼拝や集会について知りたい方も、お気軽にご連絡ください。",
            },
          },
        ],
      },
    ],
  },
};
