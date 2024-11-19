import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

export default function CartItem({ id, title, quantity, price }) {
    
    const {removeItem } = useContext(CartContext);

    return(
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{title}</div>
                cantidad: {quantity}
            </div>
        <Badge bg="primary" pill>
            ${price * quantity}
        </Badge>
        <CloseButton onClick={() => removeItem(id)}/>
      </ListGroup.Item>
    )
}