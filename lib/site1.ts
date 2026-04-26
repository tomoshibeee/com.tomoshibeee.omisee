export const site1 = {
  name: "東京教会（デモ）",
  slug: "tokyo-church",
  message: "ようこそ！",
  template: "template1",
  menu: [
    { label: "教会について", href: "#about" },
    { label: "礼拝", href: "#service" },
    { label: "アクセス", href: "#access" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  blocks: [
    { type: "hero", title: "東京教会", message: "ようこそ！" },
    {
      type: "about",
      name: "東京太郎",
      role: "主任牧師",
      image: "/representative.jpg",
      bio: "東京生まれ。神学校卒業後、国内外の教会で牧師として奉仕。2020年より現職。",
      message:
        "東京教会の主任牧師を務めています。皆さんとお会いできるのを楽しみにしています！",
    },
    { type: "info", text: "毎週日曜 10:00〜" },
  ],
};
