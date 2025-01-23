import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="public/LOGO.png" alt="Logo Gimnasio" style={{ width: '100px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="collapsibleNavbar" />
                <Navbar.Collapse id="collapsibleNavbar">
                    <Nav className="ms-auto">
                        <NavDropdown title="Servicios" id="serviciosDropdown">
                            <NavDropdown.Item href='#'>Máquinas</NavDropdown.Item>
                            <NavDropdown.Item href='#'>Curso</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#'>Contacto</Nav.Link>
                        <Nav.Link href='#' className="btn-custom">Iniciar Sesión</Nav.Link>
                        <Nav.Link href='#' className="btn-custom">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
