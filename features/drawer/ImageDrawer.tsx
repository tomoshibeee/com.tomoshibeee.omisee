"use client";

import { useRef } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

import { uploadImage } from "@/lib/cloudinary/uploadImage";

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

  // const [file, setFile] = useState<File | null>(null);

  // const uploadImage = async (file: File) => {
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append(
  //     "upload_preset",
  //     process.env.NEXT_PUBLIC_CLOUDIARY_PRESET_UPLOAD ?? "",
  //   );

  //   const res = await fetch(
  //     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDIARY_CLOUD_NAME}/image/upload`,
  //     {
  //       method: "POST",
  //       body: formData,
  //     },
  //   );

  //   const data = await res.json();
  //   console.log("FULL RESPONSE:", data);
  //   // console.log("uploaded:", data.secure_url);

  //   // 👉 ここでDB保存 or state更新
  // };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // alert("画像をアップロードします");
    const url = await uploadImage(file);
    onUpload(url);
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
          <div>
            <input ref={inputRef} type="file" onChange={handleChange} />
          </div>
          <div>...</div>
          <div>画像一覧</div>
          <div>選択</div>
        </section>
      </div>
    </>
  );
}
