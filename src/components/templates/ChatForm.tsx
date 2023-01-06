import React, { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { I_FirestoreAndAuth } from "../../types";
import { BaseInput, BaseButton } from "../atoms";
const ChatForm = (props: I_FirestoreAndAuth) => {
  const [text, setText] = useState("");
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
  };
  return (
    <form
      className=" bottom-0 w-full h-[40px] flex mt-3 mb-1"
      onSubmit={handleAddMessage}
    >
      <BaseInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message here"
        className="w-[90%]"
      />
      <BaseButton className="bg-yellow-400 flex-grow">Send</BaseButton>
    </form>
  );
};

export { ChatForm };
