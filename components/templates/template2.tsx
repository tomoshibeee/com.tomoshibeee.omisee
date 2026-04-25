type Props = {
  site: {
    name: string
    message: string
  }
}

export default function Template2({ site }: Props) {
  return (
    <main className="p-6 space-y-10">
      {/* Hero */}
      <section className="bg-gray-100 p-6 rounded-xl space-y-3">
        <h1 className="text-2xl font-bold">✨ {site.name}</h1>
        <p>{site.message}</p>
      </section>

      {/* Info */}
      <section className="border p-4 rounded-lg">
        <h2 className="font-semibold">礼拝時間</h2>
        <p>日曜 10:00〜</p>
      </section>

      {/* Contact */}
      <section>
        <button className="border px-4 py-2 rounded">
          お問い合わせ
        </button>
      </section>
    </main>
  )
}