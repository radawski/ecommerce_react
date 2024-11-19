import {React, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Cart = () =>{
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option btn btn-primary">Productos</Link>
            </div>
        );
    }

    return(
        <div>
            <ListGroup as="ol" numbered className="fs-4 py-3">
                {cart.map(p=> <CartItem key={p.id} {...p}/>)}
            </ListGroup>
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                    <Modal.Body>
                        <h3>Total: ${total}</h3>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={clearCart} className="Button">Limpiar carrito</Button>
                        <Link to="/checkout" className="btn btn-primary">
                            Checkout
                        </Link>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Cart;