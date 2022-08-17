import React, { useState } from 'react'
import ColecaoProduto from '../backend/db/ColecaoProduto';
import colecaoUsuario from '../backend/db/FirebaseService';
import ProdutoRepositorio from '../core/produto/ProdutoRepositorio';
import UsuarioRepositorio from '../core/usuario/UsuarioRepositorio';
import Botao from './Botao'
import Input from './Input';
import { auth } from ".././backend/config";


const FormularioUsuario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");


  const user: UsuarioRepositorio = new colecaoUsuario();


  function handleRegister() {
    user.register(email, password)
  }

  function handleLogin() {
    user.login(loginEmail, LoginPassword)
  }

  function handleLogout() {
    user.logout()
  }

  return (
    <>
      <div>
        <div>
          <h1>Registrar User</h1>
          <Input texto='Email' valor={email} tipo={"text"} onChange={setEmail} />
          <Input texto='Senha' valor={password} tipo={"text"} onChange={setPassword} />
          <Botao onClick={handleRegister}>Criar Usuário</Botao>
        </div>

        <div>
          <h1>Login</h1>
          <Input texto='Email' valor={loginEmail} tipo={"text"} onChange={setLoginEmail} />
          <Input texto='Senha' valor={LoginPassword} tipo={"text"} onChange={setLoginPassword} />
          <Botao onClick={handleLogin}>signup</Botao>
        </div>

        <h3>User Login</h3>
        {user.auth()?.currentUser?.email}
        <Botao onClick={handleLogout}>Sign Out</Botao>
      </div>
    </>
  )
}

export default FormularioUsuario