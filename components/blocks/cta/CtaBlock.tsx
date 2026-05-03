import { CtaData } from "@/types/block";

export default function CtaBlock(data: CtaData) {
  return (
    <section className="p-10 grid grid-cols-2 gap-4">
      <a href={data.href} className="border p-4 text-center">
        <div className="border p-4">{data.label}</div>
      </a>
    </section>
  );
}
