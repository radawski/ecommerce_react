import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContenedorDetalleDelProducto from './components/contenedorDetalleDelProducto/ContenedorDetalleDelProducto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
            <Route path="/category/:category" element={<ItemListContainer greeting="Productos por categoría" />} />
            <Route path="/product/:id" element={<ContenedorDetalleDelProducto />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

