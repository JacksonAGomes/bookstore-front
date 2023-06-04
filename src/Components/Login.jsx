import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUser } = useContext(LoginContexto);
  var userLogged = { email: 'jacksonanderson@gmail.com', nome: 'Irla Arruda', id: 'cdc3c85e-0271-47c1-8554-ce58a21f1963' };

  const handleLogin = () => {
    if (email === 'irla@gmail.com' && senha === '123') {
      setUser(userLogged);
      toast.success('Login realizado com sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setTimeout(() => {
        setClicked(true);
      }, 2000);
    } else {
      toast.error('Email ou senha incorretos. Por favor, tente novamente.', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setSenha('');
      setEmail('');
    }
  };

  return (
    <div className="login">
      <h1 className="text1">Login</h1>

      <p className="text2">Digite seu email</p>
      <input
        type="email"
        placeholder="Email:"
        name=""
        id="1"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p className="text3">Digite sua senha</p>
      <input
        type="password"
        placeholder="Senha:"
        name=""
        id="2"
        className="input"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin} className="button">
        Logar
      </button>

      {clicked && <Navigate replace to="/purchases" />}

      <ToastContainer />
    </div>
  );
}

export default Login;
