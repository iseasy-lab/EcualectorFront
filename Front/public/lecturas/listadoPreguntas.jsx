export const preguntasArrastrarYSoltar = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "El Oso de anteojos":
      return obtenerPreguntasElOsoDeAnteojos(numeroPregunta);
    case "La Leyenda de Cantuña":
      return obtenerPreguntasLaLeyendaDeCantuña(numeroPregunta);
    case "El Gallo de la Catedral":
      return obtenerPreguntasElGalloDeLaCatedral(numeroPregunta);
    // Agrega más casos según sea necesario para otros títulos de lectura
    default:
      // Opciones predeterminadas si el título de la lectura no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElOsoDeAnteojos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Las manchas de pelo blanco alrededor de sus ojos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Sus habilidades para escalar",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Su pelaje negro", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Su capacidad para nadar",
            esCorrecta: false,
          },
        ],
        preguntaActual: "El oso de anteojos debe su nombre a:",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Usa lentes", esCorrecta: true },
          {
            id: 2,
            list: 1,
            enunciado: "Vive en América del Sur",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Es buen nadador", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Pesca en ríos y lagos",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Aunque se llame 'oso de anteojos', el oso no:",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Dispersando las semillas de las plantas que consumen",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Comiendo insectos nocivos",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Cazando depredadores",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Construyendo madrigueras",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo contribuyen los osos de anteojos a la salud de los bosques ecuatorianos?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Regiones montañosas de los Andes",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Selvas tropicales", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Desiertos", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Costas del Pacífico",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Dónde se encuentran principalmente los osos de anteojos en Ecuador?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "200 kilogramos", esCorrecta: true },
          { id: 2, list: 1, enunciado: "50 kilogramos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "100 kilogramos", esCorrecta: false },
          { id: 4, list: 1, enunciado: "150 kilogramos", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál es el peso máximo que puede alcanzar un oso de anteojos?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Negro", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Blanco", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Café", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Gris", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál es el color principal del pelaje de los osos de anteojos?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Frutas, hojas e insectos",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Carne de otros animales",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Peces en ríos y lagos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Raíces y tubérculos",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué tipo de alimentos buscan los osos de anteojos en su entorno?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Por la caza ilegal y la destrucción de su hábitat",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Por enfermedades", esCorrecta: false },
          {
            id: 3,
            list: 1,
            enunciado: "Por cambios climáticos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Por la falta de alimento",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué el oso de anteojos es una especie en peligro de extinción en Ecuador?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Escalar", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Volar", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Nadar", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Correr a gran velocidad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué actividad pueden realizar con facilidad los osos de anteojos en las montañas andinas?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Por su contribución al equilibrio del ecosistema",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Por su pelaje negro",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Por su capacidad para nadar",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Por su habilidad para volar",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué son considerados los osos de anteojos un símbolo de la belleza natural de Ecuador?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaLeyendaDeCantuña = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "No podía completar la obra a tiempo",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Quería obtener riquezas",
            esCorrecta: false,
          },
          { id: 3, list: 1, enunciado: "Buscaba venganza", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Quería demostrar su valentía",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Cantuña aceptó el trato con el Diablo porque:",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Construir un atrio para la iglesia de San Francisco en Quito",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Construir una casa",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Pintar un mural en la iglesia",
            esCorrecta: false,
          },
          { id: 4, list: 1, enunciado: "Excavar un túnel", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era la tarea asignada a Cantuña por los padres franciscanos?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Seis meses", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Un año", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Tres meses", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Un mes", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuánto tiempo le dieron a Cantuña para completar la construcción?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "La salvación de su alma",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Poderes mágicos", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Riquezas inmensas", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Conocimiento eterno",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué ofreció el Diablo a Cantuña a cambio de su ayuda en la construcción?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Escondiendo la última piedra necesaria",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Ocultando las herramientas de construcción",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Retrasando la construcción durante el día",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Haciendo un trato con otro ser sobrenatural",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Cómo logró Cantuña engañar al Diablo?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Cantuña reveló su astucia",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Cantuña no cumplió su parte del trato",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La iglesia quedó incompleta",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Los diablillos no pudieron completar la obra",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué el Diablo se sintió burlado al final de la historia?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Castigos eternos para su alma",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Pérdida de riquezas",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Pérdida de sus habilidades de construcción",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Ser desterrado de la ciudad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué consecuencia enfrentaría Cantuña si no cumplía con el trato?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Riquezas materiales",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Una estatua en su honor",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La protección divina",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Un terreno para él y su familia",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál era la recompensa ofrecida a Cantuña por los padres franciscanos?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "No quería entregar su alma",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Quería más tiempo para completar la obra",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Se arrepintió de hacer el trato",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Buscaba la redención divina",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál era la razón por la que Cantuña decidió engañar al Diablo?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Se rió triunfante", esCorrecta: true },
          { id: 2, list: 1, enunciado: "Lloró de alegría", esCorrecta: false },
          {
            id: 3,
            list: 1,
            enunciado: "Se arrepintió de su decisión",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Continuó trabajando en la construcción",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo reaccionó Cantuña al ver al Diablo retirarse sin llevarse su alma?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElGalloDeLaCatedral = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "Mariana", esCorrecta: true },
          { id: 2, list: 1, enunciado: "La Chola", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Santa Catalina", esCorrecta: false },
          { id: 4, list: 1, enunciado: "La Catedral", esCorrecta: false },
        ],
        preguntaActual: "¿Quién era la dueña del corazón de Don Ramón?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "6:00 a. m.", esCorrecta: true },
          { id: 2, list: 1, enunciado: "8:00 a. m.", esCorrecta: false },
          { id: 3, list: 1, enunciado: "10:00 a. m.", esCorrecta: false },
          { id: 4, list: 1, enunciado: "7:00 a. m.", esCorrecta: false },
        ],
        preguntaActual: "¿A qué hora se levantaba Don Ramón diariamente?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Bistec asado, papas, huevos fritos y chocolate caliente",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Tacos y café", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Cereal y leche", esCorrecta: false },
          {
            id: 4,
            list: 1,
            enunciado: "Ensalada de frutas",
            esCorrecta: false,
          },
        ],
        preguntaActual: "¿Qué incluía el desayuno de Don Ramón?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { id: 1, list: 1, enunciado: "La Chola", esCorrecta: true },
          { id: 2, list: 1, enunciado: "La Catedral", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Santa Catalina", esCorrecta: false },
          { id: 4, list: 1, enunciado: "La Mistela", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo se llamaba la tienda de vinos que era de Mariana?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "En la tienda de vinos de Mariana",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "En la biblioteca", esCorrecta: false },
          { id: 3, list: 1, enunciado: "En la Catedral", esCorrecta: false },
          { id: 4, list: 1, enunciado: "En su hacienda", esCorrecta: false },
        ],
        preguntaActual:
          "¿Dónde hacía una parada Don Ramón durante su caminata por las calles?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Efectos del alcohol",
            esCorrecta: true,
          },
          { id: 2, list: 1, enunciado: "Tristeza", esCorrecta: false },
          { id: 3, list: 1, enunciado: "Enojo", esCorrecta: false },
          { id: 4, list: 1, enunciado: "Felicidad", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué efectos mostraba Don Ramón al regresar a casa después de beber mistelas?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Su superioridad sobre cualquier gallo",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Su amor por Mariana",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Su deseo de cambiar de vida",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Su admiración por la arquitectura",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué proclamaba Don Ramón frente a la iglesia de la Catedral?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado: "Jugándole una broma con el gallo de la Catedral",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Haciéndole promesas",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Convenciéndolo con argumentos",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Obligándolo a dejar la ciudad",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo lograron alejar a Don Ramón de su hábito de las mistelas?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Promesas de dejar las mistelas y abstenerse de insultar",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Que deje la lectura",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "Que se case con Mariana",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado: "Que compre más mistelas",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué pidió la voz que acompañaba al gallo a Don Ramón?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            id: 1,
            list: 1,
            enunciado:
              "Don Ramón cumplió sus promesas y se alejó de las mistelas",
            esCorrecta: true,
          },
          {
            id: 2,
            list: 1,
            enunciado: "Don Ramón nunca dejó las mistelas",
            esCorrecta: false,
          },
          {
            id: 3,
            list: 1,
            enunciado: "La voz que acompañaba al gallo reveló su identidad",
            esCorrecta: false,
          },
          {
            id: 4,
            list: 1,
            enunciado:
              "La pregunta sobre la espuela de fierro quedó sin respuesta",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cómo termina la historia de Don Ramón y el gallo de la Catedral?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasPredeterminadas = () => {
  // Definir opciones predeterminadas si el título de la lectura no coincide
  return {
    opcionesRespuesta: [
      { enunciado: "Opción A (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción B (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción C (Predeterminada)", esCorrecta: false },
      { enunciado: "Opción D (Predeterminada)", esCorrecta: true },
    ],
    preguntaActual: "Pregunta predeterminada",
  };
};
