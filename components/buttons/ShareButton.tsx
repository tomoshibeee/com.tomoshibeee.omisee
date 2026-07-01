"use client";

import { useState, useRef, useEffect } from "react";
import { FaUpRightFromSquare, FaLine, FaXTwitter, FaCopy, FaCheck } from "react-icons/fa6";

type Props = {
  className?: string;
  isFooter?: boolean;
};

function ShareButton({ className, isFooter = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  // 💡 アイコンがシュッとしたので、サイズを少し落とす（18px）とさらに上品になります
  const SIZE = 18; 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleShare = (e: React.MouseEvent, type: "line" | "twitter" | "copy") => {
    e.preventDefault();
    e.stopPropagation();

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const currentTitle = typeof document !== "undefined" ? document.title : "";

    if (type === "line") {
      const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}`;
      window.open(lineUrl, "_blank", "noreferrer,noopener");
    }

    if (type === "twitter") {
      const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`;
      window.open(twitterUrl, "_blank", "noreferrer,noopener");
    }

    if (type === "copy") {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }

    if (type !== "copy") setIsOpen(false);
  };

  return (
    <div ref={popoverRef} className="relative inline-block z-[9999]">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`${className} cursor-pointer`}
        aria-label="このページを共有する"
      >
        {/* 💡 ここを新しい今風アイコンに変更 */}
        <FaUpRightFromSquare size={SIZE} />
      </button>

      {/* 📋 共有先を選ぶ小さなポップアップ吹き出し */}
      {isOpen && (
        <div
          className="absolute left-1/2 w-48 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-2 shadow-xl z-[9999] transition-all duration-200 ease-out"
          style={{
            position: "absolute",
            bottom: isFooter ? "100%" : "auto",
            top: isFooter ? "auto" : "100%",
            marginBottom: isFooter ? "8px" : "0px",
            marginTop: isFooter ? "0px" : "8px",
          }}
        >
          <div className="flex flex-col gap-1">
            {/* LINEで送る */}
            <button
              type="button"
              onClick={(e) => handleShare(e, "line")}
              className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer"
            >
              <FaLine size={16} className="text-[#06C755]" />
              LINEで送る
            </button>

            {/* Xで共有 */}
            <button
              type="button"
              onClick={(e) => handleShare(e, "twitter")}
              className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs font-semibold text-gray-700 transition hover:bg-slate-900 hover:text-white cursor-pointer"
            >
              <FaXTwitter size={16} />
              Xで共有
            </button>

            {/* リンクをコピー */}
            <button
              type="button"
              onClick={(e) => handleShare(e, "copy")}
              className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
            >
              {copied ? (
                <FaCheck size={16} className="text-emerald-500" />
              ) : (
                <FaCopy size={16} />
              )}
              {copied ? "コピーしました！" : "リンクをコピー"}
            </button>
          </div>

          {/* 吹き出しの小さな矢印 */}
          <div 
            className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-slate-200 bg-white
              ${isFooter 
                ? "top-full -translate-y-1 border-r border-b" 
                : "bottom-full translate-y-1 border-l border-t"
              }`}
          />
        </div>
      )}
    </div>
  );
}

export function ShareButtonHeader() {
  return (
    <ShareButton
      className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-slate-100 hover:text-gray-900"
      isFooter={false}
    />
  );
}

export function ShareButtonFooter() {
  return (
    <ShareButton
      className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-200 transition hover:bg-gray-600 hover:text-white"
      isFooter={true}
    />
  );
}