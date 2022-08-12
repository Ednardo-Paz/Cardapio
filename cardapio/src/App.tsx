import { useEffect, useState } from 'react';
import './App.css'
import ColecaoProduto from './backend/db/ColecaoProduto'
import Produto from './core/produto/Produto';
import ProdutoRepositorio from './core/produto/ProdutoRepositorio'

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const repo: ProdutoRepositorio = new ColecaoProduto();


  useEffect(() => {
    repo.obterTodos().then(produtos => {
      setProdutos(produtos)
    })
  }, [])

  console.log(produtos.map(produto => produto.nome));

  return (
    <div>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>{produto.tipo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
