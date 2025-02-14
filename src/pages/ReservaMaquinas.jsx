import Maquinas from "../components/Maquinas.jsx";
import {ModalReservaProvider} from "../providers/ModalReservaContext.jsx";


const ReservaMaquinas = () => (
    <>
        <ModalReservaProvider>
        <Maquinas/>
        </ModalReservaProvider>
    </>
);


export default ReservaMaquinas
