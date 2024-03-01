import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import Swal from "sweetalert2";

function MenuTutor() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
  }, [navigate]);
  
  const irListaEstudiantes = () => {
    navigate("/listaEstudiantes");
  };

  const irAceptarEstudiantes = () => {
    navigate("/aceptarEstudiantes");
  };

  const irTablaLogrosTutor = () => {
    navigate("/tablaLogrosTutor");
  };

  const irInsigniasTutor = () => {
    navigate("/insigniasTutor");
  };

  const irRespuestas = () => {
    navigate("/respuestas");
  };

  const confirmarSalida = () => {
    Swal.fire({
      title: "¿Desea Cerrar Sesión?",
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

  const irIndex = () => {
    navigate("/");
    sessionStorage.clear();
  };

  const lecturas = [
    { tipoJuego: "Sabia decisión", ruta: "menuLecturas" },
    { tipoJuego: "Suelta la respuesta", ruta: "menuLecturas" },
    { tipoJuego: "¿Quién es quién?", ruta: "menuLecturas" },
    { tipoJuego: "¿Qué pasó primero?", ruta: "menuLecturas" },
    { tipoJuego: "¿Qué pasaría si...?", ruta: "menuLecturas" },
  ];

  return (
    <Container>
      <h1 className="tituloGeneral">Menú Tutor</h1>
      <div className="contenedorMenuJuegos">
        <Row className="fila">
          <Col md={3}></Col>
          <Col md={6} className="d-flex justify-content-center">
            {lecturas[0] && (
              <Button
                variant="secondary"
                className="botonLecturaTutor fila-amarilla"
                onClick={irRespuestas}
              >
                Respuestas de lecturas
              </Button>
            )}
          </Col>
        </Row>

        {/* Render the remaining game types in two rows of two columns */}
        <Row className="fila">
          <Col md={5} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLecturaTutor fila-azul"
              onClick={irListaEstudiantes}
            >
              Listado de estudiantes
            </Button>
          </Col>
          <Col md={2}></Col>
          <Col md={5} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLecturaTutor fila-azul"
              onClick={irAceptarEstudiantes}
            >
              Aceptar estudiantes
            </Button>
          </Col>
        </Row>

        <Row className="fila">
          <Col md={5} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLecturaTutor fila-roja"
              onClick={irTablaLogrosTutor}
            >
              Tabla de Logros{" "}
            </Button>
          </Col>
          <Col md={2}></Col>
          <Col md={5} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLecturaTutor fila-roja"
              onClick={irInsigniasTutor}
            >
              Insignias{" "}
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
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>

      <BarraLogos />
    </Container>
  );
}

export default MenuTutor;
