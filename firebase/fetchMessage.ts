import { collection, query, orderBy } from "firebase/firestore";
import { Firestore } from "firebase/firestore";

export const fetchMessage = (firestore: Firestore) => {
  const messageRef = collection(firestore, "messages");
  const queryRef = query(messageRef, orderBy("createdAt"));

  return queryRef;
};
