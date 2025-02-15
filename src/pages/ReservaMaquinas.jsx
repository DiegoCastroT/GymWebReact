import Maquinas from "../components/Maquinas.jsx";
import { ModalReservaProvider } from "../providers/ModalReservaContext.jsx";
import "../App.css";

const ReservaMaquinas = () => (
  <div className="color-fondo">
    <ModalReservaProvider>
      <Maquinas />
    </ModalReservaProvider>
  </div>
);

export default ReservaMaquinas;
