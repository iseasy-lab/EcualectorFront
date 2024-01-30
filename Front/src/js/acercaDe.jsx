import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import BarraLogos from "./barraLogos";

import "../css/acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
  const irIndex = () => {
    navigate("/");
  };
  return (
    <Container>
      <h1 className="tituloGeneral">
      <span className="letraAmarillo">Ecu</span>
        <span className="letraAzul">aLe</span>
        <span className="letraRoja">ctor</span>
      </h1>
      <div className="contenedorAcercade mx-auto text-center">
        <p>
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar y mejorar habilidades cognitivas relacionadas
          con la comprensión lectora como la concentración, la inferencia y el
          razonamiento. Se presentarán lecturas inspiradas en el Ecuador.
        </p>
        <p>
          Esta aplicación fue diseñada y desarrollada por Pablo Alexander Vélez
          Zurita, miembro del Laboratorio LudoLab de la Facultad de Ingeniería
          en Sistemas de la Escuela Politécnica Nacional del Ecuador, bajo la
          dirección del Dr. Marco Santórum, Dra. Mayra Carrión y la Psic. Verónica Maldonado. Con la
          colaboración de la unidad académica “Liceo Iberoamérica” y Lic. Susana
          Sarmientos.
        </p>
      </div>

      <BarraLogos />

      <Button
        type="button"
        onClick={irIndex}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default AcercaDe;
