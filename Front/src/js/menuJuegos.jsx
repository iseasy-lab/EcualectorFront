import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Sonido from "./sonido";

import "../css/menuJuegos.css";

function MenuJuegos() {
  const navigate = useNavigate();


  const irTablaLogros = () => {
    navigate("/tablaLogros");
  };

  const irInsignias = () => {
    navigate("/insignias");
  };

  const confirmarSalida = () => {
    Swal.fire({
      title: "¿Quiere Salir del Juego?",
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

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title:
        '<span style="font-weight:bold">Bienvenido a Ecuador Lector</span>',
      html: '<span style="font-weight:bold">Selecciona entre los 6 tipos de juegos que se presentan y consigue las insignias ocultas.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    });
  };

  const irLectura = (ruta) => {
    navigate(`/${ruta}`);
  };

  const irIndex = () => {
    navigate("/");
  };

  const lecturas = [
    { titulo: "Elige Sabiamente", ruta: "menuLecturas" },
    { titulo: "Ponlo en su Lugar", ruta: "menuLecturas" },
    { titulo: "¿Quién es Quién?", ruta: "menuLecturas" },
    { titulo: "¿Qué Paso Primero?", ruta: "menuLecturas" },
    { titulo: "¿Qué Pasaría si...?", ruta: "menuLecturas" },
    { titulo: "Conexión Maestra", ruta: "menuLecturas" },
  ];

   useEffect(() => {
     mostrarInformacion();
   }, []);

  return (
    <Container>
      <Button
        type="button"
        onClick={irTablaLogros}
        variant="secondary"
        className="botonesTutor logros"
      >
        Tabla de Logros
      </Button>
      <Button
        type="button"
        onClick={irInsignias}
        variant="secondary"
        className="botonesTutor insignias"
      >
        Insignias
      </Button>
      <h1 className="tituloGeneral">Menú de Juegos</h1>
      <div className="contenedorMenuJuegos">
        {lecturas.map(
          (lectura, index) =>
            index % 2 === 0 && (
              <Row key={index} className="fila">
                {[0, 1].map((col) => (
                  <Col
                    md={6}
                    key={col}
                    className="d-flex justify-content-center"
                  >
                    {lecturas[index + col] && (
                      <Button
                        variant="secondary"
                        className="botonLectura"
                        onClick={() => irLectura(lecturas[index + col].ruta)}
                      >
                        {lecturas[index + col].titulo}
                      </Button>
                    )}
                  </Col>
                ))}
              </Row>
            )
        )}
      </div>
      <Button
        type="button"
        onClick={confirmarSalida}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>

      <i
        className="bi bi-info-circle botonInformacion"
        onClick={mostrarInformacion}
      ></i>
      <Sonido />
    </Container>
  );
}

export default MenuJuegos;
