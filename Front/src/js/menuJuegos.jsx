import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "../css/menuJuegos.css";

function AcercaDe() {
  const navigate = useNavigate();

  const irLecturas = () => {
    navigate("/lecturas");
  };

  const irIndex = () => {
    navigate("/");
  };
  return (
    <Container>
      <h1 className="tituloMenuJuegos">Menú de Juegos</h1>
      <div className="contenedorMenuJuegos">
      {/* Primera fila */}
      <Row className="fila">
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Seleccionar la Respuesta
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Arrastrar y Soltar
          </Button>
        </Col>
      </Row>
      {/* Segunda fila */}
      <Row className="fila">
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Encontrar el Personaje
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Ordenar Eventos
          </Button>
        </Col>
      </Row>
      {/* Tercera fila */}
      <Row className="fila">
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Causa - Efecto
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Button variant="secondary" onClick={irLecturas}>
            Unir Según Corresponda
          </Button>
        </Col>
      </Row>
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
