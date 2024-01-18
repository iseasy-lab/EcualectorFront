import { useNavigate, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import LogoEPN from "/img/logos/LogoEPN.png";
import LogoLudolab from "/img/logos/LogoLudolab.png";
import LogoFIS from "/img/logos/LogoFIS.png";
import axios from "axios";
import Swal from "sweetalert2";

function MenuTutor() {
  const navigate = useNavigate();

  const irMenuJuegos = () => {
    axios.post("http://localhost:3001/login", {
          usuario: "invitadoi",
          animal: "Condor",
          color: "Amarillo",
          accion: "Volar",
        })
        .then(() => {
          alert("Usuario logueado con exito!!!");
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
        variant="secondary"
        className="botonesTutor logros"
      >
        Aceptar Estudiantes
      </Button>
       <h1 className="tituloGeneral">Menu Tutor</h1>
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
          variant="secondary"
          className="botones azul"
        >
          <i className="bi bi-trophy-fill"></i> Tabla de Logros
        </Button>

        <Button
          type="button"
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

export default MenuTutor;
