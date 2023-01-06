import React, { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { I_FirestoreAndAuth } from "../../types";
const ChatForm = (props: I_FirestoreAndAuth) => {
  const [text, setText] = useState("");
  const handleAddMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setDoc(doc(props.firestore, "messages", text), {
      text,
      createdAt: serverTimestamp(),
      uid: props.auth.currentUser?.uid,
    });
    setText("")
  };
  return (
    <form
      className="fixed bottom-0 w-full h-[40px] flex mt-3 mb-1"
      onSubmit={handleAddMessage}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[90%]  px-1 outline-none"
        placeholder="Type your message here  "
      />
      <button className="flex-grow bg-yellow-400 text-white">Send</button>
    </form>
  );
};

export { ChatForm };
