import { LinkButtonFooter } from "@/components/buttons/LinkButton";
import { ShareButtonFooter } from "../buttons/ShareButton";
import { SNSItem } from "@/types/sns";
import { SiteData } from "@/types/site";

import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { sns } from "@/lib/data";

export default function Footer({ site }: { site: SiteData }) {
  const sortedSNSItems = sns[site.meta.sns - 1];

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-950 px-6 pt-14 text-sm text-slate-300">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-blue-300">Church</p>
          <h2 className="mt-2 text-2xl font-bold text-white">{site.meta.name}</h2>
          <p className="mt-4 leading-7 text-slate-400">
            礼拝、集会、アクセス、お問い合わせについての情報をまとめています。
          </p>

          {sortedSNSItems && sortedSNSItems?.length > 0 && (
            <div className="mt-5 flex items-center gap-2">
              {sortedSNSItems
                .sort((a, b) => a.priority - b.priority)
                .map((item: SNSItem, i: number) => (
                  <LinkButtonFooter key={`${item.type}-${i}`} item={item} />
                ))}

              {/* Share */}
              <ShareButtonFooter />
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
            {/* {site.navigation.menu?.map((m, i) => (
              <li key={i}>
                <a href={m.href ?? "#"} className="transition hover:text-white">
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
            ))} */}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">お問い合わせ</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 shrink-0 text-blue-300" />
              <span className="leading-6">
                {site.meta.postalCode && (
                  <>
                    〒{site.meta.postalCode}
                    <br />
                  </>
                )}
                {site.meta.address}
                {site.meta.bldg && (
                  <>
                    <br />
                    {site.meta.bldg}
                  </>
                )}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.meta.tel}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaPhone className="shrink-0 text-blue-300" />
                <span>{site.meta.tel}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.meta.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <FaEnvelope className="shrink-0 text-blue-300" />
                <span>{site.meta.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-3 border-t border-white/10 py-6 text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.meta.name}. All rights reserved.
        </p>
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
