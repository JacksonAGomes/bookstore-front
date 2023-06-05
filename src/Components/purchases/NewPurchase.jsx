import { useContext, useEffect, useState } from 'react';
import { LoginContexto } from '../../Context/LoginContexto';
import './NewPurchase.css';
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPurchase() {
  const [books, setBooks] = useState(null);
  const { user } = useContext(LoginContexto);
  const [clicked, setClicked] = useState(false);


  const [purchase, setPurchase] = useState({
    client: user.id,
    purchasedBooks: [],
  });

  const savePurchase = () => {
    axios.post('http://localhost:8080/purchases', purchase)
    .then(response => {
      toast.success('Compra realizada!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    setTimeout(() => {
      setClicked(true);
    }, 2000);      })
    .catch(error => {
      toast.error('Erro ao comprar', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
}

const addBook = (bookId) => {
    setPurchase(prevPurchase => ({
      ...prevPurchase,
      purchasedBooks: [...prevPurchase.purchasedBooks, bookId]
    }));
  };

  const removeBook = (bookId) => {
    setPurchase(prevPurchase => ({
      ...prevPurchase,
      purchasedBooks: prevPurchase.purchasedBooks.filter(uuid => uuid !== bookId)
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error));
  }, [purchase]);

  const count = (bookId) => {
    return purchase.purchasedBooks.filter((uuid) => uuid === bookId).length
    }

  return (
    <div className="bookList">
      <div className="tabela">
        <table>
          <thead>
            <tr className="itemList">
              <th>Título</th>
              <th>Sinopse</th>
              <th>ISBN</th>
              <th>Preço</th>
              <th>Quantidade em estoque</th>
              <th>Nome do autor</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <tr className="itemList" key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.synopsis}</td>
                  <td>{book.isbn}</td>
                  <td>{book.price}</td>
                  <td>{book.quantityInStock}</td>
                  <td>{book.authorName}</td>
                  <td>
                    <button onClick={() => addBook(book.uuid)} className='addAndRemove'>
                      adicionar
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeBook(book.uuid)} className='addAndRemove'> 
                      remover
                    </button>
                  </td>
                  <td>{count(book.uuid)}</td> 
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button onClick={savePurchase} id="bSave">Comprar</button>
        <button onClick={() => setClicked(true)} id="bCancel">Cancelar</button>
      </div>

      {clicked && <Navigate replace to="/purchases" />}

      <ToastContainer />
      </div>
  );
}

export default NewPurchase;