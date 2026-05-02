import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";

export const site2 = {
  name: "横浜教会（デモ）",
  slug: "yokohama-church",
  message: "Welcome!",
  template: "template2",
  menu: [
    { label: "AboutUs", href: "#about" },
    { label: "Service", href: "#service" },
    { label: "Access", href: "#access" },
    { label: "Contact", href: "#contact" },
  ],
  sns: [
    { name: "X", url: "#", icon: FaTwitter },
    { name: "Facebook", url: "#", icon: FaFacebook },
    { name: "Instagram", url: "#", icon: FaInstagram },
    { name: "YouTube", url: "#", icon: FaYoutube },
    { name: "Note", url: "#", icon: FaBlog },
  ],
  blocks: [
    { type: "hero", title: "横浜教会", message: "ようこそ！" },
    {
      type: "about",
      name: "横浜太郎",
      role: "主任牧師",
      image: "/representative.jpg",
      bio: "横浜生まれ。神学校卒業後、国内外の教会で牧師として奉仕。2020年より現職。",
      message:
        "横浜教会の主任牧師を務めています。皆さんとお会いできるのを楽しみにしています！",
    },
    { type: "info", text: "毎週日曜 10:00〜" },
    {
      type: "access",
      address: "神奈川県港北区〇〇1-2-3",
      // lat: null,
      // lng: null,
      access: "駅から徒歩5分",
    },
  ],
}; 
