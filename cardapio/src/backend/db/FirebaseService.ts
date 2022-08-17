import Usuario from "../../core/usuario/Usuario";
import UsuarioRepositorio from "../../core/usuario/UsuarioRepositorio";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../config";

export default class FirebaseService implements UsuarioRepositorio {
  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }
  async register(email: string, password: string) {
    try {
      createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log("Algo errado...")
    }
  }
  async logout() {
    signOut(auth)
  }

  auth() {
    return auth
  }

}