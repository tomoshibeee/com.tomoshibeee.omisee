"use client";
import { Block } from "@/features/block/index";

import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  block: Block;
  open: boolean;
  onClose: () => void;
};

export function BlockDrawer({ block, open, onClose }: Props) {
  const baseDrawerClass =
    "fixed top-0 right-0 h-full w-96 bg-slate-100 shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto pb-10";
  const drawerClass = open
    ? `${baseDrawerClass} translate-x-0`
    : `${baseDrawerClass} translate-x-full`;

  const baseOverlayClass = "fixed inset-0 bg-black/40 z-40";
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
          <h2 className="text-xl font-bold mb-6 border-b pb-2 text-gray-800">
            {`${block.type}-${block.id}`}
          </h2>

          <div className="space-y-4">
            編集画面
            {JSON.stringify(block.data)}
          </div>
        </section>
      </div>
    </>
  );
}
