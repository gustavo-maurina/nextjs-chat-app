import type { NextPage } from "next";
import Head from "next/head";
import { MainContent } from "../components/MainContent";
import { SocketProvider } from "../contexts/SocketProvider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat-app</title>
      </Head>
      <SocketProvider>
        <div className="bg-slate-900 w-screen h-screen flex items-center px-12">
          <div className="h-3/5 w-full flex gap-12 justify-center">
            <MainContent />
          </div>
        </div>
      </SocketProvider>
    </>
  );
};

export default Home;
