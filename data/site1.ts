export const site1 = {
  meta: {
    slug: "tokyo-church",
    name: "東京教会（デモ）",
    email: "info@tokyo-church.com",
    address: "東京都新宿区1-2-3",
    access: "JR新宿駅から徒歩5分",
    message: "ようこそ！",
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
      { label: "教会について", href: "#about" },
      { label: "礼拝", href: "#service" },
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
              title: "東京教会",
              message: "ようこそ！",
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
                { label: "お問い合わせ", href: "#contact" }
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
            id: "service-info",
            type: "info",
            data: { text: "毎週日曜 10:00〜" },
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
            data: {
            },
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
