import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import "../css/menuLecturas.css";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import ElCondorYElPuma from "../../public/audios/lecturas/ElCondorYElPuma.mp3";
import ElMisterioDelJarron from "../../public/audios/lecturas/ElMisterioDelJarron.mp3";
import LaCasa1028 from "../../public/audios/lecturas/LaCasa1028.mp3";
import LaHistoriaDeInti from "../../public/audios/lecturas/LaHistoriaDeInti.mp3";
import LaLeyendaDelPadreAlmeida from "../../public/audios/lecturas/LaLeyendaDelPadreAlmeida.mp3";
import ElOsoDeAnteojos from "../../public/audios/lecturas/ElOsoDeAnteojos.mp3";
import LaLeyendaDeCantuña from "../../public/audios/lecturas/LaLeyendaDeCantuña.mp3";
import ElGalloDeLaCatedral from "../../public/audios/lecturas/ElGalloDeLaCatedral.mp3";
import Guayaquil from "../../public/audios/lecturas/Guayaquil.mp3";
import LosOtavalos from "../../public/audios/lecturas/LosOtavalos.mp3";
import LaOllaDelPanecillo from "../../public/audios/lecturas/LaOllaDelPanecillo.mp3";
import TioPumaYTioZorro from "../../public/audios/lecturas/TioPumaYTioZorro.mp3";
import ElAncianoElNiñoYElBurro from "../../public/audios/lecturas/ElAncianoElNiñoYElBurro.mp3";
import LaPrincesaTristeDeSantaAna from "../../public/audios/lecturas/LaPrincesaTristeDeSantaAna.mp3";
import LaCapaDelEstudiante from "../../public/audios/lecturas/LaCapaDelEstudiante.mp3";
import FaunaDeLaCostaEcuatoriana from "../../public/audios/lecturas/FaunaDeLaCostaEcuatoriana.mp3";
import FaunaDeLaSierraEcuatoriana from "../../public/audios/lecturas/FaunaDeLaSierraEcuatoriana.mp3";
import FaunaDelOrienteEcuatoriano from "../../public/audios/lecturas/FaunaDelOrienteEcuatoriano.mp3";
import FaunaDeLasIslasGalapagos from "../../public/audios/lecturas/FaunaDeLasIslasGalapagos.mp3";
import FrutosDelEcuador from "../../public/audios/lecturas/FrutosDelEcuador.mp3";
import LaFuenteDeLosTalentos from "../../public/audios/lecturas/LaFuenteDeLos100Talentos.mp3";
import ElEspantapajarosSolidario from "../../public/audios/lecturas/ElEspantapajarosSolidario.mp3";
import Los3Animalitos from "../../public/audios/lecturas/Los3Animalitos.mp3";
import LaLechera from "../../public/audios/lecturas/LaLechera.mp3";
import LasDosVasijas from "../../public/audios/lecturas/LasDosVasijas.mp3";

function Lecturas() {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";
  const [reproducirBoton] = useSound(SonidoBoton);
  const [reproducirElCondorYElPuma] = useSound(ElCondorYElPuma);
  const [reproducirElMisterioDelJarron] = useSound(ElMisterioDelJarron);
  const [reproducirLaCasa1028] = useSound(LaCasa1028);
  const [reproducirLaHistoriaDeInti] = useSound(LaHistoriaDeInti);
  const [reproducirLaLeyendaDelPadreAlmeida] = useSound(
    LaLeyendaDelPadreAlmeida
  );
  const [reproducirElOsoDeAnteojos] = useSound(ElOsoDeAnteojos);
  const [reproducirLaLeyendaDeCantuña] = useSound(LaLeyendaDeCantuña);
  const [reproducirElGalloDeLaCatedral] = useSound(ElGalloDeLaCatedral);
  const [reproducirGuayaquil] = useSound(Guayaquil);
  const [reproducirLosOtavalos] = useSound(LosOtavalos);
  const [reproducirLaOllaDelPanecillo] = useSound(LaOllaDelPanecillo);
  const [reproducirTioPumaYTioZorro] = useSound(TioPumaYTioZorro);
  const [reproducirElAncianoElNiñoYElBurro] = useSound(ElAncianoElNiñoYElBurro);
  const [reproducirLaPrincesaTristeDeSantaAna] = useSound(LaPrincesaTristeDeSantaAna);
  const [reproducirLaCapaDelEstudiante] = useSound(LaCapaDelEstudiante);
  const [reproducirFaunaDeLaCostaEcuatoriana] = useSound(FaunaDeLaCostaEcuatoriana);
  const [reproducirFaunaDeLaSierraEcuatoriana] = useSound(FaunaDeLaSierraEcuatoriana);
  const [reproducirFaunaDelOrienteEcuatoriano] = useSound(FaunaDelOrienteEcuatoriano);
  const [reproducirFaunaDeLasIslasGalapagos] = useSound(FaunaDeLasIslasGalapagos);
  const [reproducirFrutosDelEcuador] = useSound(FrutosDelEcuador);
  const [reproducirLaFuenteDeLosTalentos] = useSound(LaFuenteDeLosTalentos);
  const [reproducirElEspantapajarosSolidario] = useSound(
    ElEspantapajarosSolidario
  );
  const [reproducirLos3Animalitos] = useSound(Los3Animalitos);
const [reproducirLaLechera] = useSound(LaLechera);
const [reproducirLasDosVasijas] = useSound(LasDosVasijas);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));
  }, [navigate]);

  const reproducirLectura = (tituloLectura) => {
    switch (tituloLectura) {
      case "El Cóndor y el Puma":
        reproducirElCondorYElPuma();
        break;
      case "El misterio del jarrón":
        reproducirElMisterioDelJarron();
        break;
      case "La casa 1028":
        reproducirLaCasa1028();
        break;
      case "La Historia de Inti":
        reproducirLaHistoriaDeInti();
        break;
      case "La leyenda del Padre Almeida":
        reproducirLaLeyendaDelPadreAlmeida();
        break;
      case "El Oso de anteojos":
        reproducirElOsoDeAnteojos();
        break;
      case "La Leyenda de Cantuña":
        reproducirLaLeyendaDeCantuña();
        break;
      case "El Gallo de la Catedral":
        reproducirElGalloDeLaCatedral();
        break;
      case "Guayaquil":
        reproducirGuayaquil();
        break;
      case "Los Otavalos":
        reproducirLosOtavalos();
        break;
      case "La Olla del Panecillo":
        reproducirLaOllaDelPanecillo();
        break;
      case "Tío Puma y Tío Zorro":
        reproducirTioPumaYTioZorro();
        break;
      case "El Anciano, El Niño y El Burro":
        reproducirElAncianoElNiñoYElBurro();
        break;
      case "La princesa triste de Santa Ana":
        reproducirLaPrincesaTristeDeSantaAna();
        break;
      case "La capa del estudiante":
        reproducirLaCapaDelEstudiante();
        break;
      case "Fauna de la Costa Ecuatoriana":
        reproducirFaunaDeLaCostaEcuatoriana();
        break;
      case "Fauna de la Sierra Ecuatoriana":
        reproducirFaunaDeLaSierraEcuatoriana();
        break;
      case "Fauna del Oriente Ecuatoriano":
        reproducirFaunaDelOrienteEcuatoriano();
        break;
      case "Fauna de las Islas Galápagos":
        reproducirFaunaDeLasIslasGalapagos();
        break;
      case "Frutos del Ecuador":
        reproducirFrutosDelEcuador();
        break;
      case "La fuente de los talentos":
        reproducirLaFuenteDeLosTalentos();
        break;
      case "El espantapájaros solidario":
        reproducirElEspantapajarosSolidario();
        break;
      case "Los tres animalitos":
        reproducirLos3Animalitos();
        break;
      case "La lechera":
        reproducirLaLechera();
        break;
      case "Las dos vasijas":
        reproducirLasDosVasijas();
        break;
      default:
        break;
    }
  };

  const irMenuJuegos = () => {
    sessionStorage.removeItem("tipoJuego");
    navigate("/menuJuegos");
  };

  const irInstrucciones = (tituloLectura) => {
    sessionStorage.setItem("tituloLectura", tituloLectura);
    navigate("/instruccionesJuego");
  };

  const lecturaItems =
    informacionLecturas[sessionStorage.getItem("tipoJuego")] || [];
  const lecturaItems2 =
    informacionLecturas[sessionStorage.getItem("tipoJuego") + "2"] || [];

  return (
    <Container>
      {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
        <>
          <img
            src="/img/fondo/Cartel.png"
            alt="Cartel"
            className="contenedorCartel"
          />
          <h2 className="cartelUsuario">
            <span className="contenidoCartel">{variableSession}</span>
          </h2>
        </>
      ) : null}
      <img
        src="/img/fondo/Cartel.png"
        alt="Cartel"
        className="contenedorInstruccion"
      />
      <h2 className="cartelInstruccionLectura">
        <span className="instruccionCartel">
          Selecciona la lectura que deseas conocer{" "}
        </span>
      </h2>
      <h1 className="tituloGeneral">{sessionStorage.getItem("tipoJuego")}</h1>

      <Col md={11} className="lecturas">
        <Carousel interval={null}>
          <Carousel.Item>
            <Row className="justify-content-center">
              {lecturaItems.map((item, index) => (
                <Col key={index} md={4} className="tarjetaLectura">
                  <div
                    onClick={() => irInstrucciones(item.tituloLectura)}
                    onMouseEnter={() => reproducirLectura(item.tituloLectura)}
                  >
                    <img
                      src={item.imagenLectura}
                      alt={item.tituloLectura}
                      className="imagenesLecturas"
                    />
                    <h3 className="tituloLectura">{item.tituloLectura}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              {lecturaItems2.map((item, index) => (
                <Col key={index} md={4} className="tarjetaLectura">
                  <div
                    onClick={() => irInstrucciones(item.tituloLectura)}
                    onMouseEnter={() => reproducirLectura(item.tituloLectura)}
                  >
                    <img
                      src={item.imagenLectura}
                      alt={item.tituloLectura}
                      className="imagenesLecturas"
                    />
                    <h3 className="tituloLectura">{item.tituloLectura}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Col>

      <Button
        type="button"
        onClick={irMenuJuegos}
        variant="secondary"
        className="regresarCentrado"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default Lecturas;
