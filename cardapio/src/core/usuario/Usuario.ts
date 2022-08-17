export default class Usuario {
  #senha?: string
  #email?: string

  constructor(senha: string, email: string) {
    this.#senha = senha
    this.#email = email
  }

  static vazio() {
    return new Usuario("", "")
  }
  get senha() {
    return this.#senha
  }
  get email() {
    return this.#email
  }
}