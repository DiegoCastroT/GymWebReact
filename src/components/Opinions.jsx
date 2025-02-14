import React, {useEffect, useState} from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import '../css/Opinions.css';

const Opinions = () => {
   const [opinions, setOpinions] = useState([]);

    useEffect(() => {
        fetch("/opinions.json")
            .then((response) => response.json())
            .then(setOpinions);
    }, []);


    return (
        <section className="mt-4" style={{marginLeft: "2%", marginBottom: "50px"}}>
            <h1 style={{marginTop: "3%"}}>Opiniones</h1>
            <h4 style={{marginTop: "1%"}}>Descubre lo que opinan de nosotros</h4>

            <Container fluid className="mt-4">
                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                    {opinions.map((opinion, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Subtitle className="user-info d-flex align-items-center">
                                        <img
                                            src={opinion.imagen}
                                            alt="User"
                                            className="user-avatar"
                                            style={{width: "30px", borderRadius: "50%"}}
                                        />
                                        {opinion.nombre}
                                    </Card.Subtitle>
                                    <Card.Title>{opinion.titulo}</Card.Title>
                                    <Card.Text>{opinion.texto}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Opinions;
