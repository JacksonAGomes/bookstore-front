import { Link } from 'react-router-dom'
import  './NavBar.css'

function NavBar(){
    return (
    <nav className="navbar">
        <ul className="list">
            <li className="item">
                <Link to="/">HOME</Link>
            </li>
            <li className="item">
                <Link to="/login">LOGIN</Link>
            </li>
            <li className="item">
                <Link to="/clients">CLIENTES</Link>
            </li>
            <li className="item">
                <Link to="/books">LIVROS</Link>
            </li>
            <li className="item">
                <Link to="/purchase">COMPRAS</Link>
            </li>
        </ul>
    </nav>
    )
}

export default NavBar;