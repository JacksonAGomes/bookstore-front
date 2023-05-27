import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from "./Components/Login";
import Client from "./Components/clients/Client";
import Book from "./Components/books/Book";
import Purchase from "./Components/purchases/Purchase";

function Rotas() {
    return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/books" element={<Book />} />
        <Route path="/purchase" element={<Purchase />} />
    </Routes>
    )
  }
  
  export default Rotas;