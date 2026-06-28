"use client";

import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ImageDrawer({ open, onClose }: Props) {
  const baseDrawerClass =
    "fixed z-100 bottom-0 left-0 w-full rounded-t-2xl max-h-[80vh] overflow-y-auto bg-slate-100 shadow-2xl transform transition-transform duration-300 z-50  block pb-10";
  const drawerClass = open
    ? `${baseDrawerClass} translate-y-0`
    : `${baseDrawerClass} translate-y-full`;

  const baseOverlayClass = "fixed inset-0 z-100 bg-black/40 z-40";
  const overlayClass = open
    ? `${baseOverlayClass} transition-opacity duration-300 opacity-100 block`
    : `${baseOverlayClass} transition-opacity duration-300 opacity-0 hidden`;

  return (
    <>
      <div className={overlayClass} onClick={onClose} />

      <div className={drawerClass}>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow absolute top-4 right-4 z-50 cursor-pointer"
          onClick={onClose}
        >
          <IoIosCloseCircleOutline />
        </button>

        <section className="p-6 font-bold text-black max-w-4xl mx-auto">
          <div>ファイル選択</div>
          <div>...</div>
          <div>画像一覧</div>
          <div>選択</div>
        </section>
      </div>
    </>
  );
}
