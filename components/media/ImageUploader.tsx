import { useRef } from "react";
import { uploadImage } from "lib/cloudinary/uploadImage";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadImage(file);
    onUpload(url);
  };

  return (
    <>
      <button onClick={() => inputRef.current?.click()}>📷</button>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
}
