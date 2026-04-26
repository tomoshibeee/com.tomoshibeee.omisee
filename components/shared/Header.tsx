export default function Header({ site }: any) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 border-b bg-white">
      {" "}
      <div className="font-bold">{site.name}</div>
      <nav className="hidden md:flex gap-4">
        {site.menu?.map((m: any) => (
          <a key={m.href} href={m.href}>
            {m.label}
          </a>
        ))}
      </nav>
      {/* スマホ用 */}
      <button className="md:hidden">☰</button>
    </header>
  );
}
