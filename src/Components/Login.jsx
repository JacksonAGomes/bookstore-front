import { useState } from 'react';
import { Navigate } from "react-router-dom"
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';



function Login() {
    const [clicked, setClicked] = useState (false);
    const {setUser} = useContext(LoginContexto);
    var userLogged = {email: "jacksonanderson@gmail.com", nome:"Jackson Anderson", id:"1"}

    return   <>
                <h1>Login</h1>
                <p>Digite seu email</p>
                <input type="email" name="" id="1"/>
                <p>Digite sua senha</p>
                <input type="password" name="" id="2" />
                <button onClick={()=>{ 
                    setClicked(true);
                    setUser(userLogged);
                }}>Logar</button>
                {
                clicked && 
                    <Navigate replace to="/purchases"/>            
                }
            </>
  }
  
  export default Login;