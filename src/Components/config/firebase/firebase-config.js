import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAErkiD9gD2OMdT4lUJIOTLk5vFT_j4_X0",
  authDomain: "rakhacellular-db.firebaseapp.com",
  projectId: "rakhacellular-db",
  storageBucket: "rakhacellular-db.appspot.com",
  messagingSenderId: "426151224436",
  appId: "1:426151224436:web:b31f7f77b2cf69e7195d21",
  measurementId: "G-0Y4ZZK10TY",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
