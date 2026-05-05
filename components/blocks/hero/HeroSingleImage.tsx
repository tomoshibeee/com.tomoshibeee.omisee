import { HeroData } from "@/types/block";

export default function HeroBlockSingleImage(data: HeroData) {
  // console.log("title:", data.title);
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${data.images[0]})` }}
    >
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p>{data.message}</p>
    </section>
  );
}
