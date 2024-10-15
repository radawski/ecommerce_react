import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContenedorDetalleDelProducto from './components/contenedorDetalleDelProducto/ContenedorDetalleDelProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Productos por categoría" />} />
          <Route path="/product/:id" element={<ContenedorDetalleDelProducto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

