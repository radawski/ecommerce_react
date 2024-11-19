import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={item.image} alt={item.title} style={{ height: '200px', objectFit: 'contain' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text><strong className="text-primary">${item.price.toFixed(2)}</strong></Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Button as={Link} to={`/product/${item.id}`} variant="primary">Ver detalle</Button> {/* al apretar el boton -Ver detalle-, nos lleva a la ruta del producto*/}
            </Card.Body>
        </Card>
    )
};
