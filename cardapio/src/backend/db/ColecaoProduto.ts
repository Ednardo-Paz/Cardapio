import { dataBase, auth } from '../config'
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
import { storage } from '../config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default class ColecaoProduto implements ProdutoRepositorio {


  getStorage(): Promise<any> {
    throw new Error('Method not implemented.')
  }

  #conversor = {
    toFirestore: (produto: Produto) => {
      return {
        nome: produto.nome,
        descricao: produto.descricao,
        tipo: produto.tipo,
        precoP: produto.precoP,
        precoM: produto.precoM,
        precoG: produto.precoG,
        foto: produto.foto
      }
    },
    fromFirestore: (
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions,
    ) => {
      const dados = snapshot.data(options)
      return new Produto(dados.nome, dados.tipo, dados.precoP, dados.precoM, dados.precoG, dados.descricao, dados.foto, snapshot.id)
    },
  }

  #colecaoProduto = collection(dataBase, 'produtos').withConverter(this.#conversor)

  signup(email: string, password: string) {
    try {
      createUserWithEmailAndPassword(auth, email, password)
    } catch {
      alert("Ërro")

    }
  }

  async getAllStorage() {
    let list: Produto[] = [];

    const imagensPasta = ref(storage, "img");
    const photoList = await listAll(imagensPasta);

    for (let i in photoList.items) {
      let fotoUrl = await getDownloadURL(photoList.items[i]);
      list.push({
        foto: fotoUrl,
        id: undefined,
        nome: undefined,
        tipo: undefined,
        precoP: undefined,
        precoM: undefined,
        precoG: undefined,
        descricao: undefined
      })
    }
    return list;
  }

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