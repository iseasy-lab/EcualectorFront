import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, ButtonGroup } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import Swal from "sweetalert2";
import axios from "axios";

import "../css/aceptarEstudiantes.css";

function ListaEstudiantes() {
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
      .get("http://localhost:3001/obtenerEstudiantesValidados", {
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

  const eliminarEstudiante = (userEstudiante, nombre, apellido) => {
    const nombreMayuscula = convertirInicialEnMayuscula(nombre);
    const apellidoMayuscula = convertirInicialEnMayuscula(apellido);

    Swal.fire({
      title: "Confirmar eliminación",
      icon: "warning",
      html:
        "<i>¿Está seguro que desea eliminar al estudiante <strong>" +
        nombreMayuscula +
        " " +
        apellidoMayuscula +
        "</strong>?</i>",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Confirmar</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:3001/eliminarEstudiante", {
            params: {
              userEstudiante: userEstudiante,
              userTutor: sessionStorage.getItem("usuario"),
              nombre: nombre,
              apellido: apellido,
            },
          })
          .then(() => {
            alert("Estudiante eliminado con exito!!!");
            obtenerEstudiantes();
          })
          .catch((error) => {
            console.error("Error al eliminar estudiante:", error);
            // Puedes manejar el error de manera adecuada, mostrar un mensaje o realizar otras acciones necesarias.
          });
      }
    });
  };

  const irAdministracionTutor = () => {
    navigate("/menuTutor");
  };

  function renderizarEstudiante(estudiante) {
    const nombreConMayuscula = convertirInicialEnMayuscula(
      estudiante.nombre_estudiante
    );
    const apellidoConMayuscula = convertirInicialEnMayuscula(
      estudiante.apellido_estudiante
    );

    return (
      <tr key={estudiante.user_estudiante}>
        <td>
          {nombreConMayuscula} {apellidoConMayuscula}
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() =>
              eliminarEstudiante(
                estudiante.user_estudiante,
                estudiante.nombre_estudiante,
                estudiante.apellido_estudiante
              )
            }
          >
            Eliminar estudiante
          </Button>
        </td>
      </tr>
    );
  }

  const irAceptarEstudiantes = () => {
    navigate("/aceptarEstudiantes");
  }

  return (
    <Container>
      <h1 className="tituloGeneral">Lista Estudiantes</h1>

      <ButtonGroup className="contenedorBotonesTutor">
      <Button
        type="button"
        variant="secondary"
        className="botonesAdministracionTutor " disabled
      >
        Lista Estudiantes{" "}
      </Button>
      <Button
        type="button"
        onClick={irAceptarEstudiantes}
        variant="secondary"
        className="botonesAdministracionTutor" 
      >
        Aceptar Estudiantes{" "}
      </Button>
      </ButtonGroup>

      <div className="tabla-scroll">
        <Table striped bordered hover className="mb-3 text-center">
          <thead>
            <tr>
              <th>Nombre Estudiante</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{estudiantes.map(renderizarEstudiante)}</tbody>
        </Table>
      </div>

      <Button
        type="button"
        onClick={irAdministracionTutor}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <BarraLogos />
     
    </Container>
  );
}

export default ListaEstudiantes;
