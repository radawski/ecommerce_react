import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import logoImage from '../CartWidget/assets/logo.png';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;