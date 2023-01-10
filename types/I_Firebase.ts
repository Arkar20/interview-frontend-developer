import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface I_FirestoreAndAuth {
  auth: Auth;
  firestore: Firestore;
}

interface I_chatSingle {
  text: string;
  isOwner: boolean;
  uid: string;
}

interface I_chats {
  chats: I_chatSingle[];
  loading: boolean;
}
