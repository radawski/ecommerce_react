import {Container, Row, Col } from 'react-bootstrap';
import Contador from '../Contador/Contador';
import { useState, useContext } from 'react';
import { Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function DetalleDelProducto({ id, title, image, category, description, price, stock }) {

    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item={
            id, title, price
        }

        addItem(item, quantity)
    }
    
    return (
        
        <Container className="py-5">
            <Row className="g-4">
            {/* Columna de la imagen */}
                <Col md={6} className="d-flex align-items-center">
                    <img 
                    src={image} 
                    alt="img"
                    className="img-fluid"
                    style={{ 
                        width: '100%',
                        objectFit: 'contain',
                        maxHeight: '500px' 
                        }}
                    />
                </Col>
                
                {/* Columna de los detalles */}
                <Col md={6}>
                    <div className="h-100 p-4 d-flex flex-column">
                    <h2 className="display-6 mb-4 fw-bold">{title}</h2>

                    <p className="mb-4 fs-5">{description}</p>
                    
                    <div className="mb-4">
                        <h3 className='fs-2 text-muted'>Categoría</h3>
                        <p className="fs-2">{category}</p>
                    </div>
        
                    <div className="mb-4">
                        <h3 className="fs-2 text-muted">Precio</h3>
                        <p className="fs-2 fw-bold">${price}</p>
                    </div>
        
                    <div className="mt-auto">
                        {quantityAdded > 0 ? (
                            <Link to="/cart" className="btn btn-primary btn-lg w-100">
                                <h4>Terminar compra</h4>
                            </Link>
                        ) : (
                            <Contador initial={1} stock={stock} onAdd={handleOnAdd} />
                        )}
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}