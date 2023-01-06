import React from "react";
import Router from "next/router";
import { UserCredential } from "firebase/auth";
import { BaseButton } from "../atoms";
interface I_LoginProps {
  signInWithGoogle: () => Promise<UserCredential>;
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
      <BaseButton className="bg-blue-600 py-3">Sign In With Google</BaseButton>
    </form>
  );
};

export { Login };
