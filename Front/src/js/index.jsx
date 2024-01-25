import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import axios from "axios";
import "../css/index.css";

function Index() {
  const navigate = useNavigate();

  const irMenuJuegos = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        usuario: "invitadoi",
        animal: "Condor",
        color: "Amarillo",
        accion: "Volar",
      });
      if (response.data.success) {
        sessionStorage.setItem("usuario", "invitadoi");
        sessionStorage.setItem("nombre", "Invitado");
        sessionStorage.setItem("informacion", true.toString());
        navigate("/menuJuegos");
      } else {
        alert("No se logueó el usuario");
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
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
    <BarraLogos />
      
    </Container>
  );
}

export default Index;
