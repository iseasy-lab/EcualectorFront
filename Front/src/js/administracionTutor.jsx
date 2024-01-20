import { useNavigate, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import LogoEPN from "/img/logos/LogoEPN.png";
import LogoLudolab from "/img/logos/LogoLudolab.png";
import LogoFIS from "/img/logos/LogoFIS.png";

function AdministracionTutor() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
  }, [navigate]);

  const irAceptarEstudiantes = () => {
    navigate("/aceptarEstudiantes");
  };

  const irEstudiantesInscritos = () => {
    navigate("/estudiantesInscritos");
  };

  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  return (
    <Container>
       <h1 className="tituloGeneral">Administración Tutor</h1>
      <div className="contenedorIndex contenedorMenuTutor">
        <Button
          type="button"
          onClick={irAceptarEstudiantes}
          variant="secondary"
          className="botones amarillo"
        >
         Aceptar Estudiantes
        </Button>

        <Button
          type="button"
          onClick={irEstudiantesInscritos}
          variant="secondary"
          className="botones azul"
        >
          Estudiantes Inscritos
        </Button>
      </div>
      <Button
        type="button"
        onClick={irMenuTutor}
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

export default AdministracionTutor;
