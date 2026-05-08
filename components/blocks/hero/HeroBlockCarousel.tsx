"use client";

console.log("🔥 HeroBlockCarousel mounted");

import { useEffect, useState } from "react";

import { HeroData } from "@/types/block";

export default function HeroBlockCarousel(data: HeroData) {
  const INTERVAL = 3000;
  const DURATION = 700;

  const { images } = data;
  const extended = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // useEffect(() => {
  //   console.log("index:", index);
  // }, [index]);

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [images.length]);

  // ダミー到達時のワープ処理
  useEffect(() => {
    if (index === images.length) {
      // アニメ終わった後にリセット
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, DURATION);

      // すぐ戻す（次のスライド準備）
      setTimeout(() => {
        setTransition(true);
      }, DURATION + 50);
    }
  }, [index, images.length]);

  // if (!images || images.length === 0)
  //   return (
  //     <section className="h-screen flex items-center justify-center">
  //       No images
  //     </section>
  //   );

  // if (!loaded)
  //   return (
  //     <section className="h-screen flex items-center justify-center">
  //       Loading...
  //     </section>
  //   );

  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* スライド本体 */}
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-700" : ""
        }`}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {extended.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={img.alt ?? "Slide Image"}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* テキスト */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
        <div>
          <h1 className="text-5xl font-bold">{data.title}</h1>
          <p className="mt-4">{data.message}</p>
        </div>
      </div>

      {/* ドット */}
      <div className="absolute bottom-6 flex gap-2 z-10 w-full justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
