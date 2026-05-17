import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";

const SNS_ICON_MAP: any = {
  x: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  note: FaBlog,
};

export default function Header({ site }: any) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 border-b bg-white">
      <div className="font-bold">{site.meta.name}</div>
      <nav className="hidden md:flex gap-4">
        {site.navigation.menu?.map((m: any, i: number) => (
          <div key={i} className="relative group">
            <a href={m.href ?? "#"}>{m.label}</a>

            {m.children && m.children.length > 0 && (
              <div className="absolute top-full left-0 hidden group-hover:block bg-white border shadow">
                {m.children.map((c: any, j: number) => (
                  <a
                    key={j}
                    href={c.href}
                    className="block px-4 py-2 whitespace-nowrap"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {site.meta.sns?.map((s: any, i: number) => {
          const Icon = SNS_ICON_MAP[s.type];
          if (!Icon) return null;

          return (
            <a key={`${s.type}-${i}`} href={s.url}>
              <Icon size={18} />
            </a>
          );
        })}
      </nav>{" "}
      {/* スマホ用 */}
      <button className="md:hidden">☰</button>
    </header>
  );
}
