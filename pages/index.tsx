import type { NextPage } from "next";
import Head from "next/head";
import { MainContent } from "../components/MainContent";
import { AuthProvider } from "../contexts/AuthProvider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat-app</title>
      </Head>
      <div className="bg-slate-900 w-screen h-screen flex items-center px-12">
        <div className="h-3/5 w-full flex gap-12 justify-center">
          <AuthProvider>
            <MainContent />
          </AuthProvider>
        </div>
      </div>
    </>
  );
};

export default Home;
