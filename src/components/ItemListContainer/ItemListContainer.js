import React from 'react';
import { Container } from 'react-bootstrap';
import ListaDeProductos from '../ListaDeProductos/listaDeProductos';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams(); // obtiene el parámetro category de la URL actual

  return (
    <Container className="mt-4">
      <h2 className="mb-4">{greeting}</h2>
      <ListaDeProductos category={category} /> {/* Pasa la categoría como prop al componente */}
    </Container>
  );
};

export default ItemListContainer;
