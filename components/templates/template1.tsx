export default function Template2({ site }: any) {
  const hero = site.blocks.find((b: any) => b.type === "hero")
  const info = site.blocks.find((b: any) => b.type === "info")

  return (
    <main>
      {/* Heroだけ巨大表示 */}
      {/* <section className="bg-gradient-to-r from-purple-500 to-pink-500"> */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 text-white">
      {/* <section className="h-screen flex items-center justify-center bg-black text-white"> */}
        <h1 className="text-5xl">{hero?.title}</h1>
      </section>

      {/* Infoはカード風 */}
      <section className="p-10 grid grid-cols-2 gap-4">
        <div className="border p-4">{info?.text}</div>
      </section>
    </main>
  )
}