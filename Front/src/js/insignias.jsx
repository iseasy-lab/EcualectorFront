import { useNavigate } from "react-router-dom";
import { Button, Container} from "react-bootstrap";


import "../css/menuJuegos.css";

function Insignias() {
  const navigate = useNavigate();

  const irMenuLecturas = () => {
    navigate("/menuJuegos");
  };

return (
  <Container>
    <h1 className="tituloGeneral">Insignias</h1>
    
    <Button
      type="button"
      onClick={irMenuLecturas}
      variant="secondary"
      className="regresarCentrado"
    >
      <i className="bi bi-caret-left-fill"></i> Regresar
    </Button>

  </Container>
);

}

export default Insignias;
