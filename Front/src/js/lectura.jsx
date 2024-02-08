import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { Container, Button } from "react-bootstrap";
import MostrarLectura from "../../public/lecturas/lecturas";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import Swal from "sweetalert2";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";

import "../css/lectura.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";
  const [tituloLectura, setTituloLectura] = useState("");
  let urlImagenEncontrada = null;
  const [reproducirBoton] = useSound(SonidoBoton);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));
    if (sessionStorage.getItem("informacion")) {
      mostrarInformacion();
    }

    setTituloLectura(sessionStorage.getItem("tituloLectura"));
  }, [navigate]);

  const irInstrucciones = () => {
    navigate("/instruccionesJuego");
    sessionStorage.removeItem("horaInicio");
  };

  const obtenerURLImagen = (tituloLectura) => {
    informacionLecturas[sessionStorage.getItem("tipoJuego")]?.forEach(
      (element) => {
        if (element.tituloLectura === tituloLectura) {
          urlImagenEncontrada = element.imagenLectura;
        }
      }
    );
    informacionLecturas[sessionStorage.getItem("tipoJuego") + "2"]?.forEach(
      (element) => {
        if (element.tituloLectura === tituloLectura) {
          urlImagenEncontrada = element.imagenLectura;
        }
      }
    );
    return urlImagenEncontrada;
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      title:
        '<span style="font-weight:bold"> Lea atentamente la lectura y cuando termine presione el botón jugar</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the 'informacion' session variable
        sessionStorage.removeItem("informacion");
      }
    });
  };

  const jugar = () => {
    Swal.fire({
      title: "¿Está listo para jugar?",
      imageUrl: obtenerURLImagen(tituloLectura),
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: { tituloLectura },
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonText: '<span style="color:black">Continuar</span>',
      cancelButtonText: "Cancelar",
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.setItem("numeroPregunta", 1);
        sessionStorage.setItem("preguntasCorrectas", 0);
        switch (sessionStorage.getItem("tipoJuego")) {
          case "Sabia decisión":
            return navigate("/seleccionaLaRespuesta");
          case "Suelta la respuesta":
            return navigate("/arrastrarYSoltar");
          case "¿Quién es quién?":
            return navigate("/encuentraElPersonaje");
          case "¿Qué pasó primero?":
            return navigate("/ordenarEventos");
          case "¿Qué pasaría si...?":
            return navigate("/causaEfecto");
        }
      }
    });
  };

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
      <div> <img
        src="/img/fondo/Cartel.png"
        alt="Cartel"
        className="contenedorInstruccion"
      />
      <h2 className="cartelInstruccionLectura">
        <span className="instruccionCartel">
          Lea atentamente y presione jugar
        </span>
      </h2></div>
    
      <h1 className="tituloLecturaPrincipal">{tituloLectura}</h1>
      <img
        src="/img/fondo/MarcoLectura.png"
        alt="CartelGrande"
        className="cartelFondo"
      />
   <div className="contenedorLectura">
        <MostrarLectura
          tituloLectura={tituloLectura}
        />
  
      </div>

      <Button
        type="button"
        onClick={irInstrucciones}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>
      <Button
        type="button"
        onClick={jugar}
        variant="secondary"
        className="iniciar"
        onMouseEnter={reproducirBoton}
      >
        Jugar
      </Button>
      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
        onMouseEnter={reproducirBoton}
      ></i>
    </Container>
  );
};

export default InstruccionesJuego;
