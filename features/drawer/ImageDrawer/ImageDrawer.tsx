"use client";

import { useState } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

import { CloudinaryTab } from "./CloudinaryTab";
import { GoogleDriveTab } from "./GoogleDriveTab";

type Props = {
  open: boolean;
  onClose: () => void;
  onUpload: (url: string) => void;
};

export function ImageDrawer(props: Props) {
  const { open, onClose, onUpload } = props;
  const baseDrawerClass =
    "fixed z-100 bottom-0 left-0 w-full rounded-t-2xl max-h-[80vh] overflow-y-auto bg-slate-100 shadow-2xl transform transition-transform duration-300 z-50  block pb-10";
  const drawerClass = open
    ? `${baseDrawerClass} translate-y-0`
    : `${baseDrawerClass} translate-y-full`;

  const baseOverlayClass = "fixed inset-0 z-100 bg-black/40 z-40";
  const overlayClass = open
    ? `${baseOverlayClass} transition-opacity duration-300 opacity-100 block`
    : `${baseOverlayClass} transition-opacity duration-300 opacity-0 hidden`;

  const [activeTab, setActiveTab] = useState<"cloudinary" | "gdrive">(
    "cloudinary",
  );

  const handleSelect = (url: string) => {
    alert("handleSelect: " + url);
  };

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
          {/* タブ */}
          <div className="flex gap-4 mb-4">
            <button onClick={() => setActiveTab("cloudinary")}>
              Cloudinary
            </button>
            <button onClick={() => setActiveTab("gdrive")}>Google Drive</button>
          </div>
          {/* 中身切り替え */}
          {activeTab === "cloudinary" && (
            <CloudinaryTab onSelect={handleSelect} />
          )}

          {activeTab === "gdrive" && <GoogleDriveTab onSelect={handleSelect} />}
        </section>
      </div>
    </>
  );
}
