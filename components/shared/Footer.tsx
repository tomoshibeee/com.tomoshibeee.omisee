import { SiteData } from "@/types/site";
export default function Footer({ props }: { props: SiteData }) {
  const {
    meta: { name, email },
    navigation: { menu },
  } = props;
  return (
    <footer className="bottom-0 left-0 pt-6 w-full border-t bg-white text-center text-sm text-gray-500">
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center mb-4">
        <div className="flex-1">
          <h2>教会について</h2>
          <ul>
            <li>
              <a href="/about">教会案内</a>
            </li>
            <li>
              <a href="/pastors">牧師紹介</a>
            </li>
            <li>
              <a href="/history">教会沿革</a>
            </li>
            <li>
              <a href="/contact">お問い合わせ</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2>サイトマップ</h2>
          <ul className="flex flex-col gap-2 list-none p-0">
            {menu?.map((m: { href: string; label: string }) => (
              <li key={m.href}>
                <a href={m.href}>{m.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2>法的情報</h2>
          <ul>
            <li>
              <a href="/privacy">プライバシーポリシー</a>
            </li>
            <li>
              <a href="/terms">利用規約</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2>お問い合わせ</h2>
          <ul>
            <li>東京都港区南青山1-1</li>
            <li>電話: 03-1234-5678</li>
            <li>
              Email:
              <svg width={200} height={20}>
                <text x="0" y="15" fontSize="12">
                  **{email}**
                </text>
              </svg>
            </li>{" "}
          </ul>
        </div>
      </div>
      <hr className="width-full" />
      <p>
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
