export async function getSession() {
  // TODO : 仮ログイン状態
  return {
    user: {
      id: "demo-user",
      name: "Shoko",
    },
  };

  // TODO : 未ログインにしたい時はこれ👇
  // return null;
}