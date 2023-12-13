import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import "../css/acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
  const irIndex = () => {
    navigate("/");
  };
  return (
    <Container>
      <h1 className="tituloGeneral">
        <span className="letraAmarillo">Ecuad</span>
        <span className="letraAzul">or Le</span>
        <span className="letraRoja">ctor</span>
      </h1>
      <div className="contenedorAcercade mx-auto text-center">
        <p className="informacionAcercaDe">
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar y mejorar habilidades cognitivas relacionadas
          con la comprensión lectora como la concentración, la inferencia y el
          razonamiento. Se presentarán lecturas inspiradas en el Ecuador.
        </p>
        <p className="informacionAcercaDe">
          Esta aplicación fue diseñada y desarrollada por Pablo Alexander Vélez
          Zurita, miembro del Laboratorio LudoLab de la Facultad de Ingeniería
          en Sistemas de la Escuela Politécnica Nacional del Ecuador, bajo la
          dirección del Dr. Marco Santórum y la Psic. Verónica Maldonado. Con la
          colaboración de la unidad académica “Liceo Iberoamérica” y Lic. Susana
          Sarmientos.
        </p>
      </div>

      <div className="barraLogos">
        <Link
          to="https://www.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="/img/logos/LogoEPN.png" alt="Logo EPN" />
        </Link>
        <Link
          to="https://ludolab.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src="/img/logos/LogoLudolab.png"
            alt="Logo Ludolab"
          />
        </Link>
        <Link
          to="https://fis.epn.edu.ec/index.php/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="/img/logos/LogoFIS.png" alt="Logo FIS" />
        </Link>
      </div>

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
