import React, { useState } from "react";
import type { NextPage } from "next";
import { I_FirestoreAndAuth } from "../src/types";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Image from "next/image";
const Chat: NextPage<I_FirestoreAndAuth> = (props) => {
  const messageRef = collection(props.firestore, "messages");
  const [messages] = useCollectionData(messageRef);
  const [text, setText] = useState("");
  const handleAddMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setDoc(doc(props.firestore, "messages", text), {
      text,
      createdAt: serverTimestamp(),
      uid: props.auth.currentUser?.uid,
    });
  };

  return (
    <div>
      <h4 className="bg-blue-600 p-3 text-white text-2xl">Chat Room</h4>

      <ul className="m-3">
        {messages &&
          messages.map((message) => {
            return (
              <li className="flex items-center space-x-3">
                <Image
                  src="https://i.pravatar.cc/300"
                  width={50}
                  height={50}
                  alt="profile"
                  className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                />

                <p>{message.text}</p>
              </li>
            );
          })}
      </ul>

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
    </div>
  );
};
export default Chat;
