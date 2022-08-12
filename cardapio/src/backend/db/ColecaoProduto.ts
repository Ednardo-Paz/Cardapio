import { dataBase } from '../config'
import firestore, {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import Produto from '../../core/produto/Produto'
import ProdutoRepositorio from '../../core/produto/ProdutoRepositorio'

export default class ColecaoProduto implements ProdutoRepositorio {

  #conversor = {
    toFirestore: (produto: Produto) => {
      return {
        nome: produto.nome,
        descricao: produto.descricao,
        tipo: produto.tipo,
        precoP: produto.precoP,
        precoM: produto.precoM,
        precoG: produto.precoG,
      }
    },
    fromFirestore: (
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions,
    ) => {
      const dados = snapshot.data(options)
      return new Produto(dados.nome, dados.tipo, dados.precoP, dados.precoM, dados.precoG, dados.descricao, snapshot.id)
    },
  }

  #colecaoProduto = collection(dataBase, 'produtos').withConverter(this.#conversor)

  async salvar(produto: Produto): Promise<Produto | any> {
    if (produto?.id) {
      await setDoc(
        doc(dataBase, 'produtos', produto.id).withConverter(this.#conversor),
        produto,
      )
      return produto
    } else {
      const docRef = await addDoc(
        this.#colecaoProduto,
        produto
      )
      const doc = await getDoc(docRef)
      return doc.data()
    }
  }

  async excluir(produto: any): Promise<void> {
    return await deleteDoc(doc(dataBase, 'produtos', produto.id))
  }

  async obterTodos(): Promise<Produto[]> {
    const produtosCol = this.#colecaoProduto
    const produtosSnapshot = await getDocs(produtosCol)
    const produtosList = produtosSnapshot.docs.map((doc) => doc.data()) ?? []
    return produtosList
  }
}