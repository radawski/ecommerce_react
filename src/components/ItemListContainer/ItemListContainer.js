import React from 'react';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4">
      <h2>{greeting}</h2>
      <p>Aquí se mostrarán los productos cuando estén disponibles.</p>
    </Container>
  );
};

export default ItemListContainer;