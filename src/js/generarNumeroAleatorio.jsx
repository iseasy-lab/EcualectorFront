// Genera un número aleatorio en un rango específico
export const generarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  