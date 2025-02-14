import Header from "../components/Header.jsx"
import Maquinas from "../components/Maquinas.jsx";
import Footer from "../components/Footer.jsx";
import {ModalReservaProvider} from "../context/ModalReservaContext.jsx";


const ReservaMaquinas = () => (
    <>
        <ModalReservaProvider>
        <Maquinas/>
        </ModalReservaProvider>
    </>
);


export default ReservaMaquinas
