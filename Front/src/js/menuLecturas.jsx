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
import ElOsoDeAnteojos from "../../public/audios/lecturas/ElOsoDeAnteojos.mp3";
import LaLeyendaDeCantuña from "../../public/audios/lecturas/LaLeyendaDeCantuña.mp3";
import ElGalloDeLaCatedral from "../../public/audios/lecturas/ElGalloDeLaCatedral.mp3";
import ElCondor from "../../public/audios/lecturas/ElCondor.mp3";
import LosOtavalos from "../../public/audios/lecturas/LosOtavalos.mp3";
import LaOllaDelPanecillo from "../../public/audios/lecturas/LaOllaDelPanecillo.mp3";
import TioPumaYTioZorro from "../../public/audios/lecturas/TioPumaYTioZorro.mp3";
import ElAncianoElNiñoYElBurro from "../../public/audios/lecturas/ElAncianoElNiñoYElBurro.mp3";
import LaFuenteDeLos100Talentos from "../../public/audios/lecturas/LaFuenteDeLos100Talentos.mp3";
import ElEspantapajarosSolidario from "../../public/audios/lecturas/ElEspantapajarosSolidario.mp3";
import Los3Animalitos from "../../public/audios/lecturas/Los3Animalitos.mp3";

function Lecturas() {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";
  const [reproducirBoton] = useSound(SonidoBoton);
  const [reproducirElCondorYElPuma] = useSound(ElCondorYElPuma);
  const [reproducirElMisterioDelJarron] = useSound(ElMisterioDelJarron);
  const [reproducirLaCasa1028] = useSound(LaCasa1028);
  const [reproducirElOsoDeAnteojos] = useSound(ElOsoDeAnteojos);
  const [reproducirLaLeyendaDeCantuña] = useSound(LaLeyendaDeCantuña);
  const [reproducirElGalloDeLaCatedral] = useSound(ElGalloDeLaCatedral);
  const [reproducirElCondor] = useSound(ElCondor);
  const [reproducirLosOtavalos] = useSound(LosOtavalos);
  const [reproducirLaOllaDelPanecillo] = useSound(LaOllaDelPanecillo);
  const [reproducirTioPumaYTioZorro] = useSound(TioPumaYTioZorro);
  const [reproducirElAncianoElNiñoYElBurro] = useSound(ElAncianoElNiñoYElBurro);
  const [reproducirLaFuenteDeLos100Talentos] = useSound(
    LaFuenteDeLos100Talentos
  );
  const [reproducirElEspantapajarosSolidario] = useSound(
    ElEspantapajarosSolidario
  );
  const [reproducirLos3Animalitos] = useSound(Los3Animalitos);

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
      case "El Oso de anteojos":
        reproducirElOsoDeAnteojos();
        break;
      case "La Leyenda de Cantuña":
        reproducirLaLeyendaDeCantuña();
        break;
      case "El Gallo de la Catedral":
        reproducirElGalloDeLaCatedral();
        break;
      case "El Cóndor":
        reproducirElCondor();
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
      case "La fuente de los 100 talentos":
        reproducirLaFuenteDeLos100Talentos();
        break;
      case "El espantapájaros solidario":
        reproducirElEspantapajarosSolidario();
        break;
      case "Los tres animalitos":
        reproducirLos3Animalitos();
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
                  <div onClick={() => irInstrucciones(item.tituloLectura)}>
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
