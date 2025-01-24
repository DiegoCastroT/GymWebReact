import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import '../css/ReservaCurso.css';

const Maquinas = () => {
  const [maquinas, setMaquinas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMaquinaIndex, setSelectedMaquinaIndex] = useState(null);
  const [selectedHour, setSelectedHour] = useState(""); // Estado para la hora seleccionada
  const [selectedDate, setSelectedDate] = useState(""); // Estado para la fecha seleccionada
  const [availableHours, setAvailableHours] = useState(["10:00", "12:00", "14:00", "16:00"]); // Horas disponibles

  useEffect(() => {
    fetch("/maquinas.json")
      .then((response) => response.json())
      .then(setMaquinas); 
  }, []);

  const handleReservar = (index) => {
    setSelectedMaquinaIndex(index);
    setShowModal(true);
  };

  const confirmReservation = () => {
    if (!selectedDate || !selectedHour) {
      alert("Por favor, selecciona una fecha y una hora.");
      return;
    }

    setMaquinas((prevMaquinas) => {
      const updatedMaquinas = [...prevMaquinas];
      const maquina = updatedMaquinas[selectedMaquinaIndex];

      if (maquina.plazas > 0) {
        maquina.plazas--;
        console.log(
          `Reservada máquina en posición ${selectedMaquinaIndex}, plazas restantes: ${maquina.plazas}, fecha: ${selectedDate}, hora: ${selectedHour}`
        );
      }
      return updatedMaquinas;
    });

    setShowModal(false);
    setSelectedHour(""); // Reiniciar la selección de hora
    setSelectedDate(""); // Reiniciar la selección de fecha
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedHour(""); // Reiniciar la selección de hora
    setSelectedDate(""); // Reiniciar la selección de fecha
  };

  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {maquinas.map((maquina, index) => (
          <Col key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={maquina.foto}
                alt={maquina.nombre}
                style={{height: "275px"}}
              />
              <Card.Body>
                <Card.Title>{maquina.nombre}</Card.Title>
                <Card.Text>
                  <strong>Disponibles:</strong>{" "}
                  {maquina.plazas === 0 ? (
                    "No disponibles"
                  ) : (
                    <>
                      {maquina.plazas}{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleReservar(index)}
                        disabled={maquina.plazas === 0}
                      >
                        Reservar
                      </Button>
                    </>
                  )}
                </Card.Text>
                <Card.Text><strong>Precio por hora: </strong>{maquina.precioPorHora} €</Card.Text>
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
                min={new Date().toISOString().split("T")[0]} // Fecha mínima: hoy
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

export default Maquinas;