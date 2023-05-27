import { Link } from 'react-router-dom'
import  './NavBar.css'

function NavBar(){
    return (
    <nav className="navbar">
        <ul className="list">
            <li className="item">
                <Link to="/">
                    HOME
                    <img src='/home.svg' alt='home icon' />
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