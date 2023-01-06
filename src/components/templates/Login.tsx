import React from "react";
import Router from "next/router";
import { UserCredential } from "firebase/auth";
import { BaseButton } from "../atoms";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 500px;
  margin: 1rem;
`;

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
    <Wrapper onSubmit={handleSubmit}>
      <BaseButton className="bg-blue-600 py-3 w-full">
        Sign In With Google
      </BaseButton>
    </Wrapper>
  );
};

export { Login };
