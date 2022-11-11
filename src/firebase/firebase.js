
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCgwRCDN-oChw0al89be2fCxKFWGsyjPE",
  authDomain: "kittens-quintana.firebaseapp.com",
  projectId: "kittens-quintana",
  storageBucket: "kittens-quintana.appspot.com",
  messagingSenderId: "249675219439",
  appId: "1:249675219439:web:7f5e2177fc37460e76f61a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);