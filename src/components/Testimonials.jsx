import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Testimonials.css';

const Testimonials = () => (
    <main className="testimonials mt-5">
        <h3 className="text-center">Lo Que Dicen Nuestros Usuarios</h3>
        <Container className="mt-4">
            <Row className="justify-content-center">
                {['Javier Martínez', 'Sofía López', 'Carlos Fernández'].map((name, index) => (
                    <Col md={4} key={index}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">
                                    "El ambiente aquí es increíble. Cada entrenamiento me motiva a ser la mejor versión de mí mismo."
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </main>
);

export default Testimonials;
