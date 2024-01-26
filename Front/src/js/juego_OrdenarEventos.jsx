import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useNavigate } from "react-router-dom";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import JuegoOrdenOrdenarEventos from "./juego_orden_OrdenarEventos";
import Swal from "sweetalert2";
import axios from "axios";
import useSound from "use-sound";
import SonidoInsigniaConseguida from "../../public/audios/InsigniaConseguida.mp3";
import SonidoAplausos from "../../public/audios/Aplausos.mp3";
import { preguntasOrdenarEventos } from "../../public/lecturas/preguntasOrdenarEventos";
import { mezclasOpciones } from "./mezclarOpciones";
import { generarNumeroAleatorio } from "./generarNumeroAleatorio";
import informacionLecturas from "../../public/lecturas/informacionLecturas";


import "../css/ordenarEventos.css";

const OrdenarEventos = () => {
  const navigate = useNavigate();
  const [pregunta, setPregunta] = useState("");
  const [opcionesRespuesta, setOpcionesRespuesta] = useState([]);
  const [opcion1] = useState(generarNumeroAleatorio(1, 10));
  var contadorPregunta = 1;
  var contadorPreguntasCorrectas = 0;
  const [tituloLectura, settituloLectura] = useState("");
  let urlInsigniaEncontrada = null;
  const [reproducirInsigniaConseguida] = useSound(SonidoInsigniaConseguida);
  const [reproducirAplausos] = useSound(SonidoAplausos);
  const [variableSession, setVariableSession] = useState("");
  const esUsuarioInvitado = "invitadoi";


  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }
    setVariableSession(sessionStorage.getItem("nombre"));

    console.log("opcion 1:", opcion1);
    const { opcionesRespuesta: opciones, preguntaActual } =
    preguntasOrdenarEventos(
        sessionStorage.getItem("tituloLectura"),
        opcion1
      );

    // Actualiza los estados locales con los datos obtenidos
    setPregunta(preguntaActual);
    setOpcionesRespuesta(mezclasOpciones(opciones));
    settituloLectura(sessionStorage.getItem("tituloLectura"));

  }, [navigate, opcion1]);

  const obtenerURLInsignia = (tituloLectura) => {
    informacionLecturas[sessionStorage.getItem("tipoJuego")]?.forEach(
      (element) => {
        if (element.tituloLectura === tituloLectura) {
          urlInsigniaEncontrada = element.insignia;
        }
      }
    );
    return urlInsigniaEncontrada;
  };

  const cargarPreguntas = (numeroDePregunta) => {
    // Obtengo las opciones de respuesta y la pregunta actual
    const { opcionesRespuesta: opciones, preguntaActual } =
    preguntasOrdenarEventos(
        sessionStorage.getItem("tituloLectura"),
        numeroDePregunta
      );

       // Reiniciar el estado 'number' al valor inicial
  setNumber([
    { id: 1, posicion: "1" },
    { id: 2, posicion: "2" },
    { id: 3, posicion: "3" },
  ]);

    // Actualiza los estados locales con los datos obtenidos
    setPregunta(preguntaActual);
    setOpcionesRespuesta(mezclasOpciones(opciones));
  };

  const validarPreguntaNoRepetida = () => {
    var opcion2;
    var opcion3;
    var opcion4;
    var opcion5;
    
    var variableComparacion = generarNumeroAleatorio(1, 10);
    console.log("variable comparacion:", variableComparacion);

    if (sessionStorage.getItem("numeroPregunta") == 2) {
        while (variableComparacion == opcion1) {
          variableComparacion = generarNumeroAleatorio(1, 10);
          console.log(
            "variable comparacion dentro del while opcion2:",
            variableComparacion
          );
        }
        opcion2 = variableComparacion;
        console.log("opcion 2 fuera de while:", opcion2);
        sessionStorage.setItem("opcion2", opcion2);
        cargarPreguntas(opcion2);
      
    } else if (sessionStorage.getItem("numeroPregunta") == 3) {
        while (
          variableComparacion == opcion1 ||
          variableComparacion == sessionStorage.getItem("opcion2")
        ) {
          variableComparacion = generarNumeroAleatorio(1, 10);
          console.log(
            "variable comparacion dentro del while opcion3:",
            variableComparacion
          );
        }
        opcion3 = variableComparacion;
        console.log("opcion 3 fuera de while:", opcion3);
        sessionStorage.setItem("opcion3", opcion3);
        cargarPreguntas(opcion3);
      
    } else if (sessionStorage.getItem("numeroPregunta") == 4) {
          while (
            variableComparacion == opcion1 ||
            variableComparacion == sessionStorage.getItem("opcion2") ||
            variableComparacion == sessionStorage.getItem("opcion3")
          ) {
            variableComparacion = generarNumeroAleatorio(1, 10);
            console.log(
              "variable comparacion dentro del while opcion4:",
              variableComparacion
            );
          }     
      opcion4 = variableComparacion;
      console.log("opcion 4 fuera del while:", opcion4);
      sessionStorage.setItem("opcion4", opcion4);
      cargarPreguntas(opcion4);
    } else if (sessionStorage.getItem("numeroPregunta") == 5) {
      while (
        variableComparacion == opcion1 ||
        variableComparacion == sessionStorage.getItem("opcion2") ||
        variableComparacion == sessionStorage.getItem("opcion3") ||
        variableComparacion == sessionStorage.getItem("opcion4")
      ) {
        variableComparacion = generarNumeroAleatorio(1, 10);
        console.log(
          "variable comparacion dentro del while opcion5:",
          variableComparacion
        );
      }
      opcion5 = variableComparacion;
      console.log("opcion 5 fuera del while:", opcion5);
      cargarPreguntas(opcion5);
    } else {
      ("que paso");
    }
  };

  const [number, setNumber] = useState([
    { id: 1, posicion: "1" },
    { id: 2, posicion: "2" },
    { id: 3, posicion: "3" },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // console.log("active", active.id);
    // console.log("over", over.id);

    if (!active.id !== over.id) {
      setNumber((number) => {
        const oldIndex = number.findIndex((order) => order.id === active.id);
        const newIndex = number.findIndex((order) => order.id === over.id);

        // console.log(arrayMove(number, oldIndex, newIndex));
        return arrayMove(number, oldIndex, newIndex);
      });
    }
  };

  const validarRespuestas = () => {
    const orderIDs = number.map((order) => order.id);
  
    // Compara el orden actual con los IDs de las opciones de respuesta
    const sonIguales = JSON.stringify(orderIDs) === JSON.stringify(opcionesRespuesta.map((opcion) => opcion.id));
  

    contadorPreguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    console.log(
      "Preguntas correctas:",
      sessionStorage.getItem("preguntasCorrectas")
    );

    if (sonIguales) {
      // El orden es correcto
      contadorPreguntasCorrectas++;
      sessionStorage.setItem(
        "preguntasCorrectas",
        contadorPreguntasCorrectas
      );
      console.log(
        "Respuesta correcta despues de acertar:",
        contadorPreguntasCorrectas
      );
      // Realiza las acciones que desees en caso de orden correcto
      // navigate("/causaEfecto");
    } 
    console.log(
      "Orden seleccionado:",
      orderIDs,
    );
    console.log(
      "Orden correcto:",
      opcionesRespuesta.map((opcion) => opcion.id),
    );
    
  };

  const avanzarPregunta = () => {
    contadorPregunta = sessionStorage.getItem("numeroPregunta");
    console.log(
      "Preguntas contestadas:",
      sessionStorage.getItem("numeroPregunta")
    );

    Swal.fire({
      title: "¿Deseas avanzar a la siguiente pregunta?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: 'Cancelar',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
       // Si hemos mostrado todas las preguntas, mostrar el mensaje de finalización
    if (sessionStorage.getItem("numeroPregunta") < 6) {
      contadorPregunta++;
      sessionStorage.setItem("numeroPregunta", contadorPregunta);
      console.log("Preguntas contestadas en el if:", contadorPregunta);
      validarRespuestas();
      validarPreguntaNoRepetida();
    }
    if (sessionStorage.getItem("numeroPregunta") == 6) {
      sessionStorage.setItem("numeroPregunta", contadorPregunta);
      console.log("Preguntas contestadas en el if:", contadorPregunta);
      mostrarPuntuacion();
    }
      }
    });

    
  };

  const limpiarVariablesDeSession = () => {
    sessionStorage.removeItem("preguntasCorrectas");
        sessionStorage.removeItem("numeroPregunta");
        for (let i = 2; i < 5; i++) {
          sessionStorage.removeItem("opcion" + i);
        }
  }

  const mostrarPuntuacion = () => {
    sessionStorage.setItem("horaFin", new Date().toLocaleTimeString());
    let preguntasContestadas = sessionStorage.getItem("numeroPregunta");
    const preguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    const urlInsignia = obtenerURLInsignia(tituloLectura);

    if (preguntasContestadas == 6) {
      preguntasContestadas--;
      sessionStorage.setItem("numeroPregunta", preguntasContestadas);
    }

    guardarPuntuacion();
    let imagenInsignia = '';
  if (preguntasCorrectas === '5') {
    reproducirInsigniaConseguida();
    imagenInsignia = `<p><img src="${urlInsignia}" alt="Imagen" style="max-width: 100%; height: 50px;"></p>`;
  }else{
    reproducirAplausos();
    imagenInsignia = `<p style="border: 1px solid black; background: #dcdcdc; font-weight: bold;">Vuelvelo a intentar, lo lograrás !!</p>`;
  }


    Swal.fire({
      title: "Puntajes",
      html: `
      <div style="overflow: hidden; display: flex; align-items: center;">
      <div style="flex: 1; text-align: left;">
        <p>Preguntas contestadas:</p>
        <p>Preguntas correctas:</p>
        <p>Insignia:</p>
      </div>
      <div style="flex: 1; text-align: center;">
        <p>${preguntasContestadas}</p>
        <p>${preguntasCorrectas}</p>
        ${imagenInsignia}      </div>
    </div>
      `,
      icon: "question",
      confirmButtonText: "Salir",
      confirmButtonColor: "red",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarVariablesDeSession();
        navigate("/menuLecturas");
      }
    });
  };

  const guardarPuntuacion = () => {
    const horaInicio = sessionStorage.getItem("horaInicio");
    const horaFin = sessionStorage.getItem("horaFin");
    const preguntasContestadas = sessionStorage.getItem("numeroPregunta");
    const preguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
    const usuario = sessionStorage.getItem("usuario");
    const tituloLectura = sessionStorage.getItem("tituloLectura");
    const tipoJuego = sessionStorage.getItem("tipoJuego");
    let insigniaObtenida = false;

    if(preguntasCorrectas == 5){
      insigniaObtenida = true;
    }

    const puntuacion = {
      horaInicio,
      horaFin,
      preguntasContestadas,
      preguntasCorrectas,
      usuario,
      tituloLectura,
      tipoJuego,
      insigniaObtenida,
    };

    axios
      .post("http://localhost:3001/guardarPuntuacion", puntuacion)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });


  };

  const terminarJuego = () => {
    Swal.fire({
      title: "¿Deseas salir del juego?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      cancelButtonText: "Cancelar",
      confirmButtonText: '<span style="color:black">Aceptar</span>',
      confirmButtonColor: "yellow",
    }).then((result) => {
      if (result.isConfirmed) {
        mostrarPuntuacion();
      }
    });
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      html: '<span style="font-weight:bold">Ordena los cuadrados azules segun como fueron ocurriendo los eventos en la historia. Despues presiona el botón continuar.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    });
  };

  return (
    <Container>
       {esUsuarioInvitado !== sessionStorage.getItem("usuario") ? (
    <h2 className="cartelUsuario">
      <span className="contenidoCartel">{variableSession}</span>
    </h2>
) : null}
      <h1 className="tituloGeneral">¿Qué Paso Primero?</h1>
      <h2 className="ordenLecturas">Ordena los cuadrados azules</h2>

      <div className="pregunta mx-auto text-center">
        <p>
          {pregunta}
        </p>
      </div>
      <Row className="contenedorJuego">
        {/* Columna de los elementos a ordenar */}
        <Col md={2}>
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <SortableContext
              items={number}
              strategy={verticalListSortingStrategy}
            >
              {number.map((numero) => (
                <div className="contenedroElementoOrden" key={numero.id}>
                  <JuegoOrdenOrdenarEventos numero={numero} />
                </div>
              ))}
            </SortableContext>
          </DndContext>
        </Col>

        {/* Columna de los carteles a la derecha de cada elemento */}
        <Col md={10}>
          <Row>
            {opcionesRespuesta.map((opcion, index) => (
              <div className="opcionesEnunciadosOrdenar" key={index}>
                {opcion.enunciado}
              </div>
            ))}
          </Row>
        </Col>
      </Row>

      <Button
        type="button"
        onClick={avanzarPregunta}
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

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
      ></i>

    </Container>
  );
};

export default OrdenarEventos;
