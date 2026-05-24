import MapBlock from "./MapEmbed";

import { MetaData } from "@/types/meta";

export default function AccessBlock(meta: MetaData) {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Access</h2>

      <p>{meta.address}</p>

      <MapBlock address={meta.address} />

      <p>{meta.access}</p>
    </div>
  );
}
