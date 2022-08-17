import Botao from './Botao'
import Input from './Input';
import { useUsuarioLogin } from '../hooks/useUsuarioLogin';


const FormularioUsuario = () => {

  const { email, handleLogin, handleRegister, setEmail, setPassword, password, loginEmail, setLoginEmail, setLoginPassword, LoginPassword, user, handleLogout } = useUsuarioLogin();

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