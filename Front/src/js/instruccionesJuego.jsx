import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sonido from "./sonido";

import "../css/instrucciones.css";


const InstruccionesJuego = () => {
  const navigate = useNavigate();

  const irLecturas = () => {
    navigate("/menuLecturas");
  };

  const leerLectura = () => {
    navigate("/lectura");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Instrucciones</h1>
      <Row className="fila">
        <Col md={7}>
        <div className="contenedorInstrucciones text-center">
        <p>
        Lee con mucha atención la siguiente lectura y cuando estes listo presiona el boton avanzar.
        <br />
        Lee la pregunta y selecciona la respuesta que creas correcta, una vez las hayas seleccionado una respuesta presiona el botón continuar.        </p>
      </div>
        </Col>
        <Col md={5} >
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
