"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";

import { HeroBlockData } from "@/features/block";

type Props = { data: HeroBlockData; edit: boolean };
export default function HeroBlockCarousel(props: Props) {
  const { data, edit = false } = props;
  const INTERVAL = 3000;
  const DURATION = 700;

  const { images = [] } = data;
  const extended = images.length > 0 ? [...images, images[0]] : [];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    let resetTimer: ReturnType<typeof setTimeout> | undefined;
    let transitionTimer: ReturnType<typeof setTimeout> | undefined;

    if (index === images.length) {
      resetTimer = setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, DURATION);

      transitionTimer = setTimeout(() => {
        setTransition(true);
      }, DURATION + 50);
    }

    return () => {
      if (resetTimer) clearTimeout(resetTimer);
      if (transitionTimer) clearTimeout(transitionTimer);
    };
  }, [index, images.length]);

  if (images.length === 0) {
    return (
      <div className="relative flex min-h-[86svh] items-center justify-center bg-slate-900 px-6 text-center text-white">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-blue-100">Welcome</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {data.title}
          </h1>
          {data.message && (
            <p className="mt-5 text-base leading-8 text-white/85 md:text-lg">
              {data.message}
            </p>
          )}
        </div>
      </div>
    );
  }

  const onEditClick = () => {
    // Cloudiaryの画像アップロード、一覧をモーダルで表示する
    alert("onEditClick");
  };

  return (
    <div className="relative min-h-[86svh] overflow-hidden bg-slate-900 text-white">
      {edit && (
        <button
          onClick={onEditClick}
          className="absolute right-4 top-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <FaCameraRetro />
        </button>
      )}
      <div
        className={`flex min-h-[86svh] ${
          transition ? "transition-transform duration-700" : ""
        }`}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {extended.map((img, i) => (
          <div key={`${img.url}-${i}`} className="relative min-w-full">
            <Image
              src={img.url}
              alt={img.alt ?? "Slide Image"}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pb-28 pt-24 text-center">
        <div className="max-w-4xl">
          {/*<p className="text-sm font-semibold text-blue-100">Welcome</p>*/}
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {data.title}
          </h1>
          {data.message && (
            <p className="mt-5 text-base leading-8 text-white/85 md:text-lg">
              {data.message}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-28 z-10 flex w-full justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}枚目の画像を表示`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index % images.length === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
