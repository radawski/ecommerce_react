import React from 'react';
import cartIcon from '../CartWidget/assets/cart-icon.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity}=useContext(CartContext)

  if (totalQuantity === 0) return null; // No renderiza el componente si no hay productos

  return (
    <Link to="/cart" className="d-flex align-items-center CartWidget">
      <img src={cartIcon} alt="Cart" style={{ width: '24px', height: '24px' }} />
      <span className="ms-2 badge bg-secondary">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;