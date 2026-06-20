import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import { SiteMeta } from "@/models/siteMeta";

type Props = {
  meta: SiteMeta;
  edit?: boolean;
};

export function SiteLink(props: Props) {
  const { meta, edit } = props;
  console.log(meta);
  // const { name, slug } = {}
  const name = props.meta.name;
  const slug = props.meta.slug;
  const image = "https://picsum.photos/1200/600";
  const avatar = "https://picsum.photos/1200/600";

  const siteImage = image ?? "/default-site-cover.png";
  const siteAvatar = avatar ?? "/default-icon.png";

  return (
    <Link
      href={`/p/${slug}`}
      // スマホは縦長(h-[320px])、PC(md:)は横長(h-[160px])のロー
      className="relative flex flex-col md:flex-row h-[320px] md:h-[160px] rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100 transition duration-300 hover:shadow-lg hover:-translate-y-1 group"
    >
      {/* 📸 1. 左側：お店の画像エリア */}
      {/* ここに relative を持たせ、中のアバターを「常にこのエリアの中心」に固定します */}
      <div className="relative h-1/2 md:h-full w-full md:w-2/5 bg-slate-100 overflow-hidden shrink-0">
        <Image
          src={siteImage}
          alt={`${name}のカバー画像`}
          fill
          sizes="(max-w-768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* アバターを見やすくするために、画像上の黒オーバーレイを少しだけ濃く(bg-black/20)します */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ⚪️ 2. 【修正！】左半分（画像エリア）の中心に配置されるアバター */}
        {/* md: をつけても位置が変わらないように一元化し、常に画像エリアのど真ん中に配置します */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white bg-white shadow-md overflow-hidden transition duration-300 group-hover:scale-110">
            <Image
              src={siteAvatar}
              alt={`${name}のアイコン`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 📝 3. 右側：サイト名と情報エリア */}
      {/* アバターが完全に左側に収まったので、PC版の左余白（md:pl-6）を標準的なサイズにスッキリさせました */}
      <div className="flex flex-col md:flex-row flex-1 p-5 text-center md:text-left justify-between items-center bg-white border-t md:border-t-0 md:border-l border-gray-100">
        {/* サイト名 */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {name}
          </h3>
        </div>

        {/* 下部の矢印ボタン */}
        <div className="flex justify-center items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 pt-2 md:pt-0 shrink-0">
          <span>{edit ? "サイトを編集する" : "サイトを見る"}</span>
          <FaArrowRight className="text-xs transition transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
