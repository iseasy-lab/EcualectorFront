import { useNavigate } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
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
        <Col md={5} className="usuario">
          <center>
            <h2 className="titulo2">Usuario</h2>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i className="bi bi-person-fill"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Ejemplo: pablov"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <a id="olvideContrasena" className="sinContrasena">
              ¿ Olvidaste tu Contraseña ?
            </a>
          </center>
        </Col>

        <Col md={7} border="dark" className="contenedorLogin">
          <center>
            <h2 className="titulo2">Contraseña</h2>
          </center>
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
