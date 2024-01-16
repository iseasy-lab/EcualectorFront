import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";

import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);

  const cambiarUsuario = (event) => {
    const nuevoUsuario = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
    setUsuario(nuevoUsuario.toLowerCase());
  };

  const seleccionarAnimal = (selectedAnimal) => {
    // Si ya hay un animal seleccionado, restablecer su estilo
    if (animal === selectedAnimal) {
      setAnimal(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAnimal(selectedAnimal);
    }
  };

  const seleccionarColor = (selectedColor) => {
    if (color === selectedColor) {
      setColor(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setColor(selectedColor);
    }
  };

  const seleccionarAccion = (selectedAccion) => {
    if (accion === selectedAccion) {
      setAccion(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAccion(selectedAccion);
    }
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const iniciar = (e) => {
    e.preventDefault();
    if (usuario && animal && color && accion) {
      axios
        .post("http://localhost:3001/login", {
          usuario: usuario,
          animal: animal,
          color: color,
          accion: accion,
        })
        .then((response) => {
          const logueoCorrecto = response.data.success;
          // const usuarioLogueado = response.data.message;
          console.log(response.data.message);
          if (logueoCorrecto) {
            // alert("Usuario logueado con exito!!!");
            if (response.data.message === "Estudiante") {
              axios
                .get("http://localhost:3001/obtenerEstudiante", {
                  params: {
                    usuario: usuario,
                  },
                })
                .then((response) => {
                  const nombreUsuario = convertirInicialEnMayuscula(response.data[0].nombre_estudiante);                  sessionStorage.setItem("usuario", usuario);
                  sessionStorage.setItem("nombre", nombreUsuario);
                  sessionStorage.setItem("informacion", true.toString());
                  navigate("/menuJuegos");
                });
            }else if (response.data.message === "Tutor") {
            alert("Tutor logueado con exito!!!");  
            navigate("/menuJuegos");

            }
          } else {
            alert("No se logueo el usuario");
          }
        });
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
      <Form onSubmit={iniciar}>
        <Row className="fila">
          <Col md={5}>
            <center>
              <h2 className="titulo2">Usuario</h2>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-person-fill"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  value={usuario}
                  onChange={cambiarUsuario}
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
                  className={`imagen ${animal === "Condor" ? "selected" : ""}`}
                  onClick={() => seleccionarAnimal("Condor")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/cuy.png"
                  alt="Cuy"
                  className={`imagen ${animal === "Cuy" ? "selected" : ""}`}
                  onClick={() => seleccionarAnimal("Cuy")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/tortuga.png"
                  alt="Tortuga"
                  className={`imagen ${animal === "Tortuga" ? "selected" : ""}`}
                  onClick={() => seleccionarAnimal("Tortuga")}
                />
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <img
                  src="/img/login/osoAnteojos.png"
                  alt="Oso Anteojos"
                  className={`imagen ${
                    animal === "OsoAnteojos" ? "selected" : ""
                  }`}
                  onClick={() => seleccionarAnimal("OsoAnteojos")}
                />
              </Col>
            </Row>

            {/*  Colores */}
            <Row className="fila">
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionAmarillo ${
                    color === "Amarillo" ? "selected" : ""
                  }`}
                  onClick={() => seleccionarColor("Amarillo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionAzul ${color === "Azul" ? "selected" : ""}`}
                  onClick={() => seleccionarColor("Azul")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionRojo ${color === "Rojo" ? "selected" : ""}`}
                  onClick={() => seleccionarColor("Rojo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionVerde ${
                    color === "Verde" ? "selected" : ""
                  }`}
                  onClick={() => seleccionarColor("Verde")}
                ></div>
              </Col>
            </Row>

            {/*  Acciones */}
            <Row className="fila">
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "Volar" ? "selected" : ""}`}
                  onClick={() => seleccionarAccion("Volar")}
                >
                  Volar
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "Correr" ? "selected" : ""}`}
                  onClick={() => seleccionarAccion("Correr")}
                >
                  Correr
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "Nadar" ? "selected" : ""}`}
                  onClick={() => seleccionarAccion("Nadar")}
                >
                  Nadar
                </div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`accion ${accion === "Saltar" ? "selected" : ""}`}
                  onClick={() => seleccionarAccion("Saltar")}
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
