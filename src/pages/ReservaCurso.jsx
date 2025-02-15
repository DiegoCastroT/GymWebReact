import Cursos from "../components/Cursos.jsx";
import {ModalReservaProvider} from "../providers/ModalReservaContext.jsx";
import "../App.css";


const ReservaCursos = () => (
    <div className="color-fondo">  
        <ModalReservaProvider>           
            <Cursos/>
        </ModalReservaProvider>
    </div>
);


export default ReservaCursos
