import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sonido from "./sonido";

import "../css/instrucciones.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
  }, [navigate]);

  const irLecturas = () => {
    navigate("/menuLecturas");
  };

  const leerLectura = () => {
    navigate("/lectura");
  };

  // Obtener el texto de las instrucciones según el tipo de juego
  const obtenerTextoInstrucciones = () => {
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Elige Sabiamente":
        return "Lee la pregunta y selecciona la respuesta que creas correcta. Despues presiona el botón continuar.";
      case "Suelta la respuesta":
        return "Lee la porción de la lectura, arrastra el texto correcto entre las opciones presentadas y colocarlo en su lugar. Despues presiona el botón continuar.";
      case "¿Quién es Quién?":
        return "Selecciona el personaje de la lectura que coincide con la descripción. Despues presiona el botón continuar.";
      case "¿Qué Paso Primero?":
        return "Lee la pregunta y ordena los eventos segun fueron ocurriendo en la historia. Despues presiona el botón continuar.";
      case "¿Qué Pasaría si...?":
        return "Lee la pregunta y selecciona la opción que  creas correcta. Despues presiona el botón continuar.";
      default:
        return "Instrucciones por defecto o para otros tipos de juego.";
    }
  };

  return (
    <Container>
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
        className="botones botonRegresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <Button
        type="button"
        onClick={leerLectura}
        variant="secondary"
        className="botones botonJugar"
      >
        Jugar
      </Button>
      <Sonido />
    </Container>
  );
};

export default InstruccionesJuego;
