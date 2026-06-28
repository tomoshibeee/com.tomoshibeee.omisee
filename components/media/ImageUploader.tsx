import { useRef } from "react";
import { HeroBlockData } from "@/features/block";

type Props = {
  data: HeroBlockData;
};

export default function ImageUploader(props: Props) {
  const { data } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onEdit = () => {
    alert("test");
  };
  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   const url = await uploadImage(file);
  //   onUpload(url);
  // };

  console.log(data);

  return (
    <>
      <button onClick={onEdit}>📷</button>

      {/*<input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />*/}
    </>
  );
}
