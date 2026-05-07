export default function Footer({ site }: any) {
  return (
    <footer className="bottom-0 left-0 pt-6 w-full border-t bg-white text-center text-sm text-gray-500">
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center mb-4">
        <div className="flex-1">
          <h2>教会について</h2>
          <ul>
            <li><a href="/about">教会案内</a></li>
            <li><a href="/pastors">牧師紹介</a></li>
            <li><a href="/history">教会沿革</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h2>サイトマップ</h2>
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/news">ニュース</a></li>
            <li><a href="/events">イベント</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h2>法的情報</h2>
          <ul>
            <li><a href="/privacy">プライバシーポリシー</a></li>
            <li><a href="/terms">利用規約</a></li>    
          </ul>
        </div>
        <div className="flex-1">
          <h2>お問い合わせ</h2>
          <ul>
            <li><a href="/contact">お問い合わせフォーム</a></li>
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
