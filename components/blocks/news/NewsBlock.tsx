import { NewsData } from "@/types/block";

export default function NewsBlock({ items }: NewsData) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">お知らせ</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}