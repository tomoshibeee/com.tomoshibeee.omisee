import { InfoData } from "@/types/block";

export default function InfoBlock(data: InfoData) {
  return (
    <section className="p-10 grid grid-cols-2 gap-4">
      <div className="border p-4">{data.text}</div>
    </section>
  );
}
