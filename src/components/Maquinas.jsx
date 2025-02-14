import React, { useContext } from "react";
import { Card, Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import { MaquinasContext } from "../providers/MaquinasContext";
import { useModalReserva } from "../providers/ModalReservaContext";
import "../css/ReservaCurso.css";

const Maquinas = () => {
  const { maquinas, handleReservarMaquina } = useContext(MaquinasContext);
  const {
    showModal,
    selectedDate,
    setSelectedDate,
    selectedHour,
    setSelectedHour,
    availableHours,
    openModal,
    closeModal,
    confirmReservation
  } = useModalReserva();

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
                      style={{ height: "275px" }}
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
                            <Button variant="danger" onClick={() => openModal(index)}>
                              Reservar
                            </Button>
                          </>
                      )}
                    </Card.Text>
                    <Card.Text>
                      <strong>Precio por hora: </strong>
                      {maquina.precioPorHora} €
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
                    min={new Date().toISOString().split("T")[0]} // Fecha mínima: hoy
                />
              </Form.Group>

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
                onClick={() => confirmReservation(handleReservarMaquina)}
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
  );
};

export default Maquinas;
