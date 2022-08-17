import React, { useState } from 'react'
import FirebaseService from '../backend/db/FirebaseService';
import UsuarioRepositorio from '../core/usuario/UsuarioRepositorio';

export const useUsuarioLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");


  const user: UsuarioRepositorio = new FirebaseService();


  function handleRegister() {
    user.register(email, password)
  }

  function handleLogin() {
    user.login(loginEmail, LoginPassword)
  }

  function handleLogout() {
    user.logout()
  }

  return {
    handleLogin,
    handleLogout,
    handleRegister,
    user,
    email,
    loginEmail,
    LoginPassword,
    password,
    setLoginEmail,
    setLoginPassword,
    setEmail,
    setPassword

  }
}
