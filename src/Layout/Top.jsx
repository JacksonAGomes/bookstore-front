import { Link } from 'react-router-dom'
import  './Top.css'
import { useContext } from 'react';
import { LoginContexto } from '../Context/LoginContexto';

function Top(){
    const {user} = useContext(LoginContexto);

    return (
        <>
        { user.id === "" &&

            <nav className="top">
                <ul className="topLogin">
                    <li className="itemLogin">
                        <Link to="/login">LOGIN</Link>
                    </li>
                </ul>
            </nav>
        }
        {
            user.id !== "" && 
            <div className='top'>
                <span className='message'>Olá, {user.nome}</span>
            </div>
        }
        </>

    )
}

export default Top;