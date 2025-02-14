import Cursos from "../components/Cursos.jsx";
import {ModalReservaProvider} from "../providers/ModalReservaContext.jsx";


const ReservaCursos = () => (
    <>
        <ModalReservaProvider>
            <Cursos/>
        </ModalReservaProvider>
    </>
);


export default ReservaCursos
