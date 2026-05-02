import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";

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
  sns: [
    { name: "X", url: "#", icon: FaTwitter },
    { name: "Facebook", url: "#", icon: FaFacebook },
    { name: "Instagram", url: "#", icon: FaInstagram },
    { name: "YouTube", url: "#", icon: FaYoutube },
    { name: "Note", url: "#", icon: FaBlog },
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
    {
      type: "access",
      address: "東京都〇〇...",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.3517196202515!2d138.48555261298384!3d35.022929974376375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a33fa1dc1e4ad%3A0xc0d4e81b2e26cd0a!2sHeartpia%20Shimizu!5e0!3m2!1sen!2sjp!4v1777457707431!5m2!1sen!2sjp",
      access: "駅から徒歩5分",
    },
  ],
};
