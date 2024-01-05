import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";

import JuegoOrdenOrdenarEventos from "./juego_orden_OrdenarEventos";
import Swal from 'sweetalert2'
import Sonido from "./sonido";

import "../css/ordenarEventos.css";

const OrdenarEventos = () => {
    const navigate = useNavigate();
    
    const [people, setPeople] = useState([
      { id: 1, name: "John" },
      { id: 2, name: "Sarah" },
      { id: 3, name: "Paul" },
    ]);
  
    const handleDragEnd = (event) => {
      const { active, over } = event;
      console.log("active", active.id);
      console.log("over", over.id);
  
      if (!active.id !== over.id) {
        setPeople((people) => {
          const oldIndex = people.findIndex((person) => person.id === active.id);
          const newIndex = people.findIndex((person) => person.id === over.id);
  
          console.log(arrayMove(people, oldIndex, newIndex));
          return arrayMove(people, oldIndex, newIndex);
        });
      }
  
      console.log("drag end");
    };
 
    const siguienteEjercicio = () => {
      // Swal.fire({
      //   icon: "info",
      //   text: 'Pasar de ejercicio',
      //   confirmButtonText: '<span style="color:black">Continuar</span>',
      //   confirmButtonColor: "yellow", 
      // });
      navigate("/causaEfecto");
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
        <h1 className="tituloGeneral">¿Qué Paso Primero?</h1>
        <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

        <div className="pregunta mx-auto text-center">
        <p>
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar 
        </p>
      </div>

      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext
            items={people}
            strategy={verticalListSortingStrategy}
          >
            {people.map((user) => (
              <JuegoOrdenOrdenarEventos key={user.id} user={user} />
            ))}
          </SortableContext>
      </DndContext>


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

export default OrdenarEventos;