import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Sonido from "./sonido";

import "../css/menuJuegos.css";

function MenuJuegos() {
  const navigate = useNavigate();

  const [variableSession, setVariableSession] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }

    setVariableSession(sessionStorage.getItem("nombre"));
    if (sessionStorage.getItem("informacion")) {
      mostrarInformacion();
    }
  }, [navigate]);

  const irTablaLogros = () => {
    navigate("/tablaLogros");
  };

  const irInsignias = () => {
    navigate("/insignias");
  };

  const confirmarSalida = () => {
    Swal.fire({
      title: "¿Quiere Salir del Juego?",
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
        '<span style="font-weight:bold">Bienvenido a Ecualector</span>',
      html: '<span style="font-weight:bold">Selecciona entre los 5 tipos de juegos que se presentan y consigue las insignias ocultas.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the 'informacion' session variable
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const irLectura = (ruta, tipoJuego) => {
    sessionStorage.setItem("tipoJuego", tipoJuego);
    navigate(`/${ruta}`);
  };

  const irIndex = () => {
    navigate("/");
    sessionStorage.clear();
  };

  const lecturas = [
    { tipoJuego: "Elige sabiamente", ruta: "menuLecturas" },
    { tipoJuego: "Suelta la respuesta", ruta: "menuLecturas" },
    { tipoJuego: "¿Quién es quién?", ruta: "menuLecturas" },
    { tipoJuego: "¿Qué paso primero?", ruta: "menuLecturas" },
    { tipoJuego: "¿Qué pasaría si...?", ruta: "menuLecturas" },
  ];

  return (
    <Container>
      <Button
        type="button"
        onClick={irTablaLogros}
        variant="secondary"
        className="botonesTutor logros"
      >
        <i className="bi bi-trophy-fill"></i> Tabla de logros
      </Button>
       {/* Mostrar el botón de Insignias solo si el usuario no es un invitado */}
       {sessionStorage.getItem("usuario") !== "invitadoi" && (
        <Button
          type="button"
          onClick={irInsignias}
          variant="secondary"
          className="botonesTutor insignias"
        >
          <i className="bi bi-award-fill"></i> Insignias
        </Button>
      )}
      <h1 className="tituloGeneral">Menú de Juegos</h1>
      <div className="contenedorMenuJuegos">
        {/* Render the first game type in the top row */}
        <Row className="fila">
          <Col md={12} className="d-flex justify-content-center">
            {lecturas[0] && (
              <Button
                variant="secondary"
                className="botonLectura botonAmarillo"
                onClick={() =>
                  irLectura(lecturas[0].ruta, lecturas[0].tipoJuego)
                }
              >
                {lecturas[0].tipoJuego}
              </Button>
            )}
          </Col>
        </Row>

        {/* Render the remaining game types in two rows of two columns */}
        <Row className="fila">
          {[1, 2].map((col) => (
            <Col md={6} key={col} className="d-flex justify-content-center">
              {lecturas[col] && (
                <Button
                  variant="secondary"
                  className="botonLectura"
                  onClick={() =>
                    irLectura(lecturas[col].ruta, lecturas[col].tipoJuego)
                  }
                >
                  {lecturas[col].tipoJuego}
                </Button>
              )}
            </Col>
          ))}
        </Row>

        <Row className="fila">
          {[3, 4].map((col) => (
            <Col md={6} key={col} className="d-flex justify-content-center">
              {lecturas[col] && (
                <Button
                  variant="secondary"
                  className="botonLectura"
                  onClick={() =>
                    irLectura(lecturas[col].ruta, lecturas[col].tipoJuego)
                  }
                >
                  {lecturas[col].tipoJuego}
                </Button>
              )}
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h2 className="nombreUsuario">
          Bienvenido/a{" "}
          <span className="usuario">{variableSession}</span>
        </h2>
      </div>
      <Button
        type="button"
        onClick={confirmarSalida}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
      ></i>
      <Sonido />
    </Container>
  );
}

export default MenuJuegos;
