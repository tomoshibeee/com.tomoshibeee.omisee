interface Props {
  title: string;
  message: string;
}

export default function HeroBlockSingleImage({ title, message }: Props) {
  // console.log("title:", title);
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url(https://picsum.photos/1200/600)" }}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      <p>{message}</p>
    </section>
  );
}
