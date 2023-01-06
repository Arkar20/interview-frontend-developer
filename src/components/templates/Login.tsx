import React from "react";
import Router from "next/router";
import { UserCredential } from "firebase/auth";
interface I_LoginProps {
  signInWithGoogle: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

const Login = (props: I_LoginProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props
      .signInWithGoogle()
      .then(() => {
        Router.push("/chat");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} className="w-[600px] flex flex-col m-4 ">
      <button className="bg-blue-300 px-3 py-2">Sign In With Google</button>
    </form>
  );
};

export { Login };
