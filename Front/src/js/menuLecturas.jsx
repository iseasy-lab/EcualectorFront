import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import Sonido from "./sonido";
import "../css/menuLecturas.css";

function Lecturas() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
  }, [navigate]);

  const irMenuJuegos = () => {
    sessionStorage.removeItem("tipoJuego");
    navigate("/menuJuegos");
  };

  const irInstrucciones = (tituloLectura) => {
    sessionStorage.setItem("tituloLectura", tituloLectura);
    navigate("/instruccionesJuego");
  };

  const tipoJuego = sessionStorage.getItem("tipoJuego");
  const tipoJuego2 = sessionStorage.getItem("tipoJuego") + "2";
  const lecturaItems = informacionLecturas[tipoJuego] || [];
  const lecturaItems2 = informacionLecturas[tipoJuego2] || [];

  return (
    <Container>
      <h1 className="tituloGeneral">{tipoJuego}</h1>
      <h2 className="ordenLecturas">
        Selecciona la lectura que deseas conocer
      </h2>

      <Col md={11} className="lecturas">
        <Carousel interval={null}>
          <Carousel.Item>
            <Row className="justify-content-center">
              {lecturaItems.map((item, index) => (
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
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

      <Sonido />
    </Container>
  );
}

export default Lecturas;
