import {Card, ListGroup} from 'react-bootstrap';
import Contador from '../Contador/Contador';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function DetalleDelProducto({id, name, image, category, description, price}) { 
   
    const [quantityAdded, setQuantityAdded]= useState(0);
    const navigate = useNavigate();

    const stock = 10; // Hardcodear el valor del stock

    const handleOnAdd= (quantity) =>{
        setQuantityAdded(quantity);
        navigate('/cart');
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Categoria: {category}</ListGroup.Item>
                <ListGroup.Item>Precio: {price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {
                    quantityAdded > 0 ? ( <Link to='/cart'>Terminar Compra</Link>) : (<Contador initial={1} stock={stock} onAdd={handleOnAdd}/>) 
                }
            </Card.Body>
        </Card>
    );
}
