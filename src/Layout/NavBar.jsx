import { Link } from 'react-router-dom'
import  './NavBar.css'

function NavBar(){
    return (
    <nav className="navbar">
        <ul className="list">
            <li className="item">
                <Link to="/">
                <img src='/home.svg' alt='home icon' />
                    HOME
                </Link>
            </li>
            <li className="item">
                <Link to="/clients">
                <img src='/user.svg' alt='user icon' />    
                    CLIENTES
                </Link>
            </li>
            <li className="item">
                <Link to="/books">
                <img src='/books.svg' alt='book icon' /> 
                    LIVROS
                </Link>
            </li>
            <li className="item">
                <Link to="/purchases">
                <img src='/shop.svg' alt='shop icon' />
                    COMPRAS
                </Link>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;