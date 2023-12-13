import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./js";
import Login from "./js/login";
import Registro from "./js/registro";
import AcercaDe from "./js/acercaDe";
import MenuJuegos from "./js/menuJuegos";
import MenuLecturas from './js/menuLecturas';
import InstruccionesJuego from './js/instruccionesJuego';
import Lectura from './js/lectura';
import Juego from './js/juego';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/menuJuegos" element={<MenuJuegos />} />
        <Route path="/menuLecturas" element={<MenuLecturas />} />
        <Route path="/instruccionesJuego" element={<InstruccionesJuego />} />
        <Route path="/lectura" element={<Lectura />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </Router>
  );
};

export default App;