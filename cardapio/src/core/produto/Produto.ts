export default class Produto {
  #id?: string | null
  #nome?: string
  #tipo?: string
  #precoP?: string
  #precoM?: string
  #precoG?: string
  #descricao?: string
  #foto?: string
  #criacao?: string
  #usuario?: string

  constructor(nome: string, tipo: string, precoP: string, precoM: string, precoG: string, descricao: string, foto: string, usuario: string, criacao: string, id: string | null) {
    this.#nome = nome
    this.#tipo = tipo
    this.#precoP = precoP
    this.#precoM = precoM
    this.#precoG = precoG
    this.#descricao = descricao
    this.#foto = foto
    this.#criacao = criacao
    this.#usuario = usuario
    this.#id = id
  }

  static vazio() {
    return new Produto("", "", "", "", "", "", "", "", "", null)
  }
  get id() {
    return this.#id
  }
  get nome() {
    return this.#nome
  }
  get tipo() {
    return this.#tipo
  }
  get precoP() {
    return this.#precoP
  }
  get precoM() {
    return this.#precoM
  }
  get precoG() {
    return this.#precoG
  }
  get foto() {
    return this.#foto
  }
  get criacao() {
    return this.#criacao
  }
  get usuario() {
    return this.#usuario
  }
  get descricao() {
    return this.#descricao
  }
}