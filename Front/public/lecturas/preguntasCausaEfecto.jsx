export const preguntasCausaEfecto = (tituloLectura, numeroPregunta) => {
  switch (tituloLectura) {
    case "La fuente de los 100 talentos":
      return obtenerPreguntasLaFuenteDeLos100Talentos(numeroPregunta);
    case "El espantapájaros solidario":
      return obtenerPreguntasElEspantapajarosSolidario(numeroPregunta);
    case "Los tres animalitos":
      return obtenerPreguntasLosTresAnimalitos(numeroPregunta);
    // Agrega más casos según sea necesario para otros títulos de lectura
    default:
      // Opciones predeterminadas si el título de la lectura no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLaFuenteDeLos100Talentos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "El comportamiento orgulloso de aquellos con talentos.",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de cuidado de los habitantes.",
            esCorrecta: false,
          },
          { enunciado: "La escasez de agua en la isla.", esCorrecta: false },
          {
            enunciado: "La sequedad del Árbol de la Humildad.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue la causa principal de que la Fuente de los Cien Talentos se secara?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Porque la Fuente de los Cien Talentos no les bañó.",
            esCorrecta: true,
          },
          {
            enunciado: "Porque no querían compartir sus dones.",
            esCorrecta: false,
          },
          {
            enunciado: "Debido a la falta de interés en perfeccionarlos.",
            esCorrecta: false,
          },
          {
            enunciado: "A causa de la envidia que generaban.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Por qué algunos habitantes nunca llegaron a conocer su talento?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La actitud arrogante de aquellos con talentos.",
            esCorrecta: true,
          },
          { enunciado: "La desaparición de los talentos.", esCorrecta: false },
          {
            enunciado: "El comportamiento humilde de algunos.",
            esCorrecta: false,
          },
          {
            enunciado: "La sequedad del Árbol de la Humildad.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué provocó la envidia entre los habitantes de la isla?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Aumento de la monotonía y el aburrimiento.",
            esCorrecta: true,
          },
          {
            enunciado: "Incremento de la diversidad y la creatividad.",
            esCorrecta: false,
          },
          {
            enunciado: "Mayor cooperación entre los habitantes.",
            esCorrecta: false,
          },
          {
            enunciado: "Desarrollo de nuevos talentos de forma natural.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue el resultado de la desaparición de los talentos en la isla?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Experimentaron culpa y remordimiento.",
            esCorrecta: true,
          },
          { enunciado: "Se sintieron aliviados.", esCorrecta: false },
          {
            enunciado: "Celebraron la igualdad en la isla.",
            esCorrecta: false,
          },
          { enunciado: "Ignoraron la situación.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo reaccionaron los habitantes cuando falleció el último individuo talentoso?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Aceptar las diferencias y no juzgar a los demás.",
            esCorrecta: true,
          },
          { enunciado: "Deberían esconder sus talentos.", esCorrecta: false },
          {
            enunciado: "Competir para destacar en la isla.",
            esCorrecta: false,
          },
          { enunciado: "La humildad no tiene importancia.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál era la lección vital que aprendieron los habitantes tras la sequía de la fuente?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La lluvia de humildad que bañó a todos.",
            esCorrecta: true,
          },
          {
            enunciado: "La construcción de un nuevo pozo.",
            esCorrecta: false,
          },
          {
            enunciado: "La búsqueda de talentos en otras islas.",
            esCorrecta: false,
          },
          {
            enunciado: "El arrepentimiento de los habitantes.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Qué provocó que la Fuente de los Cien Talentos volviera a fluir?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Volvieron a ser amorosas y respetuosas.",
            esCorrecta: true,
          },
          { enunciado: "Se volvieron más orgullosos.", esCorrecta: false },
          { enunciado: "Ignoraron las diferencias.", esCorrecta: false },
          { enunciado: "Se volvieron más competitivos.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo cambiaron las relaciones entre los habitantes después de la lluvia de humildad?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Los padres y amigos de los nuevos talentosos.",
            esCorrecta: true,
          },
          { enunciado: "Los ancianos de la isla.", esCorrecta: false },
          { enunciado: "Los habitantes con talentos.", esCorrecta: false },
          {
            enunciado: "Nadie, cada uno se enseñó a sí mismo.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Quiénes se encargaron de enseñar a los nuevos nacimientos a usar sus talentos de manera adecuada?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Generar lluvia de humildad.", esCorrecta: true },
          {
            enunciado: "Proveer agua a la Fuente de los Cien Talentos.",
            esCorrecta: false,
          },
          { enunciado: "Secarse debido a la envidia.", esCorrecta: false },
          {
            enunciado: "Desarrollar nuevos talentos en los habitantes.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue el papel del Árbol de la Humildad en la historia de la isla?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasElEspantapajarosSolidario = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La avaricia extrema del agricultor.",
            esCorrecta: true,
          },
          {
            enunciado: "La abundancia de aves en el huerto.",
            esCorrecta: false,
          },
          {
            enunciado: "La falta de métodos para proteger el cultivo.",
            esCorrecta: false,
          },
          {
            enunciado: "La necesidad de decorar el huerto.",
            esCorrecta: false,
          },
        ],
        preguntaActual:
          "¿Cuál fue la causa principal de la construcción del espantapájaros?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Cambio el corazón del agricultor.", esCorrecta: true },
          { enunciado: "Aumento de la cosecha.", esCorrecta: false },
          { enunciado: "Disminución de aves en el huerto.", esCorrecta: false },
          { enunciado: "Pérdida de dientes de trigo.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué efecto tuvo la presencia del espantapájaros en el huerto?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La necesidad de alimentar a sus crías.",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de alimento en el huerto.",
            esCorrecta: false,
          },
          {
            enunciado: "La falta de alimento en el huerto.",
            esCorrecta: false,
          },
          { enunciado: "La generosidad del agricultor.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cuál fue la causa directa de que el pájaro se posara en un árbol y pidiera comida al espantapájaros?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Perdió la capacidad de entonar una canción.",
            esCorrecta: true,
          },
          { enunciado: "Mejoró su eficacia.", esCorrecta: false },
          {
            enunciado: "Lo hizo más amigable con los animales.",
            esCorrecta: false,
          },
          { enunciado: "Aumentó su atractivo visual.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Cómo afectó la generosidad del espantapájaros al cumplimiento de su función?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "Dar sus dientes de trigo.", esCorrecta: true },
          {
            enunciado: "La falta de habilidades musicales.",
            esCorrecta: false,
          },
          { enunciado: "La generosidad hacia el conejo.", esCorrecta: false },
          { enunciado: "La falta de boca y nariz.", esCorrecta: false },
        ],
        preguntaActual:
          "¿Qué causó que el espantapájaros perdiera la capacidad de entonar una canción?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          {
            enunciado:
              "El deseo de prohibir a la gallina alimentar al agricultor.",
            esCorrecta: true,
          },
          {
            enunciado: "La falta de alimento para el gallo.",
            esCorrecta: false,
          },
          {
            enunciado: "La necesidad de proteger sus huevos.",
            esCorrecta: false,
          },
          { enunciado: "El miedo al espantapájaros.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa del dilema del gallo madrugador?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "Le ofreció sus ojos de maíz.", esCorrecta: true },
          {
            enunciado: "Lo ahuyentó con sus brazos de caña.",
            esCorrecta: false,
          },
          {
            enunciado: "Ignoró la solicitud del gallo.",
            esCorrecta: false,
          },
          { enunciado: "Le ofreció sus granos de trigo.", esCorrecta: false },
        ],
        preguntaActual: "¿Cómo resolvió el espantapájaros el dilema del gallo madrugador?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "La necesidad de abrigo del vagabundo.",
            esCorrecta: true,
          },
          { enunciado: "La generosidad del agricultor.", esCorrecta: false },
          { enunciado: "La degradación del espantapájaros.", esCorrecta: false },
          { enunciado: "La falta de ropa del trabajador.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa de que el antiguo trabajador despedido recibiera el vestido del espantapájaros?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "Transformación del corazón del agricultor.", esCorrecta: true },
          { enunciado: "Aumento de la cosecha.", esCorrecta: false },
          { enunciado: "Pérdida de simpatía de los animales.", esCorrecta: false },
          { enunciado: "Desaparición del huerto.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué efecto tuvo el acto del agricultor al prender fuego al espantapájaros?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "El huerto se convirtió en un lugar acogedor.", esCorrecta: true },
          { enunciado: "El huerto se volvió inhóspito.", esCorrecta: false },
          { enunciado: "El agricultor se volvió más avaro.", esCorrecta: false },
          { enunciado: "Los animales abandonaron el huerto.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto final del cambio en el corazón del agricultor?",
      };
    // Agrega más casos según sea necesario
    default:
      // Opciones predeterminadas si el número de pregunta no coincide
      return obtenerPreguntasPredeterminadas(numeroPregunta);
  }
};

const obtenerPreguntasLosTresAnimalitos = (numeroPregunta) => {
  switch (numeroPregunta) {
    case 1:
      return {
        opcionesRespuesta: [
          { enunciado: "La curiosidad por explorar la región.", esCorrecta: true },
          { enunciado: "La escasez de alimentos en su hogar.", esCorrecta: false },
          { enunciado: "La necesidad de encontrar nuevas amistades.", esCorrecta: false },
          { enunciado: "La invitación de otros animales.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue la causa principal de la aventura al campo de Don Tortuga, Don Colibrí y Don Tigrillo?",
      };
    case 2:
      return {
        opcionesRespuesta: [
          { enunciado: "Compartir bananos con sus amigos.", esCorrecta: true },
          { enunciado: "Encontrar nuevos lugares para vivir.", esCorrecta: false },
          { enunciado: "Alejarse de sus amigos.", esCorrecta: false },
          { enunciado: "Desentenderse de la comida.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tortuga se encontrara con una plantación de bananos?",
      };
    case 3:
      return {
        opcionesRespuesta: [
          { enunciado: "La búsqueda de regalos para sus amigos.", esCorrecta: true },
          { enunciado: "El deseo de adornar su nido.", esCorrecta: false },
          { enunciado: "La necesidad de alimentarse.", esCorrecta: false },
          { enunciado: "La falta de otras opciones de alimentos.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que Don Colibrí recolectara flores de guayacán?",
      };
    case 4:
      return {
        opcionesRespuesta: [
          { enunciado: "Compartir maracuyás con sus amigos.", esCorrecta: true },
          { enunciado: "Deleitarse con una fruta.", esCorrecta: false },
          { enunciado: "Ignorar las frutas tropicales.", esCorrecta: false },
          { enunciado: "Alejarse del campo.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tigrillo descubriera un claro lleno de frutas tropicales?",
      };
    case 5:
      return {
        opcionesRespuesta: [
          { enunciado: "El gesto de generosidad entre ellos.", esCorrecta: true },
          { enunciado: "La escasez de alimentos en la región.", esCorrecta: false },
          { enunciado: "La necesidad de festejar un evento especial.", esCorrecta: false },
          { enunciado: "La presencia de otros animales en la selva.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos decidieran celebrar su amistad con un banquete?",
      };
    case 6:
      return {
        opcionesRespuesta: [
          { enunciado: "Experimentaron sorpresa y alegría.", esCorrecta: true },
          { enunciado: "Decidieron no celebrar la amistad.", esCorrecta: false },
          { enunciado: "Se distanciaron como amigos.", esCorrecta: false },
          { enunciado: "Ignoraron los regalos.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que Don Tortuga, Don Colibrí y Don Tigrillo encontraran la comida completa y cuidadosamente colocada?",
      };
    case 7:
      return {
        opcionesRespuesta: [
          { enunciado: "La celebración de un banquete.", esCorrecta: true },
          {
            enunciado: "La falta de comida en la selva.",
            esCorrecta: false,
          },
          {
            enunciado: "La presencia de otros animales.",
            esCorrecta: false,
          },
          { enunciado: "Encontrar la comida completa en sus madrigueras.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos se percataran del hermoso gesto de generosidad entre ellos?",
      };
    case 8:
      return {
        opcionesRespuesta: [
          {
            enunciado: "Fortalecieron aún más los lazos que los unían.",
            esCorrecta: true,
          },
          { enunciado: "Debilitaron los lazos de amistad.", esCorrecta: false },
          { enunciado: "Se alejaron de la selva.", esCorrecta: false },
          { enunciado: "Ignoraron la diversidad natural de su hogar.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto de que los tres amigos celebraran su amistad en un festín en la exuberante selva de Ecuador?",
      };
    case 9:
      return {
        opcionesRespuesta: [
          { enunciado: "La emoción de compartir con amigos.", esCorrecta: true },
          { enunciado: "La necesidad de impresionar a otros animales.", esCorrecta: false },
          { enunciado: "La falta de interés en la comida regional.", esCorrecta: false },
          { enunciado: "La tradición de celebrar con festines.", esCorrecta: false },
        ],
        preguntaActual: "¿Qué causó que los tres amigos compartieran alimentos característicos de la región?",
      };
    case 10:
      return {
        opcionesRespuesta: [
          { enunciado: "Fortalecer aún más los lazos de amistad.", esCorrecta: true },
          { enunciado: "Alejarse de la selva ecuatoriana.", esCorrecta: false },
          { enunciado: "Celebrar festines más frecuentes.", esCorrecta: false },
          { enunciado: "Ignorar la diversidad animal en su hogar.", esCorrecta: false },
        ],
        preguntaActual: "¿Cuál fue el efecto final del gesto de generosidad entre Don Tortuga, Don Colibrí y Don Tigrillo?",
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
