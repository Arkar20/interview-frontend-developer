import React from "react";
import type { NextPage } from "next";
import { I_FirestoreAndAuth } from "../src/types";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatList } from "../src/components/atoms";
import { ChatForm } from "../src/components/templates/ChatForm";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

const Chat: NextPage<I_FirestoreAndAuth> = (props) => {
  const messageRef = collection(props.firestore, "messages");
  const [messages] = useCollectionData(messageRef);
  const [user] = useAuthState(props.auth);

  if (!user) {
    return (
      <div className="h-screen max-h-screen flex justify-center items-center">
        <div className="flex flex-col space-y-3">
          <h2 className="text-3xl font-semibold">Login First</h2>
          <Link href="/">Go To Login Page</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="bg-blue-600 p-3 text-white text-2xl">Chat Room</h4>

      <ul className="m-3 min-h-screen space-y-3 ">
        {messages &&
          messages.map((message, index) => {
            return (
              <ChatList
                key={index}
                text={message.text}
                isOwner={message.uid === props.auth.currentUser?.uid}
              />
            );
          })}
      </ul>

      <ChatForm firestore={props.firestore} auth={props.auth} />
    </div>
  );
};
export default Chat;
