export const mezclasOpciones = (array) => {
    const mezclasOpciones = [...array];
    for (let i = mezclasOpciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mezclasOpciones[i], mezclasOpciones[j]] = [mezclasOpciones[j], mezclasOpciones[i]];
    }
    return mezclasOpciones;
  };