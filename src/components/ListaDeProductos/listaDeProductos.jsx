import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCard from '../itemCard/ItemCard';

export default function ListaDeProductos({ category }) { // Recibe la categoría
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = category 
                    ? await fetch(`https://fakestoreapi.com/products/category/${category}`) // Filtra por categoría
                    : await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Estado: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
                setCargando(false);
            } catch (e) {
                setError('Error cargando los datos. Por favor, intentar nuevamente más tarde.');
                setCargando(false);
            }
        };

        fetchItems();
    }, [category]); // Agrega category como dependencia

    if (cargando) return <div className="text-center mt-5">Cargando...</div>;
    if (error) return <div className="alert alert-danger mt-5" role="alert">{error}</div>;

    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <ItemCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
