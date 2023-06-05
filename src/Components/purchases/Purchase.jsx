import { useContext, useEffect, useState, useParams } from 'react';
import { LoginContexto } from '../../Context/LoginContexto';
import { Link } from 'react-router-dom';
import './Purchase.css';
import { Navigate } from "react-router-dom";
import axios from "axios";

function Purchase() {
  const [clicked, setClicked] = useState(false);
  const [purchases, setPurchases] = useState(null);
  const { user } = useContext(LoginContexto);

  useEffect(() => {
    axios.get(`http://localhost:8080/purchases/byClient/${user.id}`)
      .then(response => setPurchases(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='purchaseList'>
      {user.id === '' && (
        <div className="login">
          <h1>
            Para acessar esta página,{' '}
            <Link to="/login" className="login-link">
              faça Login
            </Link>
            .
          </h1>
        </div>
      )}
      {user.id !== '' && (
        <>
          <h1 id='nome'>Olá, {user.nome}</h1>
          <div className='tabela'>
          <table>
            <thead>
              <tr className='itemList'>
                <th>Data</th>
                <th>Valor</th>
                <th>Nome dos livros</th>
              </tr>
            </thead>
            <tbody>
              { purchases && purchases.map(purchase => (
                <tr className='itemList' key={purchase.id}>
                  <td>{purchase.purchaseDate.split("T")[0]}</td>
                  <td>{purchase.amount}</td>
                  <td>{purchase.purchasedBooks.map(book => {
                    return book.title+ ", "
                  })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="buttons">
      <button onClick={() => {
        setClicked(true);
      }} id="bNCompra">Nova Compra</button>
      {clicked && <Navigate replace to="/purchases/new"/>}
        </div>
        </>
      )}
    </div>
  );
}

export default Purchase;