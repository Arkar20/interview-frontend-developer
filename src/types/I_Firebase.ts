import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface I_FirestoreAndAuth {
  auth: Auth;
  firestore: Firestore;
}
