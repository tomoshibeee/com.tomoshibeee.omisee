export default function HeroBlock({ block }: any) {
  return (
    <section>
      <h1>{block.title}</h1>
      <p>{block.message}</p>
    </section>
  );
}
