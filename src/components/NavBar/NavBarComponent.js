import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logoImage from '../CartWidget/assets/logo.png';

const NavbarComponent = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! Estado: ${response.status}`);
        }
        const data = await response.json();
        setCategorias(data);
        setCargando(false);
      } catch (e) {
        setError('Error cargando los datos. Por favor, intentar nuevamente más tarde.');
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
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo de Mi Tienda"
          />
          Mi Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categorias.map(item => (
              <Nav.Link as={Link} to={`/category/${item}`} key={item}>{item}</Nav.Link>
            ))}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
