import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import BotonSonido from "./sonido";
import useSound from "use-sound";
import ReactPlayer from 'react-player'
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import VideoSeleccionaLaRespuesta from "../../public/videos/VideoSeleccionaLaRespuesta.mp4";
import VideoArrastrarYSoltar from "../../public/videos/VideoArrastrarYSoltar.mp4";
import VideoOrdenaLosEventos from "../../public/videos/VideoOrdenaLosEventos.mp4";
import VideoEncuentreEnPersonaje from "../../public/videos/VideoEncuentraElPersonaje.mp4";
import VideoCausaEfecto from "../../public/videos/VideoCausaEfecto.mp4";
import "../css/instrucciones.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoinvitado";
  const [reproducirBoton] = useSound(SonidoBoton);

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));
  }, [navigate]);

  const irLecturas = () => {
    sessionStorage.removeItem("tituloLectura");
    navigate("/menuLecturas");
  };

  const leerLectura = () => {
    sessionStorage.setItem("horaInicio", new Date().toLocaleTimeString());
    navigate("/lectura");
  };

const obtenerVideoInstrucciones = () => {
  switch (sessionStorage.getItem("tipoJuego")) {
    case "Sabia decisión":
      return VideoSeleccionaLaRespuesta;
    case "Suelta la respuesta":
      return VideoArrastrarYSoltar;
    case "¿Quién es quién?":
      return VideoEncuentreEnPersonaje;
    case "¿Qué pasó primero?":
      return VideoOrdenaLosEventos;
    case "¿Qué pasaría si...?":
      return VideoCausaEfecto;
  default: 
      return "Video por defecto o para otros tipos de juego.";
  }
};


  // Obtener el texto de las instrucciones según el tipo de juego
  const obtenerTextoInstrucciones = () => {
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Sabia decisión":
        return (
          <p>
            Lea con mucha atención la lectura, cuando termine seleccione la opción &quot;Jugar&quot;. <br/>A continuación conteste las 5 preguntas seleccionando la respuesta correcta. <br/> Para avanzar entre preguntas, presione el botón &quot;Continuar&quot;.
          </p>
        );
      case "Suelta la respuesta":
        return (
          <p>
          Lea con mucha atención la lectura, cuando termine seleccione la opción &quot;Jugar&quot;. <br/>A continuación conteste las 5 preguntas arrastrando la respuesta correcta y colocándola en el recuadro rojo. <br/> Para avanzar entre preguntas, presione el botón &quot;Continuar&quot;.
          </p>
        );
      case "¿Quién es quién?":
        return (
          <p>
           Lea con mucha atención la lectura, cuando termine seleccione la opción &quot;Jugar&quot;. <br/> A continuación conteste las 5 preguntas seleccionando el personaje que coincide con la descripción. <br/> Para avanzar entre preguntas, presione el botón &quot;Continuar&quot;.
            </p>
        );
      case "¿Qué pasó primero?":
        return (
          <p>
          Lea con mucha atención la lectura, cuando termine seleccione la opción &quot;Jugar&quot;. <br/>A continuación conteste las 5 preguntas moviendo los cuadrados azules para ordenar los eventos según como fueron sucediendo. <br/> Para avanzar entre preguntas, presione el botón &quot;Continuar&quot;.
          </p>
        );
      case "¿Qué pasaría si...?":
        return (
        <p>
          Lea con mucha atención la lectura, cuando termine seleccione la opción &quot;Jugar&quot;. <br/>A continuación conteste las 5 preguntas seleccionando la respuesta correcta. <br/> Para avanzar entre preguntas, presione el botón &quot;Continuar&quot;.
          </p>
        );
    default:
        return "Instrucciones por defecto o para otros tipos de juego.";
    }
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
      <h1 className="tituloGeneral">{sessionStorage.getItem("tipoJuego")}</h1>{" "}
      <img
         src="/img/fondo/CartelInstruccion.png"
         alt="Cartel"
         className="contenedorIntruccion"
       />
          <div className="contenedorInstrucciones text-center">
            {obtenerTextoInstrucciones()}
          </div>

<div className="contenedorVideo">

<ReactPlayer url={obtenerVideoInstrucciones()} playing loop muted width='100%'
          height='100%' />
</div>
      <Button
        type="button"
        onClick={irLecturas}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
      <Button
        type="button"
        onClick={leerLectura}
        variant="secondary"
        className="iniciar"
        onMouseEnter={reproducirBoton}
      >
        Continuar
      </Button>
      <BotonSonido />
    </Container>
  );
};

export default InstruccionesJuego;
