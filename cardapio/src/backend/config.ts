import { getApp, initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: "cantinhodbolos-a1ee2",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const dataBase = getFirestore(app)
export { dataBase }