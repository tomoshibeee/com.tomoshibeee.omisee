// import { blob } from "stream/consumers";

export default function InfoBlock({ block }: any) {
  return (
    <section className="p-10 grid grid-cols-2 gap-4">
      <div className="border p-4">{block.data?.text}</div>
    </section>
  );
}
