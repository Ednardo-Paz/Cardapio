import React from 'react'

interface BotaoProps {
  children: any;
  onClick?: () => void
}

const Botao = (props: BotaoProps) => {
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default Botao