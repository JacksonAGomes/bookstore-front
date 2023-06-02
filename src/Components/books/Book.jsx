import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Book.css'

function Book() {
    const [clicked, setClicked] = useState(false);
    const [books, setBooks] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/books')
        .then(response => setBooks(response.data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="bookList">
            <div className="tabela">
                <table>
                <thead>
                    <tr className="itemList">
                        <th>Título</th>
                        <th>Sinopse</th>
                        <th>ISBN</th>
                        <th>Data de publicação</th>
                        <th>Preço</th>
                        <th>Quantidade em estoque</th>
                        <th>Nome do autor</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map(book =>(
                        <tr className="itemList" key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.synopsis}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publicationYear.split('T')[0]}</td>
                            <td>{book.price}</td>
                            <td>{book.quantityInStock}</td>
                            <td>{book.authorName}</td>
                            <td className='icon'>
                                <Link to={`/books/${book.uuid}`}>
                                <img src='/edit.svg' alt='edit icon' />
                                </Link>
                            </td>
                            <td className='icon'> 
                                <Link to={`/books/${book.uuid}/delete`}>
                                <img src='/delete.svg' alt='delete icon' />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="buttons">
                <button onClick={() => {
                    setClicked(true);
                }} id="bNewBook" >Novo Livro</button>
                {clicked && <Navigate replace to="/books/new"/>}
            </div>                

        </div>

    )
}

export default Book;