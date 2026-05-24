export const site2 = {
  meta: {
    slug: "yokohama-church",
    name: "横浜教会（デモ）",
    email: "info@yokohama-church.com",
    address: "横浜市港北区〇〇...",
    access: "駅から徒歩5分",
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
            id: "hero-carousel",
            type: "hero",
            variant: "carousel",
            data: {
              title: "誰にでも開かれた教会へ",
              message: "ようこそ！",
              images: [
                {
                  url: "https://picsum.photos/id/1018/1600/900",
                  alt: "Hero Image 1",
                },
                {
                  url: "https://picsum.photos/id/1015/1600/900",
                  alt: "Hero Image 2",
                },
                {
                  url: "https://picsum.photos/id/1019/1600/900",
                  alt: "Hero Image 3",
                },
              ],
            },
          },
          {
            id: "hero-cta",
            type: "cta",
            data: {
              buttons: [
                { label: "礼拝に参加する", href: "#info" },
                { label: "お問い合わせ", href: "#contact" },
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
              name: "横浜太郎",
              role: "主任牧師",
              image: "https://i.pravatar.cc/150?img=3",
              bio: "横浜生まれ。神学校卒業後、国内外の教会で牧師として奉仕。2020年より現職。",
              message:
                "横浜教会の主任牧師を務めています。皆さんとお会いできるのを楽しみにしています！",
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
                },
                {
                  id: "service2",
                  title: "聖書勉強会",
                  time: "水曜10:00〜",
                  location: "教室",
                  comment: "初心者歓迎！聖書の基礎から学べます",
                },
                {
                  id: "service3",
                  title: "青年委員会",
                  time: "木曜10:00〜",
                  location: "教室",
                  comment: "高校生〜30代の若者が集まる活動的なグループです",
                },
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
