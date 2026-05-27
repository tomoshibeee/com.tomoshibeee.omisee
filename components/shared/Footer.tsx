import { IconType } from "react-icons";
import {
  FaBlog,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { SiteData } from "@/types/site";

const SNS_ICON_MAP: Record<string, IconType> = {
  x: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  note: FaBlog,
};

export default function Footer({ props }: { props: SiteData }) {
  const {
    meta: { name, tel, email, postalCode, address, bldg, sns },
    navigation: { menu },
  } = props;

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-950 px-6 pt-14 text-sm text-slate-300">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-blue-300">Church</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{name}</h2>
          <p className="mt-4 leading-7 text-slate-400">
            礼拝、集会、アクセス、お問い合わせについての情報をまとめています。
          </p>

          {sns && sns.length > 0 && (
            <div className="mt-5 flex gap-2">
              {sns.map((item, i) => {
                const Icon = SNS_ICON_MAP[item.type];
                if (!Icon) return null;

                return (
                  <a
                    key={`${item.type}-${i}`}
                    href={item.url}
                    aria-label={`${item.type}を開く`}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-slate-200 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-white">教会について</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#about" className="transition hover:text-white">
                教会案内
              </a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-white">
                牧師紹介
              </a>
            </li>
            <li>
              <a href="#service" className="transition hover:text-white">
                礼拝案内
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">サイトマップ</h3>
          <ul className="mt-4 space-y-2">
            {menu?.map((m, i) => (
              <li key={i}>
                <a
                  href={m.href ?? "#"}
                  className="transition hover:text-white"
                >
                  {m.label}
                </a>
                {m.children && m.children.length > 0 && (
                  <ul className="mt-2 space-y-2 border-l border-white/10 pl-3 text-slate-400">
                    {m.children.map((c, j) => (
                      <li key={j}>
                        <a
                          href={c.href ?? "#"}
                          className="transition hover:text-white"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">お問い合わせ</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 shrink-0 text-blue-300" />
              <span className="leading-6">
                {postalCode && (
                  <>
                    〒{postalCode}
                    <br />
                  </>
                )}
                {address}
                {bldg && (
                  <>
                    <br />
                    {bldg}
                  </>
                )}
              </span>
            </li>
            <li>
              <a
                href={`tel:${tel}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaPhone className="shrink-0 text-blue-300" />
                <span>{tel}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaEnvelope className="shrink-0 text-blue-300" />
                <span>{email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-3 border-t border-white/10 py-6 text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="transition hover:text-white">
            プライバシーポリシー
          </a>
          <a href="/terms" className="transition hover:text-white">
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
}
