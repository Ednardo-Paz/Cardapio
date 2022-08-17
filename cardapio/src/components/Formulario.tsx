import React, { useState } from 'react'
import Produto from '../core/produto/Produto'
import Botao from './Botao'
import Input from './Input'
interface FormularioProps {
  produto?: Produto
  produtoMudou?: (produto: Produto) => void
  cancelado?: () => void
}

const Formulario = (props: FormularioProps) => {
  const id = props.produto?.id
  const [nome, setNome] = useState(props.produto?.nome ?? "")
  const [tipo, setTipo] = useState(props.produto?.tipo ?? "")
  const [precoP, setPrecoP] = useState(props.produto?.tipo ?? "")
  const [precoM, setPrecoM] = useState(props.produto?.tipo ?? "")
  const [precoG, setPrecoG] = useState(props.produto?.tipo ?? "")
  const [fotoAtual, setFotoAtual] = useState(props.produto?.foto ?? "")
  const [descricao, setDescricao] = useState(props.produto?.tipo ?? "")
  return (
    <div>
      {id ? (
        <Input somenteLeitura texto="Código" valor={id} />
      ) : false}
      <Input texto="Nome" valor={nome} onChange={setNome} />
      <Input texto="Tipo" valor={tipo} onChange={setTipo} />
      <Input texto="precoP" valor={precoP} onChange={setPrecoP} />
      <Input texto="precoM" valor={precoM} onChange={setPrecoM} />
      <Input texto="precoG" valor={precoG} onChange={setPrecoG} />
      <Input texto="descricao" valor={descricao} onChange={setDescricao} />

      <Botao onClick={() => props.produtoMudou?.(new Produto(nome, tipo, precoP, precoM, precoG, descricao, fotoAtual, id as string))}>{id ? "Alterar" : "Salvar"}</Botao>
      <Botao onClick={props.cancelado}>Cancelar</Botao>
    </div>
  )
}

export default Formulario