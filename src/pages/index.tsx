import { Header } from "@/components/Header";
import { RecentAds } from "@/components/RecentAds";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <body>
      <main>
        <Header/>
        <RecentAds/>
      </main>
    </body>
    </>
  );
}
