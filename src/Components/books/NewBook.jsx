import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import './NewBook.css'

function NewBook(){

    const [clicked, setClicked] = useState(false);
    const [books, setBooks] = useState({
      title: "",
      synopsis: "",
      isbn: "",
      publicationYear: "",
      price: "",
      quantityInStock: "",
      authorName: ""
   });

const saveBook = () => {
    axios.post('http://localhost:8080/books', books)
    .then(response => {
      toast.success('Livro salvo com sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    setTimeout(() => {
      setClicked(true);
    }, 2000);      })
    .catch(error => {
      toast.error('Erro, verifique os dados e tente novamente', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
}

return(
    <div className="book">
        <h1 id="nBook">Novo Livro</h1>

        <input 
         type="name" 
         placeholder="Titulo:"
         name="title"
         id="1"
         className="input"
        onChange={ e => setBooks({...books, title: e.target.value })}
        />

        <input 
         type="name"
         placeholder="Sinopse:"
         name="synopsis"
         id="2"
         className="input"
         onChange={e => setBooks({...books, synopsis: e.target.value})}
        />

        <input 
         type="name"
         placeholder="ISBN:"
         name="isbn"
         id="3"
         className="input"
         onChange={e => setBooks({...books, isbn: e.target.value})}
        />

        <input 
         type="date"
         placeholder="Data de publicação:"
         name="publicationYear"
         id="4"
         className="input"
         onChange={e => setBooks({...books, publicationYear: e.target.value})}
        />

        <input 
         type="number"
         placeholder="Preço:"
         name="price"
         id="5"
         className="input"
         onChange={e => setBooks({...books, price: e.target.value})}
        />

        <input 
         type="number"
         placeholder="Quantidade em estoque:"
         name="quantityInStock"
         id="6"
         className="input"
         onChange={e => setBooks({...books, quantityInStock: e.target.value})}
        />

        <input 
         type="name"
         placeholder="Autor:"
         name="authorName"
         id="7"
         className="input"
         onChange={e => setBooks({...books, authorName: e.target.value})}
        />

        <div className="buttons">
            <button onClick={saveBook} id="bSave">Salvar</button>
            <button onClick={() => setClicked(true)} id="bCancel">Cancelar</button>
        </div>

        {clicked && <Navigate replace to="/books"/>}
        <ToastContainer />

    </div>
    )
}

export default NewBook;