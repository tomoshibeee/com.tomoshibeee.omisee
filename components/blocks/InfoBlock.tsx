// import { blob } from "stream/consumers";

export default function InfoBlock({ block }: any) {
  return (
    <section>
      <p>{block.text}</p>
    </section>
  );
}