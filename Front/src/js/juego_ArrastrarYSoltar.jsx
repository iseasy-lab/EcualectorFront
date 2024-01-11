import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Sonido from "./sonido";

import "../css/arrastrarYSoltar.css";

const ArrastrarYSoltar = () => {
  const navigate = useNavigate();

  const [respuestas, setRespuestas] = useState([
    {
      id: 1,
      contenido: "Sus habilidades para escalar",
      list: 1,
    },
    {
      id: 2,
      contenido: "Las manchas de pelo blanco alrededor de sus ojos",
      list: 1,
    },
    {
      id: 3,
      contenido: "Su pelaje negro",
      list: 1,
    },
    {
      id: 4,
      contenido: "Su capacidad para nadar",
      list: 1,
    },
  ]);

  const getList = (list) => {
    return respuestas.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
    // console.log("Elemento arrastrado - ID:", item.id);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = respuestas.find((item) => item.id == itemID);
    // Verificar si ya hay un elemento en la columna 2
    const column2Tasks = getList(2);

    if (column2Tasks.length === 0) {
      // Si la columna 2 está vacía, simplemente mover el elemento
      item.list = list;
    } else {
      // Intercambiar posiciones si la columna 2 ya tiene un elemento
      const existingItem = column2Tasks[0];

      // Intercambiar elementos entre las columnas
      existingItem.list = item.list;
      item.list = list;
    }

    // Actualizar el estado con la nueva ubicación de los elementos
    const newState = respuestas.map((task) =>
      task.id === itemID ? item : task
    );
    setRespuestas(newState);
    // console.log("Elemento soltado en columna 2:", item.id);
  };

  const obtenerElementoColumna2 = () => {
    const column2Tasks = getList(2);

    if (column2Tasks.length > 0) {
      const elementoColumna2 = column2Tasks[0].contenido;
      console.log("Elemento en la columna 2:", elementoColumna2);
    } else {
      console.log("La columna 2 está vacía.");
    }
  };

  const siguienteEjercicio = () => {
    // Swal.fire({
    //   icon: "info",
    //   text: 'Pasar de ejercicio',
    //   confirmButtonText: '<span style="color:black">Continuar</span>',
    //   confirmButtonColor: "yellow",
    // });
    obtenerElementoColumna2();
    navigate("/encuentraElPersonaje");
  };

  const irInstrucciones = () => {
    navigate("/instruccionesJuego");
  };

  const terminarJuego = () => {
    Swal.fire({
      contenido: "Puntajes",
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
      <h1 className="tituloGeneral">Ponlo en su Lugar</h1>
      <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

      <div className="pregunta">
        <p>El oso de anteojos debe su nombre a:</p>
        <div
          className="contenedorRespuesta"
          onDragOver={(evt) => draggingOver(evt)}
          onDrop={(evt) => onDrop(evt, 2)}
        >
          {getList(2).map((item) => (
            <div
              className="opcionSeleccionada"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <strong>{item.contenido}</strong>
            </div>
          ))}
        </div>
      </div>

      <Row className="contenedorOpciones" onDragOver={(evt) => draggingOver(evt)} onDrop={(evt) => onDrop(evt, 1)}>
  <Col md={6} className="d-flex flex-column justify-content-center align-items-center mx-auto">
    {getList(1).slice(0, 2).map((item) => (
      <div key={item.id} className="opcionIndividual"  draggable onDragStart={(evt) => startDrag(evt, item)}>
        <strong className="letra">{item.contenido}</strong>
      </div>
    ))}
  </Col>
  <Col md={6} className="d-flex flex-column justify-content-center align-items-center mx-auto">
    {getList(1).slice(2, 4).map((item) => (
      <div key={item.id} className="opcionIndividual" draggable onDragStart={(evt) => startDrag(evt, item)}>
        <strong className="letra">{item.contenido}</strong>
      </div>
    ))}
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

export default ArrastrarYSoltar;
