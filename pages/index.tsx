import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../src/components/templates";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { I_FirestoreAndAuth } from "../src/types";
import { BaseButton } from "../src/components/atoms";

const Home: NextPage<I_FirestoreAndAuth> = (props) => {
  const { auth } = props;
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

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
        <BaseButton className="bg-red-400 p-3" onClick={signOut}>
          Logout
        </BaseButton>
      ) : (
        <Login signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
};

export default Home;
