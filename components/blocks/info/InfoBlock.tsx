export default function InfoBlock({ text }: any) {
  return (
    <section　className="p-10 grid grid-cols-2 gap-4">
      <div className="border p-4">{text}</div>
    </section>
  );
}
