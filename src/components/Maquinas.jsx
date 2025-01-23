import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Maquinas = () => {
  const [maquinas, setMaquinas] = useState([]);


  useEffect(() => {
    fetch("/maquinas.json")
      .then((response) => response.json())
      .then(setMaquinas); 
  }, []);

  const handleReservar = (index) => {
    setMaquinas((prevMaquinas) => {
      const updatedMaquinas = [...prevMaquinas];
      const maquina = updatedMaquinas[index];

      if (maquina.plazas > 0) {
        maquina.plazas --;
      }
      return updatedMaquinas;
    });
  };


  return (
    <Container className="my-5">
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {maquinas.map((maquina, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={maquina.foto}
                alt={maquina.nombre}
                style={{ objectFit: "cover" }}
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
                        disabled={maquina.disponibles === 0}
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
    </Container>
  );
};

export default Maquinas;
