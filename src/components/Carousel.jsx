import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Carousel.css';

const Carousel = () => (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="public/carousel1.png" alt="Los Angeles" className="d-block w-100" />
                <div className="carousel-caption d-flex justify-content-center align-items-center text-center" style={{ height: '100%' }}>
                    <div>
                        <h1>¡Descubre tu mejor versión en nuestro gimnasio!</h1>
                        <Link to="/login" className="btn carousel-button">
                            Regístrate Ahora
                        </Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="public/carousel2.png" alt="Chicago" className="d-block w-100" />
                <div className="carousel-caption d-flex justify-content-center align-items-center text-center" style={{ height: '100%' }}>
                    <div>
                        <h1>Entrena con los mejores y alcanza tus metas</h1>
                        <Link to="/login" className="btn carousel-button">
                            Regístrate Ahora
                        </Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="public/carousel3.png" alt="New York" className="d-block w-100" />
                <div className="carousel-caption d-flex justify-content-center align-items-center text-center" style={{ height: '100%' }}>
                    <div>
                        <h1>Transforma tu cuerpo, transforma tu vida.</h1>
                        <Link to="/login" className="btn carousel-button">
                            Regístrate Ahora
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carousel">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" aria-label="Next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
);

export default Carousel;
