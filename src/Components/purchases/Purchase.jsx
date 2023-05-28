import { useContext } from 'react';
import { LoginContexto } from '../../Context/LoginContexto';
import { Link } from 'react-router-dom'



function Purchase() {
    const {user} = useContext(LoginContexto);

    return <>
    {
        user.id !== "" && <h1>Compra</h1>
    }
    {
        user.id === "" && 
        <div className='login'>
            <h1>Para acessar essa pagina, realize seu</h1>
            <ul >
                <li >
                    <Link to="/login"><strong>LOGIN</strong></Link>
                </li>
            </ul>   
        </div>     
    }
    </>
}

export default Purchase;

