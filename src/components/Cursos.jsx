import React, { useContext } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { CursosContext } from "../providers/CursosContext";
import { useModalReserva } from "../providers/ModalReservaContext";
import "../css/ReservaCurso.css";

const Cursos = () => {
  const { cursos, handleReservarCurso } = useContext(CursosContext);
  const {
    showModal,
    selectedDate,
    setSelectedDate,
    selectedHour,
    setSelectedHour,
    availableHours,
    openModal,
    closeModal,
    confirmReservation,
  } = useModalReserva();

  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {cursos.map((curso, index) => (
          <Col key={index}>
            <Card className="h-90">
              <Card.Img variant="top" src={curso.foto} alt={curso.nombre} />
              <Card.Body>
                <Card.Title>{curso.nombre}</Card.Title>
                <Card.Text>
                  <strong>Dificultad: </strong>
                  {curso.dificultad}
                </Card.Text>
                <Card.Text>
                  <strong>Disponibles:</strong>{" "}
                  {curso.plazas === 0 ? (
                    <>
                      <Button
                        className="card_button"
                        variant="secondary"
                        disabled="true"
                        onClick={() => openModal(index)}
                      >
                        No disponible
                      </Button>
                    </>
                  ) : (
                    <>
                      {curso.plazas}{" "}
                      <Button
                        className="card_button"
                        variant="danger"
                        onClick={() => openModal(index)}
                      >
                        Reservar
                      </Button>
                    </>
                  )}
                </Card.Text>
                <Card.Text>
                  <strong>Precio por hora: </strong>
                  {curso.precioPorHora} €
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

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
          <Button
            variant="primary"
            onClick={() => confirmReservation(handleReservarCurso)}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cursos;
