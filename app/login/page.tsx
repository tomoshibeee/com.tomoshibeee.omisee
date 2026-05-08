"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}