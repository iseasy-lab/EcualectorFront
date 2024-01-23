export const preguntasSeleccionaLaRespuesta = (
  tituloLectura,
  numeroPregunta
) => {
  switch (tituloLectura) {
    case "El Cóndor y el Puma":
      return obtenerPreguntasElCondorYElPuma(numeroPregunta);
    case "El misterio del jarrón":
      return obtenerPreguntasElMisterioDelJarron(numeroPregunta);
    case "La casa 1028":
      return obtenerPreguntasLaCasa1028(numeroPregunta);
    // Agrega más casos según sea necesario para otros títulos de lectura
    default:
      // Opciones predeterminadas si el título de la lectura no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElCondorYElPuma = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Águila", esCorrecta: true },
          { enunciado: "Cóndor", esCorrecta: false },
          { enunciado: "Puma", esCorrecta: false },
          { enunciado: "Jaguar", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era el animal anciano que ya no podía cazar por su vejez?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Altas montañas", esCorrecta: true },
          { enunciado: "Selva amazónica", esCorrecta: false },
          { enunciado: "Costa ecuatoriana", esCorrecta: false },
          { enunciado: "Islas Galápagos", esCorrecta: false },
        ],
        preguntaActual:
          "¿Dónde se retiró el animal anciano para llevar a cabo su astucia?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "Se posó en una roca", esCorrecta: true },
          { enunciado: "Se tumbó en el suelo de una cueva", esCorrecta: false },
          { enunciado: "Nadó en un río", esCorrecta: false },
          { enunciado: "Acechó desde la sombra", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué hizo el animal anciano para aparentar estar débil y cansado?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Puma", esCorrecta: true },
          { enunciado: "Cóndor", esCorrecta: false },
          { enunciado: "Tortuga", esCorrecta: false },
          { enunciado: "Iguana", esCorrecta: false },
        ],
        preguntaActual:
          "¿Quién fue el primero en sospechar de la trampa del animal anciano?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "Puma", esCorrecta: true },
          { enunciado: "Oso hormiguero", esCorrecta: false },
          { enunciado: "Colibrí", esCorrecta: false },
          { enunciado: "Mono aullador", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué animal astuto evitó caer en la trampa del anciano?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "En las altas montañas", esCorrecta: true },
          { enunciado: "En la selva amazónica", esCorrecta: false },
          { enunciado: "En las Islas Galápagos", esCorrecta: false },
          { enunciado: "En la costa ecuatoriana", esCorrecta: false },
        ],
        preguntaActual: "¿Dónde se encontraba la cueva del anciano?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Ninguna huella salía de la cueva", esCorrecta: true },
          {
            enunciado: "Huellas de animales saliendo de la cueva",
            esCorrecta: false,
          },
          {
            enunciado: "Huellas frescas de animales alrededor de la cueva",
            esCorrecta: false,
          },
          { enunciado: "Rastros de plumas en la entrada", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué observó el puma que lo hizo sospechar de la trampa?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Manteniéndose a una distancia segura",
            esCorrecta: true,
          },
          { enunciado: "Entrando rápidamente en la cueva", esCorrecta: false },
          { enunciado: "Volando lejos del lugar", esCorrecta: false },
          { enunciado: "Camuflándose entre la vegetación", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo logró el puma mantenerse a salvo?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Era anciano", esCorrecta: true },
          { enunciado: "Estaba herido", esCorrecta: false },
          { enunciado: "No tenía amigos", esCorrecta: false },
          { enunciado: "Ya no quería cazar sus presas", esCorrecta: false },
        ],
        preguntaActual:
          "¿Por qué el Cóndor opto por la estrategia de fingir estar herido?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Astucia e inteligencia", esCorrecta: true },
          { enunciado: "Fuerza física", esCorrecta: false },
          { enunciado: "Velocidad y agilidad", esCorrecta: false },
          { enunciado: "Resistencia y valentía", esCorrecta: false },
        ],
        preguntaActual: "¿Qué habilidad demostró el puma al evitar la trampa?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElMisterioDelJarron = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "Un jarrón de flores roto", esCorrecta: true },
          { enunciado: "Un manto de incertidumbre", esCorrecta: false },
          { enunciado: "Una tristeza en el rostro de Lucía", esCorrecta: false },
          { enunciado: "Una pequeña escuela", esCorrecta: false },
        ],
        preguntaActual: "¿Qué descubrió la maestra Lucía al entrar a su aula un día?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Con paciencia y sabiduría", esCorrecta: true },
          { enunciado: "Con enfado y regaños", esCorrecta: false },
          { enunciado: "Ignorándola", esCorrecta: false },
          { enunciado: "Pidiendo a los estudiantes que lo reparen", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo abordó Lucía la situación del jarrón roto?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "La importancia de la responsabilidad", esCorrecta: true },
          { enunciado: "La tristeza", esCorrecta: false },
          { enunciado: "La incertidumbre", esCorrecta: false },
          { enunciado: "La necesidad de juegos en el aula", esCorrecta: false },
        ],
        preguntaActual: "¿Qué destacaba Lucía entre sus estudiantes?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Señalaban a otro como responsable", esCorrecta: true },
          { enunciado: "Se disculpaban inmediatamente", esCorrecta: false },
          { enunciado: "Reparaban el jarrón", esCorrecta: false },
          { enunciado: "Ignoraban a Lucía", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo reaccionaban los estudiantes ante la visita de Lucía a sus mesas?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "Tristeza", esCorrecta: true },
          { enunciado: "Honestidad", esCorrecta: false },
          { enunciado: "Valentía", esCorrecta: false },
          { enunciado: "Enfado", esCorrecta: false },
        ],
        preguntaActual: "¿Qué emoción se reflejaba en el rostro de Lucía?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Haber roto el jarrón", esCorrecta: true },
          { enunciado: "Haber escondido el jarrón", esCorrecta: false },
          { enunciado: "No tener responsabilidad", esCorrecta: false },
          { enunciado: "No saber nada sobre el jarrón", esCorrecta: false },
        ],
        preguntaActual: "¿Qué reconocieron finalmente Laura, Marcos y Adela?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Valentía y responsabilidad", esCorrecta: true },
          { enunciado: "Deshonestidad", esCorrecta: false },
          { enunciado: "Falta de valentía", esCorrecta: false },
          { enunciado: "Paciencia", esCorrecta: false },
        ],
        preguntaActual: "¿Qué demostraron Laura, Marcos y Adela al admitir la verdad?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          { enunciado: "Triste y decepcionada", esCorrecta: true },
          { enunciado: "Enfadada", esCorrecta: false },
          { enunciado: "Desilusionada", esCorrecta: false },
          { enunciado: "Triste y decepcionada", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo se sintió la maestra Lucía después de la confesión de los estudiantes?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Valores de responsabilidad y valentía", esCorrecta: true },
          { enunciado: "Deshonestidad", esCorrecta: false },
          { enunciado: "Juegos en el aula", esCorrecta: false },
          { enunciado: "Incertidumbre", esCorrecta: false },
        ],
        preguntaActual: "¿Qué fortalecieron Laura, Marcos y Adela en el aula?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "El jarrón y los valores en el aula", esCorrecta: true },
          { enunciado: "La tristeza de Lucía", esCorrecta: false },
          { enunciado: "La paciencia de Lucía", esCorrecta: false },
          { enunciado: "La desilusión de los demás estudiantes", esCorrecta: false },
        ],
        preguntaActual: "¿Qué repararon los estudiantes al admitir la verdad?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaCasa1028 = (numeroPregunta) => {
    switch (numeroPregunta) {
      case 1:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 2:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 3:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 4:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 5:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 6:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 7:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            {
              enunciado: "",
              esCorrecta: false,
            },
            {
              enunciado: "",
              esCorrecta: false,
            },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 8:
        return {
          opcionesRespuesta: [
            {
              enunciado: "",
              esCorrecta: true,
            },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 9:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      case 10:
        return {
          opcionesRespuesta: [
            { enunciado: "", esCorrecta: true },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
            { enunciado: "", esCorrecta: false },
          ],
          preguntaActual: "",
        };
      // Agrega más casos según sea necesario
      default:
        // Opciones predeterminadas si el número de pregunta no coincide
        return obtenerPreguntasPredeterminadas(numeroPregunta);
    }
  };

// const preguntasGuia = (numeroPregunta) => {
//     switch (numeroPregunta) {
//       case 1:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 2:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 3:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 4:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 5:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 6:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 7:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             {
//               enunciado: "",
//               esCorrecta: false,
//             },
//             {
//               enunciado: "",
//               esCorrecta: false,
//             },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 8:
//         return {
//           opcionesRespuesta: [
//             {
//               enunciado: "",
//               esCorrecta: true,
//             },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 9:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       case 10:
//         return {
//           opcionesRespuesta: [
//             { enunciado: "", esCorrecta: true },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//             { enunciado: "", esCorrecta: false },
//           ],
//           preguntaActual: "",
//         };
//       // Agrega más casos según sea necesario
//       default:
//         // Opciones predeterminadas si el número de pregunta no coincide
//         return obtenerPreguntasPredeterminadas(numeroPregunta);
//     }
//   };

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
