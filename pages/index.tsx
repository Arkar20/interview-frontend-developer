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

  console.log(user);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chat App Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <button className="bg-red-300 px-2 py-1" onClick={signOut}>
          Logout
        </button>
      ) : (
        <Login signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
};

export default Home;
