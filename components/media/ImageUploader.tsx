import { useRef } from "react";
import { FaCameraRetro } from "react-icons/fa6";

import { uploadImage } from "@/lib/cloudinary/uploadImage";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadImage(file); // Cloudinary
    onUpload(url);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="absolute right-4 top-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70"
      >
        <FaCameraRetro/>
      </button>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
}
