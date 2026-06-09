import "./AuthPage.css";

export default function AuthPage() {
  return (
    <div className="container">
      <div className="left">
        <div className="form">
          <h1>omiseeへようこそ</h1>

          <button className="google">
            Googleで続ける
          </button>

          <div className="divider">または</div>

          <input placeholder="メールアドレス" />
          <input type="password" placeholder="パスワード" />

          <button className="primary">
            ログイン
          </button>
        </div>
      </div>

      <div className="right">
        <p>誰でも簡単にLPを作れる</p>
      </div>
    </div>
  );
}