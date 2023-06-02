import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import './DeleteBook.css'



function DeleteBook(){

    const { bookId } = useParams();
    const [clicked, setClicked] = useState(false);
    const [books, setBooks] = useState({
        title: "",
        synopsis: "",
        isbn: "",
        price: "",
        quantityInStock: "",
        authorName: ""
    });

    useEffect(() =>{
        const obterLivro = async () => {
        try {
            const resposta = await axios.get(`http://localhost:8080/books/${bookId}`);
            setBooks(resposta.data);
        } catch (erro) {
            setTimeout(() => {
                setClicked(true);
            }, 2000);      
            toast.error('Erro, verifique os dados e tente novamente', {
              position: toast.POSITION.BOTTOM_RIGHT
            });
        }    
    };
    obterLivro();
}, []);

const deleteBook = () => {
    axios.delete(`http://localhost:8080/books/${bookId}`)
      .then(response => {
        toast.success('Livro deletado com sucesso!', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setTimeout(() => {
          setClicked(true);
        }, 2000);
      })
      .catch(error => {
        toast.error('Não foi possível deletar', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
}

return (
    <div className="book">
        <h1 id="nBook">Deseja deletar?</h1>

        <input 
         type="name" 
         placeholder="Titulo:"
         name="title"
         id="1"
         disabled
         className="input"
         value={books.title}
         onChange={ e => setBooks({...books, title: e.target.value })}
        />

        <input 
         type="name"
         placeholder="Sinopse:"
         name="synopsis"
         id="2"
         disabled
         className="input"
         value={books.synopsis}
         onChange={e => setBooks({...books, synopsis: e.target.value})}
        />

        <input 
         type="name"
         placeholder="ISBN:"
         name="isbn"
         id="3"
         disabled
         className="input"
         value={books.isbn}
         onChange={e => setBooks({...books, isbn: e.target.value})}
        />

        <input 
         type="number"
         placeholder="Preço"
         name="price"
         id="5"
         disabled
         className="input"
         value={books.price}
         onChange={e => setBooks({...books, price: e.target.value})}
        />

        <input 
         type="number"
         placeholder="Quantidade em estoque:"
         name="quantityInStock"
         id="6"
         disabled
         className="input"
         value={books.quantityInStock}
         onChange={e => setBooks({...books, quantityInStock: e.target.value})}
        />

        <input 
         type="name"
         placeholder="Autor"
         name="authorName"
         id="7"
         disabled
         className="input"
         value={books.authorName}
         onChange={e => setBooks({...books, authorName: e.target.value})}
        />

        <div className="buttons">
            <button onClick={deleteBook} id="bSave">Deletar</button>
            <button onClick={() => setClicked(true)} id="bCancel">Cancelar</button>
        </div>

        {clicked && <Navigate replace to="/books"/>}
        <ToastContainer />

    </div>

)


}
export default DeleteBook;