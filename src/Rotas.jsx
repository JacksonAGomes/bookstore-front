import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Components/Login";
import Client from "./Components/clients/Client";
import Book from "./Components/books/Book";
import Purchase from "./Components/purchases/Purchase";
import NewCLient from "./Components/clients/NewClient";
import EditClient from "./Components/clients/EditClient";

function Rotas() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/clients/new" element={<NewCLient />} />
        <Route path="/clients/:clientId" element={<EditClient />} />
        <Route path="/books" element={<Book />} />
        <Route path="/purchases" element={<Purchase />} />
        <Route path="/*" element={<Home />} />
    </Routes>
    )
  }
  
  export default Rotas;