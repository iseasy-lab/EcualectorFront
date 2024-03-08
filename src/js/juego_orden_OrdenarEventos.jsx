/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "../css/ordenarEventos.css";

function JuegoOrdenOrdenarEventos({ numero }) {
  const { attributes, listeners, setNodeRef, transform, transition } =

  useSortable({ id: numero.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <h1 className="elementoOrden">{numero.posicion}</h1>
    </div>
  );
}

export default JuegoOrdenOrdenarEventos;