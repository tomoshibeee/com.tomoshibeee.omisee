export default function CtaBlock({ label, href }: any) {
  return (
    <section className="p-10 grid grid-cols-2 gap-4">
      <a href={href} className="border p-4 text-center">
        <div className="border p-4">{label}</div>
      </a>
    </section>
  );
}
