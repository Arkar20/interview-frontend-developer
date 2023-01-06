import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../src/components/templates";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chat App Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
};

export default Home;
