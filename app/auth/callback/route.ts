import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // ログイン後に遷移させたいページ（例: /dashboard）
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    // 【修正ポイント】Next.js 15以降では cookies() は Promise を返すため await が必要です
    const cookieStore = await cookies();
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value, ...options });
            } catch (error) {
              // サーバーコンポーネントから呼び出された場合の例外を無視
            }
          },
          remove(name: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value: "", ...options });
            } catch (error) {
              // サーバーコンポーネントから呼び出された場合の例外を無視
            }
          },
        },
      }
    );

    // 認可コードをセッション情報に交換し、クッキーに保存します
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // エラーが発生した場合は認証エラーページ（またはトップ）へ
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}