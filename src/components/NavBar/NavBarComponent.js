import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logoImage from '../CartWidget/assets/logo.png';

import { collection, getDocs, query, distinct } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const NavbarComponent = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const categoriasUnicas = Array.from(
            new Set(querySnapshot.docs.map((doc) => doc.data().category))
        );
        setCategorias(categoriasUnicas);
        setCargando(false);
      } catch (e) {
          console.error(e.message);
          setError("Error cargando los datos. Por favor, intentar nuevamente más tarde.");
          setCargando(false);
      }
    };

    fetchCategorias();
  }, []);

  if (cargando) return <div className="text-center mt-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger mt-5" role="alert">{error}</div>;

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/"> {/* el logo redirige a la pagina principal */}
          <img
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo de Mi Tienda"
          />
          Mi Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* boton hamburguesa */}
        <Navbar.Collapse id="basic-navbar-nav">{/* opciones de la hamburguesa */}
          <Nav className="me-auto">
            {categorias.map(item => ( 
              <Nav.Link as={Link} to={`/category/${item}`} key={item}>{item}</Nav.Link> 
            ))} {/* mapea la constante -categorias- y crea una opcion para cada categoria */}
          </Nav>
          <CartWidget /> {/* carrito */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
