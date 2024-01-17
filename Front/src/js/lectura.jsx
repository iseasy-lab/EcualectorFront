import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import MostrarLectura from "../../public/lecturas/lecturas";
import Sonido from "./sonido";

import "../css/lectura.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();

  const [tituloLectura, settituloLectura] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }

    settituloLectura(sessionStorage.getItem("tituloLectura"));
  }, [navigate]);

  const irInstrucciones = () => {
    navigate("/instruccionesJuego");
  };

  const jugar = () => {
    sessionStorage.setItem("numeroPregunta", 1);
    sessionStorage.setItem("preguntasCorrectas", 0);
    switch (sessionStorage.getItem("tipoJuego")) {
      case "Elige Sabiamente":
        return navigate("/seleccionaLaRespuesta");
      case "Ponlo en su Lugar":
        return navigate("/arrastrarYSoltar");
      case "¿Quién es Quién?":
        return navigate("/encuentraElPersonaje");
      case "¿Qué Paso Primero?":
        return navigate("/ordenarEventos");
      case "¿Qué Pasaría si...?":
        return navigate("/causaEfecto");
    }
  };

  return (
    <Container>
      <h1 className="tituloLecturaPrincipal">{tituloLectura}</h1>
      <h2 className="ordenLecturas">
        Lee atentamente la lectura y cuando termines presiona el boton Avanzar
      </h2>

      <div className="contenedorLectura mx-auto text-center">
        <MostrarLectura tituloLectura={tituloLectura} />
      </div>

      <Button
        type="button"
        onClick={irInstrucciones}
        variant="secondary"
        className="regresar"
      >
        <i className="bi bi-caret-left-fill"></i> Salir
      </Button>
      <Button
        type="button"
        onClick={jugar}
        variant="secondary"
        className="iniciar"
      >
        Avanzar
      </Button>
      <Sonido />
    </Container>
  );
};

export default InstruccionesJuego;
