import { HeroBlockData } from "@/types/block";

export default function HeroBlockSingleImage({ title, message = "", images }: HeroBlockData) {
  const imageUrl = images?.[0]?.url;
  const backgroundImage = imageUrl ? `url(${imageUrl})` : undefined;

  return (
    <div
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={backgroundImage ? { backgroundImage } : undefined}
    >
      <h1 className="center text-5xl font-bold">{title}</h1>
      <p>{message}</p>
    </div>
  );
}
