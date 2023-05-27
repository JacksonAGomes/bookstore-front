import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Layout/NavBar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Layout/Footer';
import Rotas from './Rotas';
import { LoginContexto } from './LoginContexto';
import Top from './Layout/Top';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContexto.Provider value={{nome:"", email:"", id:""}}>
  <BrowserRouter>
  <React.StrictMode>
    <Top />
    <NavBar />
    <Rotas />
    <Footer />
  </React.StrictMode>
  </BrowserRouter>
  </LoginContexto.Provider>
  );
reportWebVitals();
