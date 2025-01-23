import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/LoginRegister.css';

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <section>
            <Container className="mt-5 pt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                {isLogin ? (
                                    <Form className="was-validated">
                                        <h2 className="card-title text-center mb-4">Login</h2>
                                        <Form.Group className="mb-3" controlId="loginEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" placeholder="Introduzca su email..." required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, rellena este campo con un email válido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="loginPassword">
                                            <Form.Label>Contraseña:</Form.Label>
                                            <Form.Control type="password" placeholder="Introduzca su contraseña..." required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, rellena este campo.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="loginCheck">
                                            <Form.Check
                                                type="checkbox"
                                                label="Acepto los términos y condiciones de Hiit!!"
                                                required
                                            />
                                        </Form.Group>
                                        <Button type="submit" className="btn loginBtn w-100">Login</Button>
                                        <a href="#" onClick={toggleForm} className="toggle-link d-block text-center mt-3">
                                            ¿No tienes cuenta? Regístrate
                                        </a>
                                    </Form>
                                ) : (
                                    <Form className="was-validated">
                                        <h2 className="card-title text-center mb-4">Registrarse</h2>
                                        <Form.Group className="mb-3" controlId="regEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" placeholder="Introduzca su email..." required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, rellena este campo con un email válido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="regUsername">
                                            <Form.Label>Nombre de usuario:</Form.Label>
                                            <Form.Control type="text" placeholder="Introduzca su nombre de usuario..." required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, rellena este campo.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="regPassword">
                                            <Form.Label>Contraseña:</Form.Label>
                                            <Form.Control type="password" placeholder="Introduzca su contraseña..." required />
                                            <Form.Control.Feedback type="invalid">
                                                Por favor, rellena este campo.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="registerCheck">
                                            <Form.Check
                                                type="checkbox"
                                                label="Acepto los términos y condiciones de Hiit!!"
                                                required
                                            />
                                        </Form.Group>
                                        <Button type="submit" className="btn loginBtn w-100">Registrarse</Button>
                                        <a href="#" onClick={toggleForm} className="toggle-link d-block text-center mt-3">
                                            ¿Ya tienes cuenta? Iniciar sesión
                                        </a>
                                    </Form>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginRegister;
