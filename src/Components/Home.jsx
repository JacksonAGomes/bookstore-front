import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

function Home() {
  const messages = [
    "Bem-vindo à nossa livraria online!",
    "Descubra uma vasta seleção de livros em nosso site!",
    "Aqui você encontrará os melhores livros para leitura!",
    "Explore nosso catálogo e encontre seu próximo livro favorito!",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="home">
      <h1 className="fixMessage">Seja bem-vindo ao Bookstore-IJM!</h1>
      <h1>{randomMessage}</h1>

      <h1>Faça agora o seu <Link className='linkStyle' to="/login">LOGIN</Link> e aproveite!</h1>
    </div>
  );
}

export default Home;
