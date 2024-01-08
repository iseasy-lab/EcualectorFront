import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from 'sweetalert2'
import Sonido from "./sonido";

import "../css/encuentraElPersonaje.css";

const SeleccionaLaRespuesta = () => {
    const navigate = useNavigate();
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

    
  const opcionesRespuesta = [
    { nombre: "Opción 1", imagen: "/img/lecturas/EjemplosPortadaMenu.jpeg" },
    { nombre: "Opción 2", imagen: "/img/lecturas/EjemplosPortadaMenu.jpeg" },
    { nombre: "Opción 3", imagen: "/img/lecturas/EjemplosPortadaMenu.jpeg" },
    { nombre: "Opción 4", imagen: "/img/lecturas/EjemplosPortadaMenu.jpeg" },
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
      console.log("Respuesta seleccionada:", respuestaSeleccionada !== null ? opcionesRespuesta[respuestaSeleccionada].nombre : "Ninguna respuesta seleccionada");
      navigate("/ordenarEventos");
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
        <h1 className="tituloGeneral">¿Quién es Quién?</h1>
        <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

        <div className="pregunta mx-auto text-center">
        <p>
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar 
        </p>
      </div>
      <div className="contenedorImagenes">
      {opcionesRespuesta.map((opcion, index) => (
          <div
            key={index}
            className={`opcionImagenes ${respuestaSeleccionada === index ? 'seleccionada' : ''}`}
            onClick={() => manejarSeleccion(index)}
          >
             <img
              src={opcion.imagen}
              alt={opcion.nombre}
              className={`imagenRespuesta ${respuestaSeleccionada === index ? 'imagenRespuestaSeleccionada' : ''}`}
            />
          </div>
        ))}
    </div>

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

export default SeleccionaLaRespuesta;