"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (mode === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("失敗: " + error.message);
        return;
      }

      alert("ログイン成功！");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert("失敗: " + error.message);
        return;
      }

      alert("登録成功！（メール確認してね）");
    }
  };
  
  return (
    <div className="container">
      <div className="left">
        <div className="form">
          <h1>omiseeへようこそ</h1>
          <h2>{mode === "login" ? "ログイン" : "アカウント作成"}</h2>
          <button className="google">Googleで続ける</button>
          <div className="divider">または</div>
          <input
            placeholder="メール"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>
            {mode === "login" ? "ログイン" : "登録"}
          </button>
          <p onClick={() => setMode(mode === "login" ? "signup" : "login")}>
            {mode === "login" ? "アカウント作成はこちら" : "ログインはこちら"}
          </p>
        </div>
      </div>

      <div className="right">
        <p>誰でも簡単にLPを作れる</p>
      </div>
    </div>
  );
}
