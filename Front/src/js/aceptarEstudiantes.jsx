import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, ButtonGroup } from "react-bootstrap";
import LogoEPN from "/img/logos/LogoEPN.png";
import LogoLudolab from "/img/logos/LogoLudolab.png";
import LogoFIS from "/img/logos/LogoFIS.png";
import Swal from "sweetalert2";
import axios from "axios";

import "../css/aceptarEstudiantes.css";

function AceptarEstudiantes() {
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
      .get("http://localhost:3001/obtenerEstudiantesNoValidados", {
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

  const aprobarEstudiante = (userEstudiante, nombre, apellido) => {
    const nombreMayuscula = convertirInicialEnMayuscula(nombre);
    const apellidoMayuscula = convertirInicialEnMayuscula(apellido);

    Swal.fire({
      title: "Confirmar aprobación",
      icon: "warning",
      html:
        "<i>¿Está seguro que desea aprobar al estudiante <strong>" +
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
        console.log(userEstudiante);
        console.log(nombre);
        console.log(apellido);
        axios
        .put("http://localhost:3001/aprobarEstudiante", {
          userEstudiante: userEstudiante,
          userTutor: sessionStorage.getItem("usuario"),
          nombre: nombre,
          apellido: apellido,
        })
        .then(() => {
          alert("Estudiante actualizado con éxito!!!");
          obtenerEstudiantes();
        })
        .catch((error) => {
          console.error("Error al aprobar estudiante:", error);
          // Puedes manejar el error de manera adecuada, mostrar un mensaje o realizar otras acciones necesarias.
        });
    }
  });
};

const irAdministracionTutor = () => {
  navigate("/administracionTutor");
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
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() =>
                aprobarEstudiante(
                  estudiante.user_estudiante,
                  estudiante.nombre_estudiante,
                  estudiante.apellido_estudiante
                )
              }
            >
              Aceptar
            </Button>
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
              Rechazar
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <h1 className="tituloGeneral">Aceptar Estudiantes</h1>

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
      <div className="barraLogos">
        <Link
          to="https://www.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Utiliza la imagen importada */}
          <img className="logo" src={LogoEPN} alt="Logo EPN" />
        </Link>
        <Link
          to="https://ludolab.epn.edu.ec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Utiliza la imagen importada */}
          <img className="logo" src={LogoLudolab} alt="Logo Ludolab" />
        </Link>
        <Link
          to="https://fis.epn.edu.ec/index.php/es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Utiliza la imagen importada */}
          <img className="logo" src={LogoFIS} alt="Logo FIS" />
        </Link>
      </div>
    </Container>
  );
}

export default AceptarEstudiantes;