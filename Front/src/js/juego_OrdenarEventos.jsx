import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useNavigate } from "react-router-dom";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";

import JuegoOrdenOrdenarEventos from "./juego_orden_OrdenarEventos";
import Swal from "sweetalert2";
import Sonido from "./sonido";

import "../css/ordenarEventos.css";

const OrdenarEventos = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState([
    { id: 1, posicion: "1" },
    { id: 2, posicion: "2" },
    { id: 3, posicion: "3" },
  ]);

  const opcionesRespuesta = ["Opción A", "Opción B", "Opción C"];

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

  const siguienteEjercicio = () => {
    // Swal.fire({
    //   icon: "info",
    //   text: 'Pasar de ejercicio',
    //   confirmButtonText: '<span style="color:black">Continuar</span>',
    //   confirmButtonColor: "yellow",
    // });
    const numbers = number.map((order) => order.id);
    console.log("Nombres de los elementos:", numbers);
    navigate("/causaEfecto");
  };

  const irInstrucciones = () => {
    navigate("/instruccionesJuego");
  };

  const terminarJuego = () => {
    Swal.fire({
      title: "Puntajes",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "yellow",
      cancelButtonText: '<span style="color:black">Reiniciar</span>',
      confirmButtonText: "Salir",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        irInstrucciones();
      }
    });
  };

  const mostrarInformacion = () => {
    Swal.fire({
      icon: "info",
      html: '<span style="font-weight:bold">Selecciona la respuesta que creas correcta, una vez las hayas seleccionado una respuesta presiona el botón continuar.</span>',
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
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar
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
              <div  className="opcionesEnunciadosOrdenar" key={index}>{opcion}</div>
            ))}
          </Row>
        </Col>
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

      <i
        className="bi bi-info-circle-fill botonInformacion"
        onClick={mostrarInformacion}
      ></i>

      <Sonido />
    </Container>
  );
};

export default OrdenarEventos;
