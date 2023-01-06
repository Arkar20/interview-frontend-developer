import "../styles/globals.css";
import type { AppProps } from "next/app";

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDTYFMLA5uo1gUp1tfH6HBWEJqPJwVPi2I",
  authDomain: "interview-react-chat-app.firebaseapp.com",
  databaseURL:
    "https://interview-react-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "interview-react-chat-app",
  storageBucket: "interview-react-chat-app.appspot.com",
  messagingSenderId: "79344266282",
  appId: "1:79344266282:web:63f403449e53d82e092753",
  measurementId: "G-HBNTMVZBDX",
});

const auth = getAuth();
const firestore = getFirestore(app);

function MyApp({ Component, pageProps }: AppProps) {
  const props = {
    ...pageProps,
    auth,
    firestore,
  };
  return <Component {...props} />;
}

export default MyApp;
