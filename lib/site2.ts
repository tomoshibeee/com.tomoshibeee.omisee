export const site2 = {
  meta: {
    slug: "yokohama-church",
    name: "横浜教会（デモ）",
    email: "info@yokohama-church.com",
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
            id: "hero-carousel",
            type: "hero",
            variant: "carousel",
            data: {
              title: "横浜教会",
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
            id: "contact-cta",
            type: "cta",
            data: {
              label: "礼拝に参加する",
              href: "#info",
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
            id: "access-main",
            type: "access",
            data: {
              address: "横浜市港北区〇〇...",
              mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.3517196202515!2d138.48555261298384!3d35.022929974376375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a33fa1dc1e4ad%3A0xc0d4e81b2e26cd0a!2sHeartpia%20Shimizu!5e0!3m2!1sen!2sjp!4v1777457707431!5m2!1sen!2sjp",
              access: "駅から徒歩5分",
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
