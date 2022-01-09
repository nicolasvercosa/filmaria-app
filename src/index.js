import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './toastify_custom.css'


import Home from './pages/Home';
import Header from './components/Header'
import Error from './pages/Error';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="*" element={<Error />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

