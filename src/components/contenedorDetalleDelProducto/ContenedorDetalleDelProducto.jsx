import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import DetalleDelProducto from "../DetalleDelProducto/DetalleDelProducto";

export default function ContenedorDetalleDelProducto() {
    const { id } = useParams(); // Obtiene el ID del producto de la URL
    const [product, setProducts] = useState(null);

    useEffect(() => {
        const getProductById = async (id) => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Corrige la URL
                if (!response.ok) {
                    throw new Error(`HTTP error! Estado: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (e) {
                return <div className="alert alert-danger mt-5" role="alert">{e}</div>;
            }
        };

        getProductById(id);
    }, [id]); // Agrega id como dependencia

    if (!product) return <div className="text-center mt-5">Cargando...</div>; // Agrega una carga si no hay producto

    return (
        <div>
            <DetalleDelProducto {...product} />
        </div>
    )
}

    