import React from 'react'
interface InputProps {
  texto: string
  tipo?: "text" | "number"
  valor: any
  somenteLeitura?: boolean
  onChange?: (valor: any) => void
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label>
        {props.texto}
      </label>
      <input type={props.tipo ?? "text"} value={props.valor} readOnly={props.somenteLeitura} onChange={e => props.onChange?.(e.target.value)} />
    </div>
  )
}

export default Input