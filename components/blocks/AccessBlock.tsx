import MapBlock from "./MapBlock"

export default function AccessBlock({ block }: any) {
  return (
    <section className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Access</h2>

      <p>{block.address}</p>

      <MapBlock address={block.address} />

      <p>{block.access}</p>
    </section>
  )
}