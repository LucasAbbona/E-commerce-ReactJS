import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import LandingSubscribe from './components/LandingSubscribe/LandingSubscribe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/cartProvider';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/checkout';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpY-FtnbjA56NLUXl092CraDMo7CoyxtY",
  authDomain: "coderhouse-ecommerce-fe997.firebaseapp.com",
  projectId: "coderhouse-ecommerce-fe997",
  storageBucket: "coderhouse-ecommerce-fe997.appspot.com",
  messagingSenderId: "524611158980",
  appId: "1:524611158980:web:e5b13e110fb956b0999a91"
};
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <CartProvider>
  <NavBar />
  <Routes>
    <Route path='/' element={<Landing brand={"Luxury House"}/>}/>
    <Route path='/category' element={<ItemListContainer />}/>
    <Route path='/category/:category' element={<ItemListContainer />}/>
    <Route path="item/:id" element={<ItemDetailContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
  <LandingSubscribe />
  <Footer />
  </CartProvider>
  </BrowserRouter>
  
);

reportWebVitals();
