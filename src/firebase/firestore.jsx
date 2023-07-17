// initalazing firestore
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebaseConfig";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
