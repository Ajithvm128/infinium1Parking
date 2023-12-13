import { initializeApp } from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvvXcgl2t-nXoQ-TBQUTfcn5ppirOX9Zc",
  authDomain: "accelinfinium1parking-6f4f3.firebaseapp.com",
  databaseURL:
    "https://accelinfinium1parking-6f4f3-default-rtdb.firebaseio.com",
  projectId: "accelinfinium1parking-6f4f3",
  storageBucket: "accelinfinium1parking-6f4f3.appspot.com",
  messagingSenderId: "701419639585",
  appId: "1:701419639585:web:ee0a7c7057cda066aca460",
  measurementId: "G-02FSL41C63",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
