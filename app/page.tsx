import Link from "next/link";
import { supabase } from "@/lib/supabase";

type News = {
  id: string;
  title: string;
  published_at: string;
};

import { sites } from "@/lib/data";

export default async function Page() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(5);

  console.log("News data:", data);
  console.log("Error:", error);
  return (
    <main>
      <h1>Tomoshibeee Church1 SaaS</h1>
      <p>it works 🚀</p>
      <div>
        <h1>News</h1>
        {data?.map((item: News) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <small>{new Date(item.published_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
      {error && <p>エラーが発生しました</p>}
      <h1 className="text-2xl font-bold mb-6">Available Sites</h1>
      <div className="w-full">
        {/* ヘッダー */}
        <div className="grid grid-cols-3 bg-gray-100 text-sm text-gray-600 font-medium px-4 py-2 rounded-t-lg">
          <div>Name</div>
          <div>Path</div>
          <div className="text-center">Action</div>
        </div>

        {/* ボディ */}
        {sites.map((s) => (
          <div
            key={s.meta.slug}
            className="grid grid-cols-3 items-center border-t px-4 py-3 hover:bg-gray-50 transition"
          >
            <div className="font-medium">{s.meta.name}</div>

            <div className="text-sm text-gray-500">/p/{s.meta.slug}</div>

            <div className="text-center">
              <Link
                href={`/p/${s.meta.slug}`}
                className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition text-sm"
              >
                Visit
              </Link>
            </div>
          </div>
        ))}
      </div>{" "}
    </main>
  );
}
