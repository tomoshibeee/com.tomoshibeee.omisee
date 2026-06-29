import { HeroBlockData } from "@/features/block";
import { FaCameraRetro } from "react-icons/fa6";

type Props = {
  data: HeroBlockData;
  onOpenImageUploader: () => void;
};

export default function ImageUploader(props: Props) {
  const { data, onOpenImageUploader } = props;
  const handleEdit = async () => {
    onOpenImageUploader();
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
      <button
        onClick={handleEdit}
        className="absolute right-4 top-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70"
      >
        <FaCameraRetro />
      </button>

      {/*<input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />*/}
    </>
  );
}
