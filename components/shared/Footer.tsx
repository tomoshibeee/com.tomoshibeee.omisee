import { SiteData } from "@/types/site";

export default function Footer({ props }: { props: SiteData }) {
  const {
    meta: { name, email },
    navigation: { menu },
  } = props;

  return (
    <footer className="w-full border-t bg-white pt-6 text-center text-sm text-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 px-4">
        {/* 教会について */}
        <div>
          <h2 className="font-semibold mb-2">教会について</h2>
          <ul className="space-y-1">
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

        {/* サイトマップ */}
        <div>
          <h2 className="font-semibold mb-2">サイトマップ</h2>
          <ul className="space-y-1">
            {menu?.map((m, i) => (
              <li key={i}>
                <a href={m.href}>{m.label}</a>
                {m.children && m.children.length > 0 && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {m.children.map((c, j) => (
                      <li key={j}>
                        <a href={c.href}>{c.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 法的情報 */}
        <div>
          <h2 className="font-semibold mb-2">法的情報</h2>
          <ul className="space-y-1">
            <li>
              <a href="/privacy">プライバシーポリシー</a>
            </li>
            <li>
              <a href="/terms">利用規約</a>
            </li>
          </ul>
        </div>

        {/* お問い合わせ */}
        <div>
          <h2 className="font-semibold mb-2">お問い合わせ</h2>
          <ul className="space-y-1">
            <li>東京都港区南青山1-1</li>
            <li>電話: 03-1234-5678</li>
            <li>Email: {email}</li>
          </ul>
        </div>
      </div>

      <p className="border-t pt-4 pb-2">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
}
