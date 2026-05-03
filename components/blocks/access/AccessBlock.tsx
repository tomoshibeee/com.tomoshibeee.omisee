import MapBlock from "./MapEmbed"

export default function AccessBlock({ address, access }: any) {
  return (
    <section className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Access</h2>

      <p>{address}</p>

      <MapBlock address={address} />

      <p>{access}</p>
    </section>
  )
}