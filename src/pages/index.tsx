import Center from "@/components/Center";
import Navbarleft from "@/components/Navbarleft";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
       <Head>
        <title>Home | ABA Dashboard</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <main className="flex">
        {/*Sidebar*/}
        <Navbarleft />
        {/*Main Center*/}
        <Center />
    </main>
    </div>
    
  );
}
