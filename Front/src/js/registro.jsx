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
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);

  const cambiarNombre = (event) => {
    const nuevoNombre = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  setNombre(
    nuevoNombre.toLowerCase()
  );  };

  const cambiarApellido = (event) => {
    const nuevoApellido = event.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  setApellido(
    nuevoApellido.toLowerCase()
  );
    };

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
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

  const handleSelectColor = (selectedColor) => {
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
      // Si todos los campos requeridos tienen valores, entonces realiza la acción
      // console.log("Formulario enviado con éxito");
      // console.log("Nombre:", nombre);
      // console.log("Apellido:", apellido);
      // console.log("Animal:", animal);
      // console.log("Color:", color);
      // console.log("Accion:", accion);
      // console.log("Opción seleccionada:", opcionSeleccionada);
      axios.post("http://localhost:3001/registrar", {
          nombre: nombre,
          apellido: apellido,
          rol: opcionSeleccionada,
          animal: animal,
          color: color,
          accion: accion,
        }).then((response) => {
          console.log(response.data); // Puedes ajustar esto según la estructura de tu respuesta
          alert("Usuario registrado con exito!!!");
          navigate("/menuJuegos");
        });
    } else {
      // Muestra un mensaje de error o realiza otras acciones según sea necesario
      console.error("Por favor, completa todos los campos");
    }
  };

  const irIndex = () => {
    navigate("/");
  }

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
                  aria-label="Username"
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
                  aria-label="Username"
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
                  onClick={() => handleSelectColor("Amarillo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionAzul ${
                    color === "Azul" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("Azul")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionRojo ${
                    color === "Rojo" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("Rojo")}
                ></div>
              </Col>
              <Col md={3} className="d-flex justify-content-center">
                <div
                  className={`opcionVerde ${
                    color === "Verde" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectColor("Verde")}
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
        <Button type="button" onClick={irIndex} variant="secondary"
        className="regresar">
        <i className="bi bi-caret-left-fill"></i> Regresar
        </Button>
    </Container>
  );
};

export default FormularioRegistro;
