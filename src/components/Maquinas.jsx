import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import '../css/ReservaCurso.css';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch("/servicios.json")
            .then((response) => response.json())
            .then((data) => {
                // Filtramos solo los objetos que tienen la categoría "Curso"
                const cursosFiltrados = data.filter(item => item.Categoria === "Maquinas");
                setCursos(cursosFiltrados);
            });
    }, []);

    const handleReservar = (index) => {
        setCursos((prevCursos) => {
            const updatedCursos = [...prevCursos];
            const curso = updatedCursos[index];

            if (curso.plazas > 0) {
                curso.plazas--;
                console.log(`Reservado curso en posición ${index}, plazas restantes: ${curso.plazas}`);
            }
            return updatedCursos;
        });
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
        </Container>
    );
};

export default Cursos;
