"use client";
import { useEffect, useState } from "react";

export default function HeroBlockCarousel({ block }: any) {
  const INTERVAL = 3000;
  const DURATION = 700;

  const images = [
    "https://picsum.photos/id/1018/1600/900",
    "https://picsum.photos/id/1015/1600/900",
    "https://picsum.photos/id/1019/1600/900",
  ];

  const extended = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // 自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

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
  }, [index]);

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
        {extended.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* テキスト */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
        <div>
          <h1 className="text-5xl font-bold">{block.title}</h1>
          <p className="mt-4">{block.message}</p>
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
