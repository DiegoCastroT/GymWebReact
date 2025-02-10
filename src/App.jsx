import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import ReservaMaquinas from "./pages/ReservaMaquinas.jsx";
import ReservaCurso from "./pages/ReservaCurso.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => (
    <Router>
        <Header /> {/* Esto hará que el Header se muestre en todas las páginas */}
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reserva-maquinas" element={<ReservaMaquinas />} />
            <Route path="/reserva-curso" element={<ReservaCurso />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </Router>
);

export default App;
