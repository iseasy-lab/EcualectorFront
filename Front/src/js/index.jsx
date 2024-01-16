import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import "../css/index.css";

function Index() {
  const navigate = useNavigate();

  const irMenuJuegos = () => {
    axios.post("http://localhost:3001/login", {
          usuario: "invitadoi",
          animal: "Condor",
          color: "Amarillo",
          accion: "Volar",
        })
        .then(() => {
          alert("Usuario logueado con exito!!!");
          sessionStorage.setItem("usuario", "invitadoi");
          sessionStorage.setItem("nombre", "Invitado");
          sessionStorage.setItem("informacion", true.toString());
          navigate("/menuJuegos");
        });
  };

  const irLogin = () => {
    navigate("/login");
  };

  const irRegistro = () => {
    navigate("/registro");
  };

  const irAcercaDe = () => {
    navigate("/acercaDe");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">
        <span className="letraAmarillo">Ecu</span>
        <span className="letraAzul">aLe</span>
        <span className="letraRoja">ctor</span>
      </h1>
      <div className="contenedorIndex">
        <Button
          type="button"
          onClick={irMenuJuegos}
          variant="secondary"
          className="botones amarillo"
        >
          Jugar
        </Button>

        <Button
          type="button"
          onClick={irLogin}
          variant="secondary"
          className="botones azul"
        >
          Iniciar Sesión
        </Button>

        <Button
          type="button"
          onClick={irRegistro}
          variant="secondary"
          className="botones rojo"
        >
          Registrar Jugador
        </Button>
      </div>

      <Button
        type="button"
        onClick={irAcercaDe}
        className="btn btn-secondary acercaDe"
      >
        Acerca de
      </Button>

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
    </Container>
  );
}

export default Index;
