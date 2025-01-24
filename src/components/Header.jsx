import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Cargar el archivo JSON desde la carpeta public
        fetch('/servicios.json') 
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error('Error cargando el JSON:', error));
    }, []);

    // Obtener las categorías únicas
    const categorias = Array.from(new Set(data.map(item => item.Categoria)));

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="/LOGO.png" alt="Logo Gimnasio" style={{ width: '100px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="collapsibleNavbar" />
                <Navbar.Collapse id="collapsibleNavbar">
                    <Nav className="ms-auto">
                        <NavDropdown title="Servicios" id="serviciosDropdown">
                            {categorias.map((categoria, index) => (
                                <NavDropdown.Item key={index} href={`#${categoria}`}>
                                    {categoria}
                                </NavDropdown.Item>
                            ))}
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
