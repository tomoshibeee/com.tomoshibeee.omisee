export default function HeroBlockSingleImage({ block }: any) {
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url(https://picsum.photos/1200/600)" }}
    >
      <h1 className="text-5xl font-bold">{block.title}</h1>
    </section>
  )
}