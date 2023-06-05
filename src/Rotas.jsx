import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Components/Login";
import Client from "./Components/clients/Client";
import Book from "./Components/books/Book";
import Purchase from "./Components/purchases/Purchase";
import NewCLient from "./Components/clients/NewClient";
import EditClient from "./Components/clients/EditClient";
import NewBook from "./Components/books/NewBook";
import EditBook from "./Components/books/EditBook";
import DeleteClient from "./Components/clients/DeleteClient";
import DeleteBook from "./Components/books/DeleteBook";
import NewPurchase from "./Components/purchases/NewPurchase";

function Rotas() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/clients/new" element={<NewCLient />} />
        <Route path="/clients/:clientId" element={<EditClient />} />
        <Route path="/clients/:clientId/delete" element={<DeleteClient />} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="/books/:bookId" element={<EditBook />} />
        <Route path="/books/:bookId/delete" element={<DeleteBook />} />
        <Route path="/purchases" element={<Purchase />} />
        <Route path="/purchases/:purchaseId" element={<NewPurchase/>} />
        <Route path="/*" element={<Home />} />
    </Routes>
    )
  }
  
  export default Rotas;