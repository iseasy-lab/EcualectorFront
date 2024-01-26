import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import MostrarLectura from "../../public/lecturas/lecturas";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import Swal from "sweetalert2";

import "../css/lectura.css";

const InstruccionesJuego = () => {
  const navigate = useNavigate();
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";

  const [tituloLectura, settituloLectura] = useState("");
  let urlImagenEncontrada = null;

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));


    settituloLectura(sessionStorage.getItem("tituloLectura"));
  }, [navigate]);

  const irInstrucciones = () => {
    navigate("/instruccionesJuego");
  };

  const obtenerURLImagen = (tituloLectura) => {
    informacionLecturas[sessionStorage.getItem("tipoJuego")]?.forEach(
      (element) => {
        if (element.tituloLectura === tituloLectura) {
          urlImagenEncontrada = element.imagenLectura;
        }
      }
    );
    return urlImagenEncontrada;
  };

  const jugar = () => {
    Swal.fire({
      title: "¿Estás listo para jugar?",
      imageUrl: obtenerURLImagen(tituloLectura),
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: {tituloLectura},
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
          case "Elige sabiamente":
            return navigate("/seleccionaLaRespuesta");
          case "Suelta la respuesta":
            return navigate("/arrastrarYSoltar");
          case "¿Quién es quién?":
            return navigate("/encuentraElPersonaje");
          case "¿Qué paso primero?":
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
    <h2 className="cartelUsuario">
      <span className="contenidoCartel">{variableSession}</span>
    </h2>
) : null}
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
    </Container>
  );
};

export default InstruccionesJuego;
