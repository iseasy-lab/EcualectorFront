import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { mezclasOpciones } from "./mezclarOpciones";

import "../css/login.css";

const RestaurarContrasena = () => {
  const navigate = useNavigate();

  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);

  useEffect(() => {
    setAnimalesMezclados(
      mezclasOpciones(["Tigrillo", "Cuy", "Tortuga", "OsoAnteojos"])
    );
    setColoresMezclados(mezclasOpciones(["Amarillo", "Azul", "Rojo", "Verde"]));
    setAccionesMezcladas(
      mezclasOpciones(["Comer", "Dormir", "Nadar", "Saltar"])
    );
  }, []);

  const seleccionarOpcion = (opcion, setOpcion) => {
    setOpcion((prevOpcion) => (prevOpcion === opcion ? null : opcion));
  };

  const iniciar = (e) => {
    e.preventDefault();
    const userEstudiante = sessionStorage.getItem("usuarioParaRecuperarContrasena");

    if (animal && color && accion) {
        axios.put("http://localhost:3001/actualizarContrasena", {
            userEstudiante,
            animal,
            color,
            accion,
          })
        .then(() => {
          Swal.fire({
            title: "Contraseña actualizada",
            icon: "success",
            confirmButtonText: '<span style="color:black">Confirmar</span>',
            confirmButtonColor: "yellow",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
        });
        navigate("/login");
    }else{
        Swal.fire({
            title: "Seleccione todos los elementos de la contraseña",
            icon: "error",
            confirmButtonText: '<span style="color:black">Confirmar</span>',
            confirmButtonColor: "yellow",
        });
    }
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title: '<span style="font-weight:bold">Información sobre usuario</span>',
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

  const irLogin = () => {
    navigate("/login");
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
      <h1 className="tituloGeneral">Restaurar Contraseña</h1>
      <Form onSubmit={iniciar}>
        <Row className="fila">
          <Col md={5}>
            <center>
              <h2 className="titulo2">Usuario</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={sessionStorage.getItem(
                    "usuarioParaRecuperarContrasena"
                  )}
                  aria-label="NombreUsuario"
                  aria-describedby="basic-addon1"
                  readOnly
                />
              </InputGroup>
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
        onClick={irLogin}
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

export default RestaurarContrasena;
