import React, { useState } from 'react'
import { auth } from '../backend/config'
import Produto from '../core/produto/Produto'
import Botao from './Botao'
import Input from './Input'
interface FormularioProps {
  produto?: Produto
  produtoMudou?: (produto: Produto) => void
  cancelado?: () => void
  onChange?: (e: any) => void
  file: any
}

const Formulario = (props: FormularioProps) => {

  const id = props.produto?.id
  const [nome, setNome] = useState(props.produto?.nome ?? "")
  const [tipo, setTipo] = useState(props.produto?.tipo ?? "")
  const [precoP, setPrecoP] = useState(props.produto?.precoP ?? "")
  const [precoM, setPrecoM] = useState(props.produto?.precoM ?? "")
  const [precoG, setPrecoG] = useState(props.produto?.precoG ?? "")
  const [descricao, setDescricao] = useState(props.produto?.descricao ?? "")
  const criacao = new Date()

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
      <input type="file" onChange={props.onChange} />

      <Botao onClick={() => props.produtoMudou?.(new Produto(
        nome,
        tipo,
        precoP,
        precoM,
        precoG,
        descricao,
        id && props.produto?.foto === "" && props.file?.name == "" ?
          props.produto?.foto :
          id && props.produto?.foto === "" && props.file?.name ?
            props.file?.name :
            id && props.produto?.foto !== "" && props.file?.name ?
              props.file?.name : "",
        auth.currentUser?.email as string,
        criacao as unknown as string, id as string))}>
        {id ? "Alterar" : "Salvar"}
      </Botao>
      <Botao onClick={props.cancelado}>Cancelar</Botao>
    </div>
  )
}

export default Formulario