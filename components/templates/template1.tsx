type Props = {
  site: {
    name: string
    message: string
  }
}

export default function Template1({ site }: Props) {
  return (
    <main className="p-6 space-y-8">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{site.name}</h1>
        <p className="text-gray-600">{site.message}</p>
      </section>

      {/* Info */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">礼拝のご案内</h2>
        <p>毎週日曜 10:00〜</p>
      </section>

      {/* Contact */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">お問い合わせ</h2>
        <button className="bg-black text-white px-4 py-2 rounded">
          連絡する
        </button>
      </section>
    </main>
  )
}