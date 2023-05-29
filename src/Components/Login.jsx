import { useState } from 'react';
import { Navigate } from "react-router-dom"
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';
import './Login.css'



function Login() {
    const [clicked, setClicked] = useState (false);
    const {setUser} = useContext(LoginContexto);
    var userLogged = {email: "jacksonanderson@gmail.com", nome:"Jackson Anderson", id:"1"}

    return (
        <div className='login'>
             <h1 className='text1'>Login</h1>

                <p className='text2'>Digite seu email</p>
                <input type="email" placeholder="Email:" name="" id="1" className='input'/>

                <p className='text3'>Digite sua senha</p>
                <input type="password" placeholder="Senha:" name="" id="2" className='input'/>

                <button onClick={()=>{ 
                    setClicked(true);
                    setUser(userLogged);
                }} className='button'>
                    Logar
                </button>
                {
                clicked && 
                    <Navigate replace to="/purchases"/>            
                }
        </div>
    )      
  }
  
  export default Login;