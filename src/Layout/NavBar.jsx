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
                <Link to="/clients">CLIENTES</Link>
            </li>
            <li className="item">
                <Link to="/books">LIVROS</Link>
            </li>
            <li className="item">
                <Link to="/purchases">COMPRAS</Link>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;