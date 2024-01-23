import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { mezclasOpciones } from "./mezclarOpciones";

import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);

  useEffect(() => {
    setAnimalesMezclados(
      mezclasOpciones(["Condor", "Cuy", "Tortuga", "OsoAnteojos"])
    );
    setColoresMezclados(mezclasOpciones(["Amarillo", "Azul", "Rojo", "Verde"]));
    setAccionesMezcladas(
      mezclasOpciones(["Volar", "Correr", "Nadar", "Saltar"])
    );
  }, []);

  const cambiarUsuario = (event) => {
    const nuevoUsuario = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setUsuario(nuevoUsuario.toLowerCase());
  };

  const seleccionarOpcion = (opcion, setOpcion) => {
    setOpcion((prevOpcion) => (prevOpcion === opcion ? null : opcion));
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const iniciar = async (e) => {
    e.preventDefault();

    if (usuario && animal && color && accion) {
      try {
        const response = await axios.post("http://localhost:3001/login", {
          usuario,
          animal,
          color,
          accion,
        });

        if (response.data.success) {

          if (response.data.message === "Estudiante") {
            const estudianteResponse = await axios.get(
              "http://localhost:3001/obtenerNombreEstudiante",
              {
                params: {
                  usuario,
                },
              }
            );
            const nombreUsuario = convertirInicialEnMayuscula(
              estudianteResponse.data[0].nombre_estudiante
            );
            if (estudianteResponse.data[0].usuario_validado === 1) {
              sessionStorage.setItem("usuario", usuario);
              sessionStorage.setItem("nombre", nombreUsuario);
              sessionStorage.setItem("informacion", true.toString());
              navigate("/menuJuegos");
            } else {
              Swal.fire({
                title: "Su tutor debe validar su usuario",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
                allowOutsideClick: false,
              });
            }
          } else if (response.data.message === "Tutor") {
            sessionStorage.setItem("usuario", usuario);
            navigate("/menuTutor");
          }
        } else {
          Swal.fire({
            title: "No existe el usuario ingresado",
            icon: "error",
            confirmButtonText: '<span style="color:black">Aceptar</span>',
            confirmButtonColor: "yellow",
            allowOutsideClick: false,
          });
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    } else {
      Swal.fire({
        title: "Existen campos sin completar",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
        allowOutsideClick: false,
      });
    }
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title:
        '<span style="font-weight:bold">Información sobre usuario</span>',
      html: '<span style="font-weight:bold">Su usuario corresponde su nombre, seguido de la primera letra de su apellido.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the 'informacion' session variable
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const irIndex = () => {
    navigate("/");
  };

  const renderImagen = (nombreAnimal) => (
    <Col key={nombreAnimal} md={3} className="d-flex justify-content-center">
      <img
        src={`/img/login/${nombreAnimal.toLowerCase()}.png`}
        alt={nombreAnimal}
        className={`imagen ${animal === nombreAnimal ? "selected" : ""}`}
        onClick={() => seleccionarOpcion(nombreAnimal, setAnimal)}
      />
    </Col>
  );

  const renderOpcion = (nombreOpcion) => (
    <Col key={nombreOpcion} md={3} className="d-flex justify-content-center">
      <div
        className={`opcion${nombreOpcion} ${
          color === nombreOpcion ? "selected" : ""
        }`}
        onClick={() => seleccionarOpcion(nombreOpcion, setColor)}
      ></div>
    </Col>
  );

  const renderAccion = (nombreAccion) => (
    <Col key={nombreAccion} md={3} className="d-flex justify-content-center">
      <div
        className={`accion ${accion === nombreAccion ? "selected" : ""}`}
        onClick={() => seleccionarOpcion(nombreAccion, setAccion)}
      >
        {nombreAccion}
      </div>
    </Col>
  );

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
              {/* <Link id="olvideContrasena" className="sinContrasena">
                ¿ Olvidaste tu Contraseña ?
              </Link> */}
            </center>
          </Col>

          <Col md={7} border="dark" className="contenedorLogin">
            <center>
              <h2 className="titulo2">Contraseña</h2>
            </center>
            {/* Animales */}
            <Row className="fila">
              {animalesMezclados.map((animal) => renderImagen(animal))}
            </Row>

            {/* Colores */}
            <Row className="fila">
              {coloresMezclados.map((color) => renderOpcion(color))}
            </Row>

            {/* Acciones */}
            <Row className="fila">
              {accionesMezcladas.map((accion) => renderAccion(accion))}
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

      <i
        className="bi bi-info-circle-fill botonInformacionLogin"
        onClick={mostrarInformacion}
      ></i>
    </Container>
  );
};

export default Login;
