import { HeroBlockData } from "@/features/block";

type Props = {
  data: HeroBlockData;
  onOpenImageUploader: () => void;
};

export default function ImageUploader(props: Props) {
  const { data, onOpenImageUploader } = props;
  const handleEdit = async () => {
    alert("ImageDrawerを起動します");
    console.log("🚦🚦🚦onOpenImageUploader🚦🚦🚦", onOpenImageUploader);
    onOpenImageUploader();
  }

  // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   const url = await uploadImage(file);
  //   onUpload(url);
  // };

  console.log(data);

  return (
    <>
      <button onClick={handleEdit}>📷</button>

      {/*<input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />*/}
    </>
  );
}
