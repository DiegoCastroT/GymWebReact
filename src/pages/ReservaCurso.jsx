import Header from "../components/Header.jsx"
import Cursos from "../components/Cursos.jsx";
import Footer from "../components/Footer.jsx";
import {ModalReservaProvider} from "../context/ModalReservaContext.jsx";


const ReservaCursos = () => (
    <>
        <ModalReservaProvider>
            <Cursos/>
        </ModalReservaProvider>
    </>
);


export default ReservaCursos
