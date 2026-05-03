import MapBlock from "./MapEmbed";

import { AccessData } from "@/types/block";
export default function AccessBlock(data: AccessData) {
  return (
    <section className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Access</h2>

      <p>{data.address}</p>

      <MapBlock address={data.address} />

      <p>{data.access}</p>
    </section>
  );
}
