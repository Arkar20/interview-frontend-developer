import React, { useRef, useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { I_FirestoreAndAuth } from "../../../types";
import { BaseInput, BaseButton } from "../atoms";
import styled from "styled-components";

const WrapperForm = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
`;

const ChatForm = (props: I_FirestoreAndAuth) => {
  const [text, setText] = useState("");

  const inputRef = useRef<HTMLInputElement>();
  const handleAddMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Type Something in the text box");
      return;
    }
    await setDoc(doc(props.firestore, "messages", text), {
      text,
      createdAt: serverTimestamp(),
      uid: props.auth.currentUser?.uid,
    });
    setText("");

    if (inputRef.current) {
      inputRef.current.scrollIntoView(true);
      inputRef.current.focus();
    }
  };
  return (
    <WrapperForm onSubmit={handleAddMessage}>
      <BaseInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message here"
        className="w-[90%]"
      />
      <BaseButton className="bg-yellow-400 flex-grow">Send</BaseButton>
    </WrapperForm>
  );
};

export { ChatForm };
