import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";

import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);

  const handleChangeNombre = (event) => {
    setUsuario(event.target.value);
  };

  const handleSelectAnimal = (selectedAnimal) => {
    // Si ya hay un animal seleccionado, restablecer su estilo
    if (animal === selectedAnimal) {
      setAnimal(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAnimal(selectedAnimal);
    }
  };

  const handleSelectColor = (selectedColor) => {
    if (color === selectedColor) {
      setColor(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setColor(selectedColor);
    }
  };

  const handleSelectAccion = (selectedAnimal) => {
    if (accion === selectedAnimal) {
      setAccion(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAccion(selectedAnimal);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && animal && color && accion) {
      // Si todos los campos requeridos tienen valores, entonces realiza la acción
      console.log("Formulario enviado con éxito");
      console.log("Nombre:", usuario);
      console.log("Animal:", animal);
      console.log("Color:", color);
      console.log("Accion:", accion);
    } else {
      // Muestra un mensaje de error o realiza otras acciones según sea necesario
      console.error("Por favor, completa todos los campos");
    }
  };

  const irIndex = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Iniciar Sesión</h1>
      <Form onSubmit={handleSubmit}>
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
                  value={usuario}
                  onChange={handleChangeNombre}
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
            {/*  Animales */}
            <Row className="fila">
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/condor.png"
                  alt="Condor"
                  className={`imagen ${animal === "condor" ? "selected" : ""}`}
                  onClick={() => handleSelectAnimal("condor")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/cuy.png"
                  alt="Cuy"
                  className={`imagen ${animal === "cuy" ? "selected" : ""}`}
                  onClick={() => handleSelectAnimal("cuy")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/tortuga.png"
                  alt="Tortuga"
                  className={`imagen ${animal === "tortuga" ? "selected" : ""}`}
                  onClick={() => handleSelectAnimal("tortuga")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/osoAnteojos.png"
                  alt="Oso Anteojos"
                  className={`imagen ${
                    animal === "osoAnteojos" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectAnimal("osoAnteojos")}
                />
              </Col>
            </Row>

            {/*  Colores */}
            <Row className="fila">
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionAmarillo ${
                    color === "opcionAmarillo" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("opcionAmarillo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionAzul ${
                    color === "opcionAzul" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("opcionAzul")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionRojo ${
                    color === "opcionRojo" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("opcionRojo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionVerde ${
                    color === "opcionVerde" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("opcionVerde")}
                ></div>
              </Col>
            </Row>

            {/*  Acciones */}
            <Row className="fila">
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "volar" ? "selected" : ""}`}
                  onClick={() => handleSelectAccion("volar")}
                >
                  Volar
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "correr" ? "selected" : ""}`}
                  onClick={() => handleSelectAccion("correr")}
                >
                  Correr
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "nadar" ? "selected" : ""}`}
                  onClick={() => handleSelectAccion("nadar")}
                >
                  Nadar
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "saltar" ? "selected" : ""}`}
                  onClick={() => handleSelectAccion("saltar")}
                >
                  Saltar
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <center>
          <Button type="submit" variant="secondary" className="iniciar">
            Iniciar
          </Button>
        </center>
      </Form>
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
};

export default Login;
