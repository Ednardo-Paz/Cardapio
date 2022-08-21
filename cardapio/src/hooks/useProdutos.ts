import { useState, useEffect } from "react";
import ColecaoProduto from "../backend/db/ColecaoProduto";
import FirebaseService from "../backend/db/FirebaseService";
import Produto from "../core/produto/Produto";
import ProdutoRepositorio from "../core/produto/ProdutoRepositorio";
import { getDownloadURL } from "firebase/storage";

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>(Produto.vazio())
  const [visivel, setVisivel] = useState<"form" | "tabela">("tabela");
  const [carregando, setCarregando] = useState(false);
  const [fotos, setFotos] = useState<Produto[]>([])
  const [file, setFile] = useState("");
  const [error, setError] = useState<string | null>(null);
  const types = ["image/png", "image/jpeg"];

  const repo: ProdutoRepositorio = new ColecaoProduto();



  useEffect(() => {
    repo.getAllStorage().then(fotos => {
      setFotos(fotos);
    })
  }, [])

  function obterTodos() {
    setCarregando(true)
    repo.obterTodos().then(produtos => {
      setProdutos(produtos)
      setVisivel('tabela')
      setCarregando(false)
    })
  }
  useEffect(() => {
    obterTodos()
  }, [])

  function produtoSelecionado(produto: Produto) {
    console.log(produto);

    setProduto(produto);
    setFile(file)
    setVisivel('form')
  }
  function produtoNovo() {
    setProduto(Produto.vazio);
    setVisivel('form')
  }
  function produtoExcluido(produto: Produto) {
    setCarregando(true)
    repo.excluir(produto)
    obterTodos()
  }
  async function salvarProduto(produto: Produto) {
    setCarregando(true)
    await repo.salvar(produto)
    obterTodos()
    setVisivel('tabela')
    await repo.setStorage(file).then((res: any) => {
      alert("Foi")
    })
    // await getDownloadURL(await repo.setStorage(file).snapshot.ref).then((url) => {
    //   console.log(url);
    // })
  }
  // console.log(repo.setStorage(file).on(
  //   "state_changed",
  //   (snapshot: any) => {
  //     console.log(getDownloadURL(repo.setStorage(file).snapshot.ref).then((res) => {
  //       console.log(res);

  //     }));

  //   },
  //   () => {

  //   }
  // ));


  function changeHandler(e: any) {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError("")
    } else {
      setFile("")
      setError('Usar somente imagens com os arquivos (.png ou .jpej)')
    }
  }

  return {
    produtoSelecionado,
    produtoExcluido,
    salvarProduto,
    produtoNovo,
    produtos,
    produto,
    visivel,
    carregando,
    setVisivel,
    changeHandler,
    file,
    setFile,
    error,
    setError,
  }

}