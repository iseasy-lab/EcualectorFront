import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";

const FormularioRegistro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleSelectChange = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
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
    if (nombre && animal && color && accion) {
      // Si todos los campos requeridos tienen valores, entonces realiza la acción
      console.log("Formulario enviado con éxito");
      console.log("Nombre:", nombre);
      console.log("Apellido:", apellido);
      console.log("Animal:", animal);
      console.log("Color:", color);
      console.log("Accion:", accion);
      console.log("Opción seleccionada:", opcionSeleccionada);
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
      <Form onSubmit={handleSubmit}>
        <Row className="fila">
          <Col md={5} className="usuario">
            <center>
              <h2 className="titulo2">Nombre</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={handleChangeNombre}
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
                  onChange={handleChangeApellido}
                  placeholder="Ejemplo: velez"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">¿Quién Serás?</h2>
              <InputGroup className="mb-3">
                <Form.Select
                  value={opcionSeleccionada}
                  onChange={handleSelectChange}
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
