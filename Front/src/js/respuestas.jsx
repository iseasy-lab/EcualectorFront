import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import "../css/insignias.css";
import BarraLogos from "./barraLogos";

function Respuestas() {
  const navigate = useNavigate();
  const [tipoJuego, setTipoJuego] = useState("");
  const [lecturaSeleccionada, setLecturaSeleccionada] = useState("");
  const [lecturasSeleccionadas, setLecturasSeleccionadas] = useState([]);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
  }, [navigate]);

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setTipoJuego(valorSeleccionado);
    obtenerLecturasPorTipoJuego(valorSeleccionado);
  };

  const obtenerLecturasPorTipoJuego = (tipoJuego) => {
    const lecturaItems = informacionLecturas[tipoJuego] || [];
    const lecturaItems2 = informacionLecturas[tipoJuego + "2"] || [];
    const todasLasLecturas = [...lecturaItems, ...lecturaItems2];
    setLecturasSeleccionadas(todasLasLecturas);
  };
  

  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Respuestas correctas</h1>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Form.Select
            value={tipoJuego}
            onChange={seleccionarComboBox}
            className="comboboxTutor"
          >
            <option disabled value="">
              Tipos de juego
            </option>
            <option value="Sabia decisión">Sabia decisión</option>
            <option value="Suelta la respuesta">Suelta la respuesta</option>
            <option value="¿Quién es quién?">¿Quién es quién?</option>
            <option value="¿Qué paso primero?">¿Qué paso primero?</option>
            <option value="¿Qué pasaría si...?">¿Qué pasaría si...?</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={lecturaSeleccionada}
            onChange={(e) => {
              const lecturaSeleccionada = e.target.value;
              setLecturaSeleccionada(lecturaSeleccionada);
            }}
            className="comboboxTutor"
          >
            <option value="">Lecturas</option>
            {lecturasSeleccionadas.map((lectura, index) => (
              <option key={index} value={lectura.tituloLectura}>
                {lectura.tituloLectura}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {tipoJuego ? (
                <div className="tabla-scroll-tutor">

        <Table striped bordered hover className="mb-3 text-center">
          <thead>
            <tr>
              <th>Preguntas</th>
              <th>Respuesta Correcta</th>
            </tr>
          </thead>
          <tbody>
          {preguntasRespuestas && preguntasRespuestas.map((preguntaRespuesta, index) => (
  <tr key={index}>
    <td>{preguntaRespuesta.pregunta}</td>
    <td>{preguntaRespuesta.respuestaCorrecta}</td>
  </tr>
))}

          </tbody>
        </Table>
        </div>
      ) : (
        <div className="contenedorAcercade mx-auto text-center">
          <p className="mensajeBienvenida">Selecciona un tipo de juego</p>
        </div>
      )}

      <Button
        type="button"
        onClick={irMenuTutor}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <BarraLogos />
    </Container>
  );
}

export default Respuestas;
