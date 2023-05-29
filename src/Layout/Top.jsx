import { Link } from 'react-router-dom'
import  './Top.css'
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';

function Top(){
    const {user} = useContext(LoginContexto);

    return (
        <div className='top'>
            <div className='logo'>
                <img src='/logo2.svg' alt='logo1 icon'/>
            </div>

            <div>
            {
            user.id !== "" && 
                <span className='message'>Olá, {user.nome}</span>
            }
            </div>
        </div>

    )
}

export default Top;