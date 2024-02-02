import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import BotonSonido from "./sonido";
import useSound from "use-sound";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";

import "../css/instrucciones.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";
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

  // Obtener el texto de las instrucciones según el tipo de juego
  const obtenerTextoInstrucciones = () => {
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Sabia decisión":
        return "Lee con mucha atención la lectura y cuando termines presiona el botón jugar. A continuación contesta las 5 preguntas seleccionando la respuesta correcta, para avanzar entre preguntas presiona el botón continuar.";
      case "Suelta la respuesta":
        return "Lee con mucha atención la lectura y cuando termines presiona el botón jugar. A continuación contesta las 5 preguntas arrastrando la respuesta correcta y colocándola en el recuadro rojo, para avanzar entre preguntas presiona el botón continuar.";
      case "¿Quién es quién?":
        return "Lee con mucha atención la lectura y cuando termines presiona el botón jugar. A continuación contesta las 5 preguntas seleccionando el personaje que coincide con la descripción, para avanzar entre preguntas presiona el botón continuar.";
      case "¿Qué pasó primero?":
        return "Lee con mucha atención la lectura y cuando termines presiona el botón jugar. A continuación contesta las 5 preguntas moviendo los cuadrados azules para ordenar los eventos según como fueron sucediendo, para avanzar entre preguntas presiona el botón continuar.";
      case "¿Qué pasaría si...?":
        return "Lee con mucha atención la lectura y cuando termines presiona el botón jugar. A continuación contesta las 5 preguntas seleccionando la respuesta correcta, para avanzar entre preguntas presiona el botón continuar.";
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
            <p>{obtenerTextoInstrucciones()}</p>
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
