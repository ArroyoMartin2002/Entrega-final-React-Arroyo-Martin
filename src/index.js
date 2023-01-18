/*Importaciones*/

/* Modulos */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";

/* Estilos */
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

/* Componentes */
/* import App from './App'; */
import NavBar from './components/navbar/NavBar.js'
import Home from './components/home/Home';
import ItemlistContainer from './components/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer';
import AboutUs from './components/abouUs/AboutUs'; 
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Contact from './components/contact/Contact';




/* Web vitals */
import reportWebVitals from './reportWebVitals';


////////* Logica *//////////
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<ItemlistContainer/>}/>
        <Route exact path='products/category/:categoryId' element={<ItemlistContainer/>}/>
        <Route exact path='product/:productId' element={<ItemDetailContainer/>}/>+
        <Route exact path='/aboutus' element={<AboutUs/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
