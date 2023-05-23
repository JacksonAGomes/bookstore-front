import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Layout/NavBar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
