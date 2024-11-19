import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import DetalleDelProducto from "../DetalleDelProducto/DetalleDelProducto";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"; 

export default function ContenedorDetalleDelProducto() {
    const { id } = useParams(); // Obtiene el ID del producto de la URL actual
    const [product, setProducts] = useState(null);

    useEffect(() => {
        const getProductById = async (id) => {
            try {
                const docRef = doc(db, "productos", id); // Obtiene la referencia al documento en Firestore
                const docSnap = await getDoc(docRef); // Lee el documento

                if (docSnap.exists()) {
                    setProducts({ id: docSnap.id, ...docSnap.data() }); // Guarda los datos en el estado
                } else {
                    throw new Error("Producto no encontrado.");
                }
            } catch (e) {
                console.error(e.message);
                setProducts({ error: "No se pudo cargar el producto." });
            }
        };

        getProductById(id);
    }, [id]); // Agrega id como dependencia, solamente se ejecua el useEffect si se modifica el id

    if (!product) return <div className="text-center mt-5">Cargando...</div>; // Agrega una carga si no hay producto
    return (
        <div>
            <DetalleDelProducto {...product} /> {/* ... = spread operator. En este caso, se usa para "expandir" las propiedades del objeto product como props individuales. */}
        </div> //agrega la card con los datos de product
    )
}

    