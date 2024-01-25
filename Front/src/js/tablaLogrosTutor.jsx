import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

import "../css/tablaLogros.css";

function TablaLogrosTutor() {
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
const [tipoJuego, setTipoJuego] = useState("");

  

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
        usuarioTutor: sessionStorage.getItem("usuario"),
        usuarioEstudiante: nombreUsuario,
        tipoJuego: tipoJuego,
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
        <td>{estudiante.USER_ESTUDIANTE}</td>
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
      <Form className="mb-3 mt-3" onSubmit={(e) => { e.preventDefault(); obtenerEstudiantes(); }}>
  <Row>
    <Col md={2}></Col>
    <Col md={3}>
      <Form.Control
        type="text"
        placeholder="Usuario: pablov"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
    </Col>
    <Col md={3}>
      <Form.Select
        value={tipoJuego}
        onChange={(e) => setTipoJuego(e.target.value)}
      >
        <option value="">Todos los juegos</option>
        <option value="Elige sabiamente">Elige sabiamente</option>
        <option value="Suelta la respuesta">Suelta la respuesta</option>
        <option value="¿Quién es quién?">¿Quién es quién?</option>
        <option value="¿Qué paso primero?">¿Qué paso primero?</option>
        <option value="¿Qué pasaría si...?">¿Qué pasaría si...?</option>
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
               <th>Usuario</th>
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
