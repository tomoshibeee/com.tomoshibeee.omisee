import { supabase } from "@/lib/supabase";

type News = {
  id: string;
  title: string;
  published_at: string;
};

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
    </main>
  );
}
