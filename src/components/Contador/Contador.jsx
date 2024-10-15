
import React, {useState} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap';

const Contador = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <Button variant="success" onClick={increment} className="mx-2">
                Incrementar
              </Button>
              <h2>{quantity}</h2>
              <Button variant="danger" onClick={decrement} className="mx-2">
                Decrementar
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} className="text-center">
                <Button variant="primary" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>  
            </Col>
          </Row>
        </Container>
        
    );
}

export default Contador;