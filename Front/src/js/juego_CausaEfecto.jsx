import { useNavigate } from "react-router-dom";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import Sonido from "./sonido";

import "../css/causaEfecto.css";

const CausaEfecto = () => {
    const navigate = useNavigate();
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

    useEffect(() => {
      if(sessionStorage.getItem("usuario") === null){
        navigate("/");
      }
    }, [navigate]);
    
  const opcionesRespuesta = [
    "Perico",
    "Tigrillo",
    "Tortuga",
    "Puma",
  ];

  const manejarSeleccion = (index) => {
    setRespuestaSeleccionada(index);
  };

    const siguienteEjercicio = () => {
      // Swal.fire({
      //   icon: "info",
      //   text: 'Pasar de ejercicio',
      //   confirmButtonText: '<span style="color:black">Continuar</span>',
      //   confirmButtonColor: "yellow", 
      // });
      console.log("Respuesta seleccionada:", respuestaSeleccionada !== null ? opcionesRespuesta[respuestaSeleccionada] : "Ninguna respuesta seleccionada");
      terminarJuego();
    };

    const irInstrucciones = () => {
        navigate("/instruccionesJuego");
      }

      const terminarJuego = () => {
        Swal.fire({
          title: "Puntajes",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "yellow",
          cancelButtonText: '<span style="color:black">Reiniciar</span>',
          confirmButtonText: 'Salir',
          confirmButtonColor: "red", 
        }).then((result) => {
          if (result.isConfirmed) {
            irInstrucciones();
          }
        });
      }

      const mostrarInformacion = () => {
        Swal.fire({
          icon: "info",
          html: '<span style="font-weight:bold">Selecciona la respuesta que creas correcta, una vez las hayas seleccionado una respuesta presiona el botón continuar.</span>',
          confirmButtonText: '<span style="color:black">Continuar</span>',
          confirmButtonColor: "yellow", 
        });
      }

    return (
        <Container>
        <h1 className="tituloGeneral">¿Qué Pasaría si ...?</h1>
        <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

        <div className="pregunta mx-auto text-center">
        <p>
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar 
        </p>
      </div>
      <Row className="contenedorCausaEfecto">
      {opcionesRespuesta.map((opcion, index) => (
        <Col key={index} md={5}>
          <div
            className={`respuestaCausaEfecto ${respuestaSeleccionada === index ? 'seleccionada' : ''}`}
            onClick={() => manejarSeleccion(index)}
          >
            {opcion}
          </div>
        </Col>
      ))}
    </Row>

      <Button
        type="button"
        onClick={siguienteEjercicio}
        variant="secondary"
        className="iniciar"
      >
        Continuar
      </Button>

        <Button
          type="button"
          onClick={terminarJuego}
          variant="secondary"
          className="regresar"
        >
          <i className="bi bi-caret-left-fill"></i> Salir
        </Button>

        <i className="bi bi-info-circle-fill botonInformacion" onClick={mostrarInformacion}></i>
        
        <Sonido />
      </Container>
    );
    };

export default CausaEfecto;