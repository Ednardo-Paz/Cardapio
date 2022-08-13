import { getApp, initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTXAxQ2KxOptPlpcDtHYdwQhjO59FPJVg",
  authDomain: "next-crud-1622c.firebaseapp.com",
  projectId: "next-crud-1622c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const dataBase = getFirestore(app)
export { dataBase }