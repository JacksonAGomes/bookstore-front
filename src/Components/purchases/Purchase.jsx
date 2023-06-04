import { useContext } from 'react';
import { LoginContexto } from '../../Context/LoginContexto';
import { Link } from 'react-router-dom';
import './Purchase.css';

function Purchase() {
  const { user } = useContext(LoginContexto);

  return (
    <div className="purchase">
      {user.id !== '' ? (
        <h1>Compra</h1>
      ) : (
        <div className="login">
          <h1>Para acessar esta página,  <Link to="/login" className="login-link">
            faça Login
          </Link>:
          </h1>
         
        </div>
      )}
    </div>
  );
}

export default Purchase;
