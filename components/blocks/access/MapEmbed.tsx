export default function MapEmbed({ address }: { address: string }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}