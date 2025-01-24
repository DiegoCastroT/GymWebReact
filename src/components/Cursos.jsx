import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import '../css/ReservaCurso.css';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCursoIndex, setSelectedCursoIndex] = useState(null);
    const [selectedHour, setSelectedHour] = useState("");  
    const [selectedDate, setSelectedDate] = useState("");
    const [availableHours, setAvailableHours] = useState(["10:00", "12:00", "14:00", "16:00"]); 

    useEffect(() => {
        fetch("/cursos.json")
            .then((response) => response.json())
            .then(setCursos);
    }, []);

    const handleReservar = (index) => {
        setSelectedCursoIndex(index);
        setShowModal(true);
    };

    const confirmReservation = () => {
        if (!selectedDate || !selectedHour) {
            alert("Por favor, selecciona una fecha y una hora.");
            return;
        }

        setCursos((prevCursos) => {
            const updatedCursos = [...prevCursos];
            const curso = updatedCursos[selectedCursoIndex];

            if (curso.plazas > 0) {
                curso.plazas--;
                console.log(
                    `Reservado curso en posición ${selectedCursoIndex}, plazas restantes: ${curso.plazas}, fecha: ${selectedDate}, hora: ${selectedHour}`
                );
            }
            return updatedCursos;
        });

        setShowModal(false);
        setSelectedHour(""); 
        setSelectedDate(""); 
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedHour(""); 
        setSelectedDate(""); 
    };

    return (
        <Container className="my-5">
            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                {cursos.map((curso, index) => (
                    <Col key={index}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={curso.foto}
                                alt={curso.nombre}
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{curso.nombre}</Card.Title>
                                <Card.Text><strong>Dificultad: </strong>{curso.dificultad}</Card.Text>
                                <Card.Text>
                                    <strong>Disponibles:</strong>{" "}
                                    {curso.plazas === 0 ? (
                                        "No disponibles"
                                    ) : (
                                        <>
                                            {curso.plazas}{" "}
                                            <Button
                                                variant="danger"
                                                onClick={() => handleReservar(index)}
                                                disabled={curso.plazas === 0}
                                            >
                                                Reservar
                                            </Button>
                                        </>
                                    )}
                                </Card.Text>
                                <Card.Text><strong>Precio por hora: </strong>{curso.precioPorHora} €</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal de confirmación con selección de fecha y hora */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Selector de fecha */}
                        <Form.Group controlId="formDateSelection" className="mb-3">
                            <Form.Label>Selecciona una fecha:</Form.Label>
                            <Form.Control
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split("T")[0]} 
                            />
                        </Form.Group>

                        {/* Selector de hora */}
                        <Form.Group controlId="formHourSelection">
                            <Form.Label>Selecciona una hora:</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedHour}
                                onChange={(e) => setSelectedHour(e.target.value)}
                            >
                                <option value="">Selecciona una hora</option>
                                {availableHours.map((hour, index) => (
                                    <option key={index} value={hour}>
                                        {hour}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={confirmReservation}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Cursos;