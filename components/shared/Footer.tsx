export default function Footer({ site }: any) {
  return (
    <footer className="bottom-0 left-0 pt-6 w-full border-t bg-white text-center text-sm text-gray-500">
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center mb-4">
        <div className="flex-1">
          <h1>教会について</h1>
          <ul>
            <li>教会案内</li>
            <li>牧師紹介</li>
            <li>教会沿革</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1>サイトマップ</h1>
          <ul>
            <li>ホーム</li>
            <li>ニュース</li>
            <li>イベント</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1>法的情報</h1>
          <ul>
            <li>プライバシーポリシー</li>
            <li>利用規約</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1>お問い合わせ</h1>
          <ul>
            <li>お問い合わせフォーム</li>
          </ul>
        </div>
      </div>
      <hr className="width-full" />
      <p>
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
