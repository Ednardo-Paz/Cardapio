import { useState, useEffect } from "react";
import ColecaoProduto from "../backend/db/ColecaoProduto";
import Produto from "../core/produto/Produto";
import ProdutoRepositorio from "../core/produto/ProdutoRepositorio";

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>(Produto.vazio())
  const [visivel, setVisivel] = useState<"form" | "tabela">("tabela");
  const [carregando, setCarregando] = useState(false);
  const [fotos, setFotos] = useState<Produto[]>([])

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
    setProduto(produto);
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
    setVisivel
  }

}