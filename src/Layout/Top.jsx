import { Link } from 'react-router-dom'
import  './Top.css'

function Top(){
    return (
    <nav className="top">
        <ul className="topLogin">
            <li className="itemLogin">
                <Link to="/login">LOGIN</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Top;