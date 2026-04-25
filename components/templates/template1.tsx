export default function Template1({ site }: any) {
  return (
    <main>
      <h1>🌿 {site.name}</h1>
      <p>{site.message}</p>
    </main>
  )
}