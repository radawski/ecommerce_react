import React from 'react';
import { Nav } from 'react-bootstrap';
import cartIcon from '../CartWidget/assets/cart-icon.svg';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado de items en el carrito

  return (
    <Nav.Link href="#cart" className="d-flex align-items-center">
      <img src={cartIcon} alt="Cart" style={{ width: '24px', height: '24px' }} />
      <span className="ms-2 badge bg-secondary">{itemCount}</span>
    </Nav.Link>
  );
};

export default CartWidget;