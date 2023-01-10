import { useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Firestore } from "firebase/firestore";
import { useAppDispatch } from "hooks/redux";
import { I_chatSingle } from "types";
import { addChats } from "rstore/modules";
import { fetchMessage } from "firebase";

export const useFirebaseChat = (
  firestore: Firestore,
  authId: string | undefined
) => {
  const queryRef = fetchMessage(firestore);
  const [messages] = useCollectionData(queryRef);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messages) {
      const newMessages: I_chatSingle[] = messages.map((message) => ({
        text: message.text,
        isOwner: message.uid === authId,
        uid: message.uuid,
      }));
      dispatch(addChats(newMessages));
    }
  }, [messages]);

  return [messages];
};
