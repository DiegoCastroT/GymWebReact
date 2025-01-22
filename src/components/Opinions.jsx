import React from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import '../css/Opinions.css';

const Opinions = () => {
    const opinions = [
        {
            nombre: "Mario Pérez",
            imagen: "https://avatars.githubusercontent.com/u/152271526?v=4",
            titulo: "¡Excelente ambiente!",
            texto:
                '"El gimnasio tiene todo lo que necesito y el personal es súper amable. Me siento muy motivado cada vez que vengo."',
        },
        {
            nombre: "Juan",
            imagen:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            titulo: "Entrenadores expertos",
            texto:
                '"Los entrenadores realmente se preocupan por mi progreso. He mejorado mucho desde que comencé aquí, ¡totalmente recomendado!"',
        },
        {
            nombre: "Julian Cardo",
            imagen:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            titulo: "Instalaciones de primer nivel",
            texto:
                '"El equipo está siempre en perfectas condiciones, y el gimnasio siempre está limpio. Sin duda, uno de los mejores lugares para entrenar."',
        },
        {
            nombre: "Felipe Pérez",
            imagen: "https://avatars.githubusercontent.com/u/182014013?v=4",
            titulo: "Resultados visibles",
            texto:
                '"Llevo entrenando tres meses y ya noto grandes resultados. ¡Es el mejor gimnasio en el que he estado!"',
        },
        {
            nombre: "Julia",
            imagen: "https://avatars.githubusercontent.com/u/149196610?v=4",
            titulo: "Gran comunidad",
            texto:
                '"Lo que más me gusta de este gimnasio es el ambiente entre los miembros. Todos se apoyan mutuamente y eso me motiva aún más."',
        },
        {
            nombre: "Ana Calvo",
            imagen: "https://avatars.githubusercontent.com/u/160168022?v=4",
            titulo: "Clases increíbles",
            texto:
                '"Las clases grupales son lo mejor. Siempre me divierto y termino la sesión sintiéndome genial. Los instructores son muy profesionales."',
        },
    ];

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
