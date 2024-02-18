import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFwqiOMA1N5e8y_TkTJlp6SJ7Q_S1ILyk",
  authDomain: "netflix-clone-pr-7952a.firebaseapp.com",
  projectId: "netflix-clone-pr-7952a",
  storageBucket: "netflix-clone-pr-7952a.appspot.com",
  messagingSenderId: "531888922067",
  appId: "1:531888922067:web:b379cc56749510f9876326",
  measurementId: "G-C8RV8VHJY8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
