import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth"; // 仮

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header variant="dashboard" />
      <main>
        <h1>omisee Dashboard Page</h1>
        <p>it works 🚀</p>
      </main>
      <Footer variant="dashboard" />
    </>
  );
}
