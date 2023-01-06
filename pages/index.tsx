import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../src/components/templates";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
interface I_props {
  auth: Auth;
  firestore: Firestore;
}

const Home: NextPage<I_props> = (props) => {
  const { auth } = props;
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chat App Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login signInWithGoogle={signInWithGoogle} />
    </div>
  );
};

export default Home;
