import { useRef } from "react";
import { uploadImage } from "@/lib/cloudinary/uploadImage";

type Props = {
  onSelect: (url: string) => void;
};
export function CloudinaryTab(props: Props) {
  const { onSelect } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // alert("画像をアップロードします");
    const url = await uploadImage(file);
    onSelect(url);
  };

  return (
    <>
      <h2>Cloudiary</h2>
      <div>
        <input ref={inputRef} type="file" onChange={handleChange} />
      </div>
    </>
  );
}
