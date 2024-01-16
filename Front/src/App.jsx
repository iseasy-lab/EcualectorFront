import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./js";
import Login from "./js/login";
import Registro from "./js/registro";
import AcercaDe from "./js/acercaDe";
import MenuTutor from "./js/menuTutor"; 
import MenuJuegos from "./js/menuJuegos";
import MenuLecturas from './js/menuLecturas';
import InstruccionesJuego from './js/instruccionesJuego';
import Lectura from './js/lectura';
import TablaLogros from './js/tablaLogros';
import Insignias from './js/insignias';
import SeleccionaLaRespuesta from './js/juego_SeleccionaLaRespuesta';
import ArrastrarYSoltar from './js/juego_ArrastrarYSoltar';
import EncuentraElPersonaje from './js/juego_EncuentraElPersonaje';
import OrdenarEventos from './js/juego_OrdenarEventos';
import CausaEfecto from './js/juego_CausaEfecto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/acercaDe" element={<AcercaDe />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/menuTutor" element={<MenuTutor />} />
        <Route exact path="/menuJuegos" element={<MenuJuegos />} />
        <Route exact path="/menuLecturas" element={<MenuLecturas />} />
        <Route exact path="/instruccionesJuego" element={<InstruccionesJuego />} />
        <Route exact path="/lectura" element={<Lectura />} />
        <Route exact path="/tablaLogros" element={<TablaLogros />} />
        <Route exact path="/insignias" element={<Insignias />} />
        <Route exact path="/seleccionaLaRespuesta" element={<SeleccionaLaRespuesta />} />
        <Route exact path="/arrastrarYSoltar" element={<ArrastrarYSoltar />} />
        <Route exact path="/encuentraElPersonaje" element={<EncuentraElPersonaje />} />
        <Route exact path="/ordenarEventos" element={<OrdenarEventos />} />
        <Route exact path="/causaEfecto" element={<CausaEfecto />} />
      </Routes>
    </Router>
  );
};

export default App;