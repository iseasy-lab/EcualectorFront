import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./js";
import Login from "./js/login";
import Registro from "./js/registro";
import AcercaDe from "./js/acercaDe";
import MenuJuegos from "./js/menuJuegos";
import MenuLecturas from './js/menuLecturas';
import InstruccionesJuego from './js/instruccionesJuego';
import Lectura from './js/lectura';
import TablaLogros from './js/tablaLogros';
import Insignias from './js/insignias';
import SeleccionaLaRespuesta from './js/juego_SeleccionaLaRespuesta';
// import ArrastrarYSoltar from './js/juego_ArrastrarYSoltar';
// import EncuentraElPersonaje from './js/juego_EncuentraElPersonaje';
// import OrdenarEventos from './js/juego_OrdenarEventos';
// import CausaEfecto from './js/juego_CausaEfecto';
// import UnirPuntos from './js/juego_UnirPuntos';

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
        <Route path="/tablaLogros" element={<TablaLogros />} />
        <Route path="/insignias" element={<Insignias />} />
        <Route path="/seleccionaLaRespuesta" element={<SeleccionaLaRespuesta />} />
        {/* <Route path="/arrastrarYSoltar" element={<ArrastrarYSoltar />} />
        <Route path="/encuentraElPersonaje" element={<EncuentraElPersonaje />} />
        <Route path="/ordenarEventos" element={<OrdenarEventos />} />
        <Route path="/causaEfecto" element={<CausaEfecto />} />
        <Route path="/unirPuntos" element={<UnirPuntos />} /> */}
      </Routes>
    </Router>
  );
};

export default App;