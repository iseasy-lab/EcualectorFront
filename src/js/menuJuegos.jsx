import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";

import "../css/menuJuegos.css";

function MenuJuegos() {
  const navigate = useNavigate();

  const [variableSession, setVariableSession] = useState("");
  const [reproducirBoton] = useSound(SonidoBoton);

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
      title: "¿Quieres salir del juego?",
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
      title: '<span style="font-weight:bold">Bienvenido a Ecualector</span>',
      html: '<span style="font-weight:bold">Seleccione entre los 5 tipos de juegos que se presentan para conseguir las insignias ocultas.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the 'informacion' session variable
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const irLectura = (tipoJuego) => {
    sessionStorage.setItem("tipoJuego", tipoJuego);
    navigate(`/menuLecturas`);
  };

  const irIndex = () => {
    stop();
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <Container>
      {sessionStorage.getItem("usuario") !== "invitadoi" && (
        <>
          <Button
            type="button"
            onClick={irInsignias}
            variant="secondary"
            className="botonesTutor insignias"
            onMouseEnter={reproducirBoton}
          >
            <i className="bi bi-award-fill"></i> Insignias
          </Button>
          <Button
            type="button"
            onClick={irTablaLogros}
            variant="secondary"
            className="botonesTutor logros"
            onMouseEnter={reproducirBoton}
          >
            <i className="bi bi-trophy-fill"></i> Tabla de logros
          </Button>
        </>
      )}
      <img
        src="/img/fondo/Cartel.png"
        alt="Cartel"
        className="contenedorCartel"
      />
      <h2 className="cartelUsuario">
        <span className="contenidoCartel">{variableSession}</span>
      </h2>
      <h1 className="tituloGeneral">Menú de Juegos</h1>
      <div className="contenedorMenuJuegos">
        <img
          src="/img/login/OsoLector.png"
          alt="Oso Lector"
          className="mascotaMenuJuego"
        />

        <Row className="fila">
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLectura fila-amarilla"
              onClick={() => irLectura("Sabia decisión")}
              onMouseEnter={reproducirBoton}
            >
              Sabia decisión{" "}
            </Button>
          </Col>
          <Col md={4}></Col>
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLectura fila-amarilla"
              onClick={() => irLectura("Suelta la respuesta")}
              onMouseEnter={reproducirBoton}
            >
              Suelta la respuesta{" "}
            </Button>
          </Col>
        </Row>

        {/* Render the remaining game types in two rows of two columns */}
        <Row className="fila">
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLectura fila-azul"
              onClick={() => irLectura("¿Qué pasó primero?")}
              onMouseEnter={reproducirBoton}
            >
              ¿Qué pasó primero?{" "}
            </Button>
          </Col>
          <Col md={4}></Col>
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLectura fila-azul"
              onClick={() => irLectura("¿Quién es quién?")}
              onMouseEnter={reproducirBoton}
            >
              ¿Quién es quién?{" "}
            </Button>
          </Col>
        </Row>

        <Row className="fila">
          <Col md={4}></Col>
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="secondary"
              className="botonLectura fila-roja"
              onClick={() => irLectura("¿Qué pasaría si...?")}
              onMouseEnter={reproducirBoton}
            >
              ¿Qué pasaría si...?{" "}
            </Button>
          </Col>
        </Row>
      </div>

      <Button
        type="button"
        onClick={confirmarSalida}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
        onMouseEnter={reproducirBoton}
      ></i>
    </Container>
  );
}

export default MenuJuegos;
