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
import Sonido from "./sonido";
import { preguntasOrdenarEventos } from "../../public/lecturas/preguntasOrdenarEventos";
import { mezclasOpciones } from "./mezclarOpciones";
import { generarNumeroAleatorio } from "./generarNumeroAleatorio";

import "../css/ordenarEventos.css";

const OrdenarEventos = () => {
  const navigate = useNavigate();
  const [pregunta, setPregunta] = useState("");
  const [opcionesRespuesta, setOpcionesRespuesta] = useState([]);
  const [opcion1] = useState(generarNumeroAleatorio(1, 10));
  var contadorPregunta = 1;
  var contadorPreguntasCorrectas = 0;

  useEffect(() => {
    if (sessionStorage.getItem("usuario") === null) {
      navigate("/");
    }// Obtengo las opciones de respuesta y la pregunta actual
    console.log("opcion 1:", opcion1);
    const { opcionesRespuesta: opciones, preguntaActual } =
    preguntasOrdenarEventos(
        sessionStorage.getItem("tituloLectura"),
        opcion1
      );

    // Actualiza los estados locales con los datos obtenidos
    setPregunta(preguntaActual);
    setOpcionesRespuesta(mezclasOpciones(opciones));
  }, [navigate, opcion1]);

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
      Swal.fire({
        icon: "success",
        text: "¡El orden es correcto!",
        confirmButtonText: '<span style="color:black">Continuar</span>',
        confirmButtonColor: "yellow",
      });
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
      console.log("El orden es correcto");
      // navigate("/causaEfecto");
    } else {
      // El orden es incorrecto
      Swal.fire({
        icon: "error",
        text: "El orden es incorrecto",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "red",
      });
      // Realiza las acciones que desees en caso de orden incorrecto
      console.log("El orden es incorrecto");
      // Puedes mostrar una alerta o mensaje al usuario, por ejemplo:
      Swal.fire({
        icon: "error",
        text: "El orden es incorrecto. Por favor, inténtalo de nuevo.",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
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
      // ! Hay que disminuir el numero de la pregunta cuando se completan las 5 preguntas
      // ! al momento de registrar en la base
      // ? para que no se registre 6 sino 5
      // contadorPregunta--;
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
    let preguntasContestadas = sessionStorage.getItem("numeroPregunta");
    const preguntasCorrectas = sessionStorage.getItem("preguntasCorrectas");
  
    if (preguntasContestadas == 6) {
      preguntasContestadas--;
    }
  
    // Obtén una URL de imagen para mostrar
    const imagenUrl = "URL_DE_LA_IMAGEN"; // Reemplaza con la URL de la imagen que desees mostrar
  
    Swal.fire({
      title: "Puntajes",
      html: `
        <div style="overflow: hidden;">
          <div style="float: left; width: 50%; text-align: left;">
            <p>Preguntas contestadas:</p>
            <p>Preguntas correctas:</p>
            <p>Insignia:</p>
          </div>
          <div style="float: left; width: 50%; text-align: center;">
            <p>${preguntasContestadas}</p>
            <p>${preguntasCorrectas}</p>
            <p><img src="${imagenUrl}" alt="Imagen" style="max-width: 100%; max-height: 200px;"></p>
          </div>
        </div>
      `,
      icon: "question",
      confirmButtonText: "Salir",
      confirmButtonColor: "red",
      // allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarVariablesDeSession();
        navigate("/menuLecturas");
      }
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
      html: '<span style="font-weight:bold">Ordena los eventos segun fueron ocurriendo en la historia. Despues presiona el botón continuar.</span>',
      confirmButtonText: '<span style="color:black">Continuar</span>',
      confirmButtonColor: "yellow",
    });
  };

  return (
    <Container>
      <h1 className="tituloGeneral">¿Qué Paso Primero?</h1>
      <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

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

      <Sonido />
    </Container>
  );
};

export default OrdenarEventos;
