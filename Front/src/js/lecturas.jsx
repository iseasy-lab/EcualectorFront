import { useNavigate } from "react-router-dom";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import Sonido from "./sonido";
import "../css/lecturas.css";

function Lecturas() {
  const navigate = useNavigate();

  const irMenuJuegos = () => {
    navigate("/menuJuegos");
  };

  const lecturaItems = [
    {
      imgSrc: "/img/lecturas/EjemplosPortadaMenu.jpeg",
      title: "Seleccionar la Respuesta 1",
    },
    {
      imgSrc: "/img/lecturas/EjemplosPortadaMenu.jpeg",
      title: "Seleccionar la Respuesta 2",
    },
    {
      imgSrc: "/img/lecturas/EjemplosPortadaMenu.jpeg",
      title: "Seleccionar la Respuesta 2",
    },
  ];

  const lecturaItems2 = [
    {
      imgSrc: "/img/lecturas/EjemplosPortadaMenu.jpeg",
      title: "El Gallo de la Catedral 1",
    },
    {
      imgSrc: "/img/lecturas/EjemplosPortadaMenu.jpeg",
      title: "El Gallo de la Catedral 2",
    },
  ];

  return (
    <Container>
  <h1 className="tituloGeneral">Lecturas</h1>
  <h2 className="ordenLecturas">Selecciona la lectura que deseas conocer</h2>

    <Col md={11} className="lecturas">
      <Carousel interval={null}>
        <Carousel.Item>
          <Row className="justify-content-center">
            {lecturaItems.map((item, index) => (
              <Col key={index} md={4} className="tarjetaLectura">
                <div>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="imagenesLecturas"
                  />
                  <h3 className="tituloLectura">{item.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row className="justify-content-center">
            {lecturaItems2.map((item, index) => (
              <Col key={index} md={4} className="tarjetaLectura">
                <div>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="imagenesLecturas"
                  />
                  <h3 className="tituloLectura">{item.title}</h3>
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
    className="regresar"
  >
    <i className="bi bi-caret-left-fill"></i> Regresar
  </Button>

  <Sonido />
</Container>
  );
}

export default Lecturas;
