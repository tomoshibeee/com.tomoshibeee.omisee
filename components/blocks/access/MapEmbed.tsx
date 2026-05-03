import { AccessData } from "@/types/block";

export default function MapEmbed(data: AccessData) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(data.address)}&output=embed`

  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  )
}