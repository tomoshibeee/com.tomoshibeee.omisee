export default function Template2({ site }: any) {
  return (
    <main>
      <h1>✨ {site.name}</h1>
      <p>{site.message}</p>
    </main>
  )
}