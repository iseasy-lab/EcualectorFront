import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";

import "../css/acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
  const [reproducirBoton] = useSound(SonidoBoton);
  
  const irIndex = () => {
    navigate("/");
  };
  return (
    <Container>
      <img src="/img/creditos/Creditos.jpg" alt="creditos" className="creditos"/>
      

      <Button
        type="button"
        onClick={irIndex}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default AcercaDe;
