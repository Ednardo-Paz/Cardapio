import { Auth } from "firebase/auth";
import Usuario from "./Usuario";

export default interface UsuarioRepositorio {
  register(email: string, password: string): Promise<any>
  login(email: string, password: string): Promise<any>
  logout(): Promise<any>
  auth(): Auth
}