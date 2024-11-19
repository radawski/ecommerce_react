import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCard from '../itemCard/ItemCard';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export default function ListaDeProductos({ category }) { // Recibe la categoría
    const [state, setState] = useState({
        items: [],
        cargando: true,
        error: null
    });

    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const productosRef = collection(db, "productos");
                const q = category
                    ? query(productosRef, where("category", "==", category)) // Filtra por categoría
                    : productosRef;

                const querySnapshot = await getDocs(q); // Obtiene los documentos
                const productos = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setState({ items: productos, cargando: false, error: null });
            } catch (e) {
                console.error(e.message);
                setState({
                    items: [],
                    cargando: false,
                    error: "Error cargando los datos. Por favor, intentar nuevamente más tarde.",
                });
            }
        };

        fetchItems();
    }, [category]); // Agrega category como dependencia, el efecto solo se ejecutará cuando el valor de category cambie

    if (state.cargando) return <div className="text-center mt-5">Cargando...</div>;
    if (state.error) return <div className="alert alert-danger mt-5" role="alert">{state.error}</div>;

    return (
        <Container>
            <Row>
                {state.items.length > 0 ? (
                    state.items.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <ItemCard item={item} />
                        </Col>
                    ))
                ) : (
                    <div>No hay productos disponibles.</div>
                )}
            </Row>
        </Container>
    );
}
