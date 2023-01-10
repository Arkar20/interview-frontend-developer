import React, { useEffect } from "react";
import type { NextPage } from "next";
import { I_FirestoreAndAuth } from "types";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatList } from "src/components/templates";
import { ChatForm, Loading } from "../src/components/templates";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useAppDispatch } from "hooks/redux";
import { addChats } from "rstore/modules";
import { I_chatSingle } from "../types";

const Chat: NextPage<I_FirestoreAndAuth> = (props) => {
  const messageRef = collection(props.firestore, "messages");
  const queryRef = query(messageRef, orderBy("createdAt"));
  const [messages] = useCollectionData(queryRef);
  const [user, loading] = useAuthState(props.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messages) {
      const newMessages: I_chatSingle[] = messages.map((message) => ({
        text: message.text,
        isOwner: message.uid === props.auth.currentUser?.uid,
        uid: message.uuid,
      }));
      dispatch(addChats(newMessages));
    }
  }, [messages]);
  if (loading) {
    return <Loading />;
  }

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
      <div className="bg-blue-600 p-3 w-full">
        <h4 className="text-white text-2xl">Chat Room</h4>
      </div>

      <ChatList />

      <ChatForm firestore={props.firestore} auth={props.auth} />
    </div>
  );
};
export default Chat;
