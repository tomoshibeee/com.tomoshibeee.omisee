export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <main>
      <h1>slug: {slug}</h1>
    </main>
  )
}