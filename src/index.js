import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cart from './components/CartWidget'
import NavBar from './components/NavBar';
import './components/styles.css';
import Landing from './components/ItemListContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <NavBar />
  <Landing brand={"Luxury House"}/>
  </>
  
);

reportWebVitals();
