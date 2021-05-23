import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8pS1FUBSGkGR94tJpKSXrnUr0PIwGkdg",
  authDomain: "clone-2-e1e01.firebaseapp.com",
  projectId: "clone-2-e1e01",
  storageBucket: "clone-2-e1e01.appspot.com",
  messagingSenderId: "85486973857",
  appId: "1:85486973857:web:ab392d45eb4a0dcb0951e0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
