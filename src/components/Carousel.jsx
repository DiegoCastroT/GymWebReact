import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../css/Carousel.css';

const CarouselComponent = () => (
    <Carousel id="carousel">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="public/carousel1.png"
                alt="Los Angeles"
            />
            <Carousel.Caption
                className="d-flex justify-content-center align-items-center text-center"
                style={{ height: '100%' }}
            >
                <div>
                    <h1>¡Descubre tu mejor versión en nuestro gimnasio!</h1>
                    <Link to="/login" className="btn carousel-button">
                        Regístrate Ahora
                    </Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="public/carousel2.png"
                alt="Chicago"
            />
            <Carousel.Caption
                className="d-flex justify-content-center align-items-center text-center"
                style={{ height: '100%' }}
            >
                <div>
                    <h1>Entrena con los mejores y alcanza tus metas</h1>
                    <Link to="/login" className="btn carousel-button">
                        Regístrate Ahora
                    </Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="public/carousel3.png"
                alt="New York"
            />
            <Carousel.Caption
                className="d-flex justify-content-center align-items-center text-center"
                style={{ height: '100%' }}
            >
                <div>
                    <h1>Transforma tu cuerpo, transforma tu vida.</h1>
                    <Link to="/login" className="btn carousel-button">
                        Regístrate Ahora
                    </Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default CarouselComponent;
