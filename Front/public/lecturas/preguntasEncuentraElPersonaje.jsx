export const preguntasEncuentraElPersonaje = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "El Cóndor":
      return obtenerPreguntasElCondor(numeroPregunta);
    case "Los Otavalos":
      return obtenerPreguntasLosOtavalos(numeroPregunta);
    // Agrega más casos según sea necesario para otros títulos de lectura
    default:
      // Opciones predeterminadas si el título de la lectura no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElCondor = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 1",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 2",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 3",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 4",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 5",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 6",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 7",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 8",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 9",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 10",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLosOtavalos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 1",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 2",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 3",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 4",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 5",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 6",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 7",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 8",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 9",
      };
    case 10:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Enunciado Otavalo 1",
            imagen: "../../public/img/lecturas/Casa1028.jpeg",
            esCorrecta: true,
          },
          {
            enunciado: "Enunciado Otavalo 2",
            imagen: "../../public/img/lecturas/Condor.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 3",
            imagen: "../../public/img/lecturas/Iguana.jpeg",
            esCorrecta: false,
          },
          {
            enunciado: "Enunciado Otavalo 4",
            imagen: "../../public/img/lecturas/Oso.jpeg",
            esCorrecta: false,
          },
        ],
        preguntaActual: "Pregunta 10",
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
