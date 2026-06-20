import Link from "next/link";
import Image from "next/image"; // 💡 Next.jsの画像タグを使用
import { FaArrowRight, FaLink } from "react-icons/fa6";

import { SiteMeta } from "@/models/siteMeta";

export function SiteLink(props: SiteMeta) {
  // 💡 imageとavatarがデータとして存在すると仮定。無い場合のデフォルト画像も設定
  // const { name, slug, image, avatar } = props;
  // TODO : 背景画像＆アバター画像をDBから取得できるように変更する。
  const { name, slug } = props;
  const image = "https://picsum.photos/1200/600";
  const avatar = "https://picsum.photos/1200/600";

  const siteImage = image ?? "/default-site-cover.png"; // お店のカバー画像
  const siteAvatar = avatar ?? "/default-icon.png"; // お店のロゴ・アバター

  return (
    <Link
      href={`/p/${slug}`}
      // 💡 縦長（flex-col）のカード。立体感を出すために「relative」を設定
      className="relative flex flex-col h-[320px] rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100 transition duration-300 hover:shadow-lg hover:-translate-y-1 group"
    >
      {/* 📸 1. 上半分：お店の画像エリア（全体の50%） */}
      <div className="relative h-1/2 w-full bg-slate-100 overflow-hidden">
        <Image
          src={siteImage}
          alt={`${name}のカバー画像`}
          fill
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* 画像の上のうっすらとしたオーバーレイ */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* ⚪️ 2. 真ん中：円形のアバター・アイコン（上下中央に絶対配置） */}
      {/* - top-1/2 と -translate-y-1/2 で線の真上にぴったり配置
        - border-4 border-white で白いフチをつけて、背景画像と同化するのを防ぎます
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative h-16 w-16 rounded-full border-4 border-white bg-white shadow-md overflow-hidden transition duration-300 group-hover:scale-110">
          <Image
            src={siteAvatar}
            alt={`${name}のアイコン`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </div>

      {/* 📝 3. 下半分：サイト名と情報エリア（全体の50%） */}
      {/* アバターが上に乗るため、上部に少し広めの余白（pt-10）を確保します */}
      <div className="flex flex-col flex-1 p-5 pt-10 text-center justify-between bg-white border-t border-gray-100">
        {/* サイト名とスラッグ */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {name}
          </h3>
          {/* <p className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
            <FaLink className="text-[10px]" />
            /p/{slug}
          </p> */}
        </div>

        {/* 下部の矢印（NewsCardの詳しくはこちらテイスト） */}
        <div className="flex justify-center items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 pt-2">
          <span>サイトを見る</span>
          <FaArrowRight className="text-xs transition transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
