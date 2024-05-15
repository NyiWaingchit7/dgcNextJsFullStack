import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApRQEpG_p5IYGBzf6H2lvg_7t5qhySDus",
  authDomain: "dgc-project-e4bfc.firebaseapp.com",
  projectId: "dgc-project-e4bfc",
  storageBucket: "dgc-project-e4bfc.appspot.com",
  messagingSenderId: "69904204052",
  appId: "1:69904204052:web:624e42a89bbb32e0240201",
  measurementId: "G-MZFDKE0PHX",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
