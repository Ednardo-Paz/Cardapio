import { getApp, initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTXAxQ2KxOptPlpcDtHYdwQhjO59FPJVg",
  authDomain: "next-crud-1622c.firebaseapp.com",
  projectId: "next-crud-1622c",
  storageBucket: "next-crud-1622c.appspot.com",
  messagingSenderId: "123543117887",
  appId: "1:123543117887:web:7330008682ab8924a4988a"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const dataBase = getFirestore(app)
const firebaseApp = getApp();
const storage = getStorage(app);
const auth = getAuth(app);
export { dataBase, storage, auth, app }



