import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import "../css/acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
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
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default AcercaDe;
