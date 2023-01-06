import React from "react";
import Router from "next/router";

interface I_LoginProps {
  signInWithGoogle: () => void;
}

const Login = (props: I_LoginProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.signInWithGoogle();
    Router.push("/chat");
  };
  return (
    <form onSubmit={handleSubmit} className="w-[600px] flex flex-col m-4 ">
      <button className="bg-blue-300 px-3 py-2">Sign In With Google</button>
    </form>
  );
};

export { Login };
