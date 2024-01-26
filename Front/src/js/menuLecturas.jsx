import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import "../css/menuLecturas.css";

function Lecturas() {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));

  }, [navigate]);

  const irMenuJuegos = () => {
    sessionStorage.removeItem("tipoJuego");
    navigate("/menuJuegos");
  };

  const irInstrucciones = (tituloLectura) => {
    sessionStorage.setItem("tituloLectura", tituloLectura);
    navigate("/instruccionesJuego");
  };

  const lecturaItems = informacionLecturas[sessionStorage.getItem("tipoJuego")] || [];
  const lecturaItems2 = informacionLecturas[sessionStorage.getItem("tipoJuego") + "2"] || [];

  return (
    <Container>
      {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
    <h2 className="cartelUsuario">
      <span className="contenidoCartel">{variableSession}</span>
    </h2>
) : null}
      <h1 className="tituloGeneral">{sessionStorage.getItem("tipoJuego")}</h1>
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
        className="botones regresarCentrado"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

    </Container>
  );
}

export default Lecturas;
