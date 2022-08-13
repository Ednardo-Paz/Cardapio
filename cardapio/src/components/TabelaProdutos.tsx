import React from 'react'
import Produto from '../core/produto/Produto'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProdutoProps {
  produtos: Produto[]
  produtoSelecionado?: (produto: Produto) => void
  produtoExcluido?: (produto: Produto) => void
}

const TabelaProdutos = (props: TabelaProdutoProps) => {
  const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Tipo</th>
        {exibirAcoes ? <th className=" p-4">Ações</th> : false}
      </tr>
    )
  }
  function renderizarDados() {
    return props.produtos?.map((produto, i) => (
      <tr key={produto.id}
        className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
        <td className="text-left p-4">{produto.id}</td>
        <td className="text-left p-4">{produto.nome}</td>
        <td className="text-left p-4">{produto.tipo}</td>
        {exibirAcoes ? renderizarAcoes(produto) : false}
      </tr>
    ))
  }

  function renderizarAcoes(produto: Produto) {
    return (
      <td className="flex justify-center">
        {props.produtoSelecionado ? (
          <button onClick={() => props.produtoSelecionado?.(produto)} className={`flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-purple-50 m-1`}>
            {IconeEdicao}
          </button>
        ) : false}

        {props.produtoExcluido ? <button onClick={() => props.produtoExcluido?.(produto)} className={`flex justify-center items-center text-red-600 rounded-full p-2 hover:bg-purple-50 m-1`}>
          {IconeLixo}
        </button> : false}

      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-800
    `}>
        {renderizarCabecalho()}
      </thead>

      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}

export default TabelaProdutos