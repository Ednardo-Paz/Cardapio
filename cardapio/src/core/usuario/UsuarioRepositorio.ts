import { Auth } from "firebase/auth";

export default interface UsuarioRepositorio {
  register(email: string, password: string): Promise<any>
  login(email: string, password: string): Promise<any>
  logout(): Promise<any>
  auth(): Auth
}