import { useState } from 'react';
import { Navigate } from "react-router-dom"
import { useContext } from 'react';
import { LoginContexto } from '../LoginContexto';



function Login() {
    const [clicked, setClicked] = useState (false);
    const user = useContext(LoginContexto);
    var userLogged = {email: "jacksonanderson@gmail.com", nome:"Jackson Anderson", id:"1"}

    return   <>
                <h1>Login</h1>
                <p>Digite seu email</p>
                <input type="email" name="" id="1"/>
                <p>Digite sua senha</p>
                <input type="password" name="" id="2" />
                <button onClick={()=>{ 
                    setClicked(true)
                    user.email = "jacksonanderson@gmail.com"
                    user.id = "1"
                    user.nome = "Jackson Anderson"
                }}>Logar</button>
                {
                clicked && 
                    <Navigate replace to="/home"/>            
                }
            </>
  }
  
  export default Login;