import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{marginTop: '5%'}}>
            <Container className="mt-3">
                <Row className="align-items-start">
                    <Col sm className="d-flex flex-column align-items-center mb-4">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src="/LOGO2.png" alt="Logo Gimnasio" style={{width: '100px'}}/>
                            </Link>
                        </div>
                        <div className="d-flex mt-3 gap-3">
                            <div>
                                <img src="/youtube.png" className="rounded" alt="YouTube" style={{width: '25px'}}/>
                            </div>
                            <div>
                                <img src="/linkedin.png" className="rounded" alt="LinkedIn" style={{width: '25px'}}/>
                            </div>
                            <div>
                                <img src="/twitter-x.svg" className="rounded" alt="X (Twitter)"
                                     style={{width: '25px'}}/>
                            </div>
                            <div>
                                <img src="/instagram.svg" className="rounded" alt="Instagram" style={{width: '25px'}}/>
                            </div>
                        </div>
                    </Col>

                    <Col sm>
                        <h5>Idiomas</h5>
                        <p>Español</p>
                        <p>English</p>
                        <p>Deutsch</p>Q
                        <p>Português</p>
                        <p>中文</p>
                    </Col>

                    <Col sm>
                        <h5>Explora</h5>
                        <p>Nuestro gimnasio</p>
                        <p>Trabaja con nosotros</p>
                        <p>Visita guiada</p>
                    </Col>

                    <Col sm>
                        <h5>Sobre nosotros</h5>
                        <p>Contáctanos</p>
                        <p>Protección de datos</p>
                        <p>Ayuda</p>
                        <p>Developers</p>
                    </Col>
                </Row>
            </Container>
            <p className="text-center">Todos los derechos reservados ©. 2024 HiiT!!</p>
        </footer>
    );
};

export default Footer;
