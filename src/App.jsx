import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import ReservaMaquinas from "./pages/ReservaMaquinas.jsx";
import ReservaCurso from "./pages/ReservaCurso.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { MaquinasProvider } from "./providers/MaquinasContext";
import { CursosProvider } from "./providers/CursosContext";

const App = () => (
    <Router>
        <Header />
        <MaquinasProvider>
            <CursosProvider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/reserva-maquinas" element={<ReservaMaquinas />} />
                    <Route path="/reserva-curso" element={<ReservaCurso />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </CursosProvider>
        </MaquinasProvider>
        <Footer />
    </Router>
);

export default App;
