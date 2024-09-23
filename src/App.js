import React from 'react';
import NavbarComponent from './components/NavBar/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer greeting="Bienvenido a nuestra tienda" />
    </div>
  );
}

export default App;
