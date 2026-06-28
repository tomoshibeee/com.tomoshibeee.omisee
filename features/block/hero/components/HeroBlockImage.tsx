import Image from "next/image";
import { FaCameraRetro } from "react-icons/fa6";

import { HeroBlockData } from "@/features/block";

type Props = {
  data: HeroBlockData;
  edit: boolean;
};

export default function HeroBlockSingleImage(props: Props) {
  const { data, edit } = props;
  const { title, message, images } = data;
  const image = images?.[0];

  const onEditClick = () => {
    alert("onEditClick");
  };

  return (
    <div className="relative min-h-[86svh] overflow-hidden bg-slate-900 px-6 text-white">
      {edit && (
        <button
          onClick={onEditClick}
          className="absolute right-4 top-4 z-20 w-10 h-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white hover:bg-black/70"
        >
          <FaCameraRetro />
        </button>
      )}
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-5xl flex-col items-center justify-center pb-28 pt-24 text-center">
        {/*<p className="text-sm font-semibold text-blue-100">Welcome</p>*/}
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        {message && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
