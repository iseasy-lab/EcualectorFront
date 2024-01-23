import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

import "../css/tablaLogros.css";

function TablaLogrosTutor() {
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    obtenerEstudiantes();
  }, [navigate]);

  const obtenerEstudiantes = () => {
    axios
      .get("http://localhost:3001/obtenerDatosEstudiantesParaTutor", {
        params: {
          usuario: sessionStorage.getItem("usuario"),
        },
      })
      .then((response) => {
        setEstudiantes(response.data);
      });
  };
  
  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  function renderizarEstudiante(estudiante) {
    const nombreConMayuscula = convertirInicialEnMayuscula(
        estudiante.NOMBRE_ESTUDIANTE
      );
      const apellidoConMayuscula = convertirInicialEnMayuscula(
        estudiante.APELLIDO_ESTUDIANTE
      );

      let insigniaObtenida;
      if(estudiante.INSIGNIA_OBTENIDA === 1){
        insigniaObtenida = "Obtenida";
        }
        else{
            insigniaObtenida = "Pendiente";
        }

    
    return (
      <tr key={estudiante.ID_LECTURA}>
        <td>{nombreConMayuscula} {apellidoConMayuscula}</td>
        <td>{estudiante.TIPO_JUEGO}</td>
        <td>{estudiante.NOMBRE_LECTURA}</td>
        <td>{insigniaObtenida}</td>
        <td>{estudiante.PREGUNTAS_CONTESTADAS}</td>
        <td>{estudiante.PREGUNTAS_CORRECTAS}</td>
        <td>{estudiante.DURACION}</td>
      </tr>
    );
  }

  return (
    <Container>
      <h1 className="tituloGeneral">Tabla de Logros</h1>
      <Form className="mb-3 mt-3">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Usuario: pablov"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Col>
          <Col md={4}>
            <Form.Select>
              <option value="">Tipo de Juego</option>
              <option value="tipo1">Elige Sabiamente</option>
              <option value="tipo2">Suelta la respuesta</option>
              <option value="tipo3">¿Quién es quién?</option>
              <option value="tipo4">¿Qué paso primero?</option>
              <option value="tipo5">¿Qué pasaría si...?</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Button type="submit" variant="secondary" className="botonBuscar">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="tabla-scroll">
        <Table striped bordered hover className="mb-3 text-center">
        <thead>
             <tr>
               <th>Jugador</th>
               <th>Juego</th>
               <th>Lectura</th>
               <th>Insignia</th>
               <th># Preguntas</th>
               <th>Aciertos</th>
               <th>Tiempo Intento</th>
             </tr>
           </thead>
          <tbody>{estudiantes.map(renderizarEstudiante)}</tbody>
        </Table>
      </div>

      <Button
        type="button"
        onClick={irMenuTutor}
        variant="secondary"
        className="botones regresarCentrado"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default TablaLogrosTutor;
