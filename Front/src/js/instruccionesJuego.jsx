import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/instrucciones.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";


  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));

  }, [navigate]);

  const irLecturas = () => {
    sessionStorage.removeItem("tituloLectura");
    navigate("/menuLecturas");
  };

  const leerLectura = () => {
    sessionStorage.setItem("horaInicio", new Date().toLocaleTimeString());
    navigate("/lectura");
  };

  // Obtener el texto de las instrucciones según el tipo de juego
  const obtenerTextoInstrucciones = () => {
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Elige sabiamente":
        return "Lee la pregunta y selecciona la respuesta que correcta. Despues presiona el botón continuar.";
      case "Suelta la respuesta":
        return "Lee la porción de la lectura, arrastra la respuesta correcto entre las opciones presentadas y colocala en el recuadro rojo. Despues presiona el botón continuar.";
      case "¿Quién es quién?":
        return "Selecciona el personaje de la lectura que coincide con la descripción. Despues presiona el botón continuar.";
      case "¿Qué paso primero?":
        return "Ordena los cuadrados azules segun como fueron ocurriendo los eventos en la historia. Despues presiona el botón continuar.";
      case "¿Qué pasaría si...?":
        return "Lee la pregunta y selecciona la opción que correcta. Despues presiona el botón continuar.";
      default:
        return "Instrucciones por defecto o para otros tipos de juego.";
    }
  };

  return (
    <Container>
      {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
    <h2 className="cartelUsuario">
      <span className="contenidoCartel">{variableSession}</span>
    </h2>
) : null}
      <h1 className="tituloGeneral">Instrucciones</h1>
      <Row className="fila">
        <Col md={7}>
          <div className="contenedorInstrucciones text-center">
            <p>
              Lee con mucha atención la siguiente lectura y cuando estes listo
              presiona el boton avanzar.
              <br /> <br />
              {obtenerTextoInstrucciones()}
            </p>
          </div>
        </Col>
        <Col md={5}>
          <div className="contenedorInstrucciones text-center">
            Imagen del Juego
          </div>
        </Col>
      </Row>

      <Button
        type="button"
        onClick={irLecturas}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <Button
        type="button"
        onClick={leerLectura}
        variant="secondary"
        className="botones iniciar"
      >
        Jugar
      </Button>
    </Container>
  );
};

export default InstruccionesJuego;
