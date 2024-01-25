import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import BarraLogos from "./barraLogos";
import axios from "axios";
import Swal from "sweetalert2";

function MenuTutor() {
  const navigate = useNavigate();

  const irListaEstudiantes = () => {
    navigate("/listaEstudiantes");
  };

  const irTablaLogrosTutor = () => {
    navigate("/tablaLogrosTutor");
  }

  const irInsigniasTutor = () => {
    navigate("/insigniasTutor");
  }

  const irMenuJuegos = () => {
    axios.post("http://localhost:3001/login", {
          usuario: "invitadoi",
          animal: "Condor",
          color: "Amarillo",
          accion: "Volar",
        })
        .then(() => {
          sessionStorage.setItem("usuario", "invitadoi");
          sessionStorage.setItem("nombre", "Invitado");
          sessionStorage.setItem("informacion", true.toString());
          navigate("/menuJuegos");
        });
  };

  const confirmarSalida = () => {
    Swal.fire({
      title: "Desea Cerrar Sesión?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Salir</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        irIndex();
      }
    });
  };

  const irIndex = () => {
    navigate("/");
    sessionStorage.clear();
  };

  return (
    <Container>
      <Button
        type="button"
        onClick={irListaEstudiantes}
        variant="secondary"
        className="botonesTutor logros"
      >
        Estudiantes
      </Button>
       <h1 className="tituloGeneral">Menú Tutor</h1>
      <div className="contenedorIndex">
        <Button
          type="button"
          onClick={irMenuJuegos}
          variant="secondary"
          className="botones amarillo"
        >
         Jugar
        </Button>

        <Button
          type="button"
          onClick={irTablaLogrosTutor}
          variant="secondary"
          className="botones azul"
        >
          <i className="bi bi-trophy-fill"></i> Tabla de Logros
        </Button>

        <Button
          type="button"
          onClick={irInsigniasTutor}
          variant="secondary"
          className="botones rojo"
        >
          <i className="bi bi-award-fill"></i> Insignias
        </Button>
      </div>
      <Button
        type="button"
        onClick={confirmarSalida}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>
      <BarraLogos />
    </Container>
  );
}

export default MenuTutor;
