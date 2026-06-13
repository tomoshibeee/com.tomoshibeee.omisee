import { cookies } from "next/headers";

export async function getSession() {
    // パターン①（シンプルJWT / cookie型）
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return null;

    // TODO : ユーザ情報取得
    return {
        user: {
            id: "user_123",
            name: "Shoko",
        },
    };
    // TODO : パターン②（DBセッション型）
    // TODO : パターン③（Supabase使う場合）
}