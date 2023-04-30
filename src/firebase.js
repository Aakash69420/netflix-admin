import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0gRafavh03_dFCfLyHlDKYq_NkunKD8M",
  authDomain: "netflix-clone-44f49.firebaseapp.com",
  projectId: "netflix-clone-44f49",
  storageBucket: "netflix-clone-44f49.appspot.com",
  messagingSenderId: "784186745089",
  appId: "1:784186745089:web:f0aa05af6bee1c572e7b00",
  measurementId: "G-V1MLRH0TKL",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
