export default class Usuario {
  #id?: string
  #email?: string

  constructor(id: string, email: string) {
    this.#id = id
    this.#email = email
  }

  static vazio() {
    return new Usuario("", "")
  }
  get id() {
    return this.#id
  }
  get email() {
    return this.#email
  }
}