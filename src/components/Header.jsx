import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src="/LOGO.png" alt="Logo Gimnasio" style={{ width: "100px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="collapsibleNavbar" />
                <Navbar.Collapse id="collapsibleNavbar">
                    <Nav className="ms-auto">
                        <NavDropdown title="Servicios" id="serviciosDropdown">
                            <NavDropdown.Item as={Link} to="/reserva-maquinas">
                                Máquinas
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/reserva-curso">
                                Curso
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/login" className="btn-custom">
                            Iniciar Sesión
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" className="btn-custom">
                            Registrarse
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
