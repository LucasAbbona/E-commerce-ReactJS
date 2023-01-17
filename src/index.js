import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing/Landing';
import Cart from './components/NavBar/CartWidget/CartWidget'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import LandingSubscribe from './components/LandingSubscribe/LandingSubscribe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<Landing brand={"Luxury House"}/>}/>
    <Route path='/category/:category' element={<ItemListContainer />}/>
    <Route path="item/:id" element={<ItemDetailContainer />} />
    <Route path='/cart' />
    <Route path='/checkout' />
  </Routes>
  <LandingSubscribe />
  <Footer />
  </BrowserRouter>
  
);

reportWebVitals();
