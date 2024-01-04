import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import Sonido from "./sonido";

import "../css/arrastrarYSoltar.css";



const ArrastrarYSoltar = () => {
    const navigate = useNavigate();
    
    const [tasks, setTasks] = useState([
      { 
          id: 1,
          title: 'Tarea 1',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
          list: 1
      },
      { 
          id: 2,
          title: 'Tarea 2',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
          list: 1
      },
      { 
          id: 3,
          title: 'Tarea 3',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
          list: 3
      },
      { 
          id: 4,
          title: 'Tarea 4',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
          list: 2
      },
      { 
          id: 5,
          title: 'Tarea 5',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
          list: 2
      },
  ]);

  const getList = (list) => {
      return tasks.filter(item => item.list === list)
  }

  const startDrag = (evt, item) => {
      evt.dataTransfer.setData('itemID', item.id)
      console.log(item);
  }

  const draggingOver = (evt) => {
      evt.preventDefault();
  }

  const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = tasks.find(item => item.id == itemID);
      item.list = list;

      const newState = tasks.map(task => {
          if(task.id === itemID) return item;
          return task
      })

      setTasks(newState);
  }

    const siguienteEjercicio = () => {
      // Swal.fire({
      //   icon: "info",
      //   text: 'Pasar de ejercicio',
      //   confirmButtonText: '<span style="color:black">Continuar</span>',
      //   confirmButtonColor: "yellow", 
      // });
      navigate("/encuentraElPersonaje");
      console.log("Hola");
      
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
        <h1 className="tituloGeneral">Ponlo en su Lugar</h1>
        <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

        <div className='drag-and-drop'>
                <div className='column column--1'>
                    <h3>
                        Tareas por hacer
                    </h3>
                    <div className='dd-zone'  onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--2'>
                    <h3>
                        Tareas en progreso
                    </h3>
                    <div className='dd-zone'  onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--3'>
                    <h3>
                        Tareas realizadas
                    </h3>
                    <div className='dd-zone'  onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
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

        <i className="bi bi-info-circle botonInformacion" onClick={mostrarInformacion}></i>
        
        <Sonido />
      </Container>
    );
    };

export default ArrastrarYSoltar;