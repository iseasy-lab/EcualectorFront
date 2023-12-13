import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Sonido from "./sonido";

import "../css/menuJuegos.css";

function AcercaDe() {
  const navigate = useNavigate();

  const confirmarSalida = () => {
    Swal.fire({
      title: "¿Quiére Salir del Juego?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Salir</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        irIndex();
      }
    });
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title:
        '<span style="font-weight:bold">Bienvenido a Ecuador Lector</span>',
      html: '<span style="font-weight:bold">Selecciona entre los 6 tipos de juegos que se presentan y consigue las insignias ocultas.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    });
  };

  const irLecturas = () => {
    navigate("/menuLecturas");
  };

  const irIndex = () => {
    navigate("/");
  };
  return (
    <Container>
      <h1 className="tituloGeneral">Menú de Juegos</h1>
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
        onClick={confirmarSalida}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

      <i
        className="bi bi-info-circle botonInformacion"
        onClick={mostrarInformacion}
      ></i>
      <Sonido />
    </Container>
  );
}

export default AcercaDe;
