import React from "react";
import type { NextPage } from "next";
import { I_FirestoreAndAuth } from "types";
import { ChatList } from "src/components/templates";
import { ChatForm, Loading } from "../src/components/templates";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useFirebaseChat } from "hooks/useFirebaseChat";

const Chat: NextPage<I_FirestoreAndAuth> = (props) => {
  const [user, loading] = useAuthState(props.auth);

  useFirebaseChat(props.firestore, props.auth.currentUser?.uid);

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
      <div className="bg-blue-600 p-3 w-full flex space-x-3 items-center">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        <h4 className="text-white text-2xl">Chat Room</h4>
      </div>

      <ChatList />

      <ChatForm firestore={props.firestore} auth={props.auth} />
    </div>
  );
};
export default Chat;
