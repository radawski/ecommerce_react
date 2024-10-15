import React from 'react';
import { Container } from 'react-bootstrap';
import ListaDeProductos from '../ListaDeProductos/listaDeProductos';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams(); // Obtiene la categoría de la URL

  return (
    <Container className="mt-4">
      <h2 className="mb-4">{greeting}</h2>
      <ListaDeProductos category={category} /> {/* Pasa la categoría al componente */}
    </Container>
  );
};

export default ItemListContainer;
