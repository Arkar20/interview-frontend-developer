import React from "react";
import type { NextPage } from "next";
import { I_FirestoreAndAuth } from "../src/types";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatList } from "../src/components/atoms";
import { ChatForm } from "../src/components/templates/ChatForm";
const Chat: NextPage<I_FirestoreAndAuth> = (props) => {
  const messageRef = collection(props.firestore, "messages");
  const [messages] = useCollectionData(messageRef);

  return (
    <div>
      <h4 className="bg-blue-600 p-3 text-white text-2xl">Chat Room</h4>

      <ul className="m-3">
        {messages &&
          messages.map((message, index) => {
            return <ChatList key={index} text={message.text} />;
          })}
      </ul>

      <ChatForm firestore={props.firestore} auth={props.auth} />
    </div>
  );
};
export default Chat;
