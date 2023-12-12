
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "../css/index.css";

function Index() {
  const navigate = useNavigate();

  const irMenuJuegos = () => {
    navigate("/menuJuegos");
  };

  const irLogin = () => {
    navigate("/login");
  };

  const irRegistro = () => {
    navigate("/registro");
  };

  const irAcercaDe = () => {
    navigate("/acercaDe");
  }

  return (
    <Container>
      <h1 className="tituloGeneral">
        <span className="letraAmarillo">Ecuad</span><span className="letraAzul">or Le</span>
        <span className="letraRoja">ctor</span>
      </h1>
      <div className="contenedorIndex">
          <Button type="button" onClick={irMenuJuegos}
          className="botones amarillo">
            Jugar
          </Button>
        
        <Button type="button"
          onClick={irLogin}
          variant="secondary"
          className="botones azul">
            Iniciar Sesión
          </Button>

        <Button
          type="button"
          onClick={irRegistro}
          className="botones rojo"
        >
          Registrar Jugador
        </Button>
      </div>

        <Button type="button" onClick={irAcercaDe} className="btn btn-secondary acercaDe">
          Acerca de
        </Button>

      <div className="barraLogos">
        <a
          href="https://www.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="/img/logos/LogoEPN.png" alt="Logo EPN" />
        </a>
        <a
          href="https://ludolab.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src="/img/logos/LogoLudolab.png"
            alt="Logo Ludolab"
          />
        </a>
        <a
          href="https://fis.epn.edu.ec/index.php/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src="/img/logos/LogoFIS.png" alt="Logo FIS" />
        </a>
      </div>
    </Container>
  );
}

export default Index;
