import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Layout/NavBar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Layout/Footer';
import Rotas from './Rotas';
import { LoginProvider } from './Context/LoginContexto';
import Top from './Layout/Top';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <LoginProvider>
  <div className='container'>
    <Top />

    <div className='content'>
      <NavBar />
      <Rotas />
    </div>
    
    <Footer />
  </div>

  </LoginProvider>
  </React.StrictMode>
  </BrowserRouter>
  );
reportWebVitals();
