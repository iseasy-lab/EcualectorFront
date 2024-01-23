import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";

import "../css/tablaLogros.css";

function TablaLogros() {
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
      .get("http://localhost:3001/obtenerDatosEstudiantes", {
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

  function renderizarEstudiante(estudiante) {
    const nombreConMayuscula = convertirInicialEnMayuscula(
      estudiante.NOMBRE_ESTUDIANTE
    );
    const apellidoConMayuscula = convertirInicialEnMayuscula(
      estudiante.APELLIDO_ESTUDIANTE
    );

    let insigniaObtenida;
    if (estudiante.INSIGNIA_OBTENIDA === 1) {
      insigniaObtenida = "Obtenida";
    } else {
      insigniaObtenida = "Pendiente";
    }

    return (
      <tr key={estudiante.ID_LECTURA}>
        <td>
          {nombreConMayuscula} {apellidoConMayuscula}
        </td>
        <td>{estudiante.TIPO_JUEGO}</td>
        <td>{estudiante.NOMBRE_LECTURA}</td>
        <td>{insigniaObtenida}</td>
        <td>{estudiante.PREGUNTAS_CONTESTADAS}</td>
        <td>{estudiante.PREGUNTAS_CORRECTAS}</td>
        <td>{estudiante.DURACION}</td>
      </tr>
    );
  }

  const irMenuLecturas = () => {
    navigate("/menuJuegos");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Tabla de Logros</h1>

      <div className="tabla-scroll tablaEstudiantes">
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
        onClick={irMenuLecturas}
        variant="secondary"
        className="botones regresarCentrado"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default TablaLogros;
