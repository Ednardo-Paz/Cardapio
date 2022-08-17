import React from 'react'

interface BotaoProps {
  children: any;
  onClick?: () => void
  disabled?: boolean
}

const Botao = (props: BotaoProps) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
  )
}

export default Botao