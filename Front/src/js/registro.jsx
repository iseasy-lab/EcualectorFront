import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";

const FormularioRegistro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [usuarioTutor, setUsuarioTutor] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);

  const cambiarNombre = (event) => {
    const nuevoNombre = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
    setNombre(nuevoNombre.toLowerCase());
  };

  const cambiarApellido = (event) => {
    const nuevoApellido = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
    setApellido(nuevoApellido.toLowerCase());
  };

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
  };

  const cambiarUsuarioTutor = (event) => {
    const nuevoUsuarioTutor = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
    setUsuarioTutor(nuevoUsuarioTutor.toLowerCase());
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

  const registrar = (e) => {
    e.preventDefault();
    if (nombre && apellido && opcionSeleccionada && animal && color && accion) {
      if (opcionSeleccionada === "Docente") {
        axios
          .post("http://localhost:3001/registrarTutor", {
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then(() => {
            alert("Usuario registrado con exito!!!");
            navigate("/login");
          });
      }
      if (opcionSeleccionada === "Estudiante" && usuarioTutor) {
        axios
          .post("http://localhost:3001/registrarEstudiante", {
            usuarioTutor: usuarioTutor,
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then((response) => {
            console.log(response.data.success);
            const tutorNoExiste = response.data.success;
            if (tutorNoExiste) {
              alert("El código de tutor no existe");
            } else {
              alert("Usuario registrado con exito!!!");
              navigate("/login");
            }
          });
      }
    } else {
      console.error("Por favor, completa todos los campos");
    }
  };

  const irIndex = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Registro de Jugador</h1>
      <Form onSubmit={registrar}>
        <Row className="fila">
          <Col md={5} className="usuario">
            <center>
              <h2 className="titulo2">Nombre</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={cambiarNombre}
                  placeholder="Ejemplo: pablo"
                  aria-label="NombreUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">Apellido</h2>
              <InputGroup className=" mb-3">
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={cambiarApellido}
                  placeholder="Ejemplo: velez"
                  aria-label="ApellidoUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">¿Quién Serás?</h2>
              <InputGroup className="mb-3">
                <Form.Select
                  value={opcionSeleccionada}
                  onChange={seleccionarComboBox}
                >
                  <option defaultValue disabled value="">
                    Selecciona
                  </option>
                  <option value="Docente">Docente</option>
                  <option value="Estudiante">Estudiante</option>
                </Form.Select>
              </InputGroup>
              {opcionSeleccionada === "Estudiante" && (
                // Mostrar el campo de entrada del usuario del tutor solo cuando se selecciona "Estudiante"
                <div>
                  <h2 className="titulo2">Código de Tutor</h2>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      value={usuarioTutor}
                      onChange={cambiarUsuarioTutor}
                      placeholder="Ejemplo: juanp"
                      aria-label="CodigoTutor"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              )}
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
            Registrar
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

export default FormularioRegistro;
