import { Link } from 'react-router-dom'
import  './Top.css'
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';

function Top(){
    const {user} = useContext(LoginContexto);

    return (
        <>

            <div className='top'>
            {
            user.id !== "" && 
                <span className='message'>Olá, {user.nome}</span>
            }
            </div>
        </>

    )
}

export default Top;