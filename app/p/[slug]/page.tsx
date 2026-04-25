import { data } from "@/lib/data"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  const site = data[slug]

  if (!site) {
    return <div>Not Found</div>
  }

  return (
    <main>
      <h1>{site.name}</h1>
      <p>{site.message}</p>
    </main>
  )
}