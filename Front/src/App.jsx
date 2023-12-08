import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./js";
import Login from "./js/login";
import Registro from "./js/registro";
import AcercaDe from "./js/acercaDe";
import MenuJuegos from "./js/menuJuegos";
import Lecturas from './js/lecturas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/menuJuegos" element={<MenuJuegos />} />
        <Route path="/lecturas" element={<Lecturas />} />
      </Routes>
    </Router>
  );
};

export default App;