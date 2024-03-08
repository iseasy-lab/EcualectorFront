import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./js/index";
import Login from "./js/login";
import Registro from "./js/registro";
import PreguntasSeguridad from "./js/preguntasSeguridad";
import RestaurarContrasena from "./js/restaurarContrasena";
import AcercaDe from "./js/acercaDe";
import MenuTutor from "./js/menuTutor";
import Respuestas from "./js/respuestas";
import AceptarEstudiantes from "./js/aceptarEstudiantes";
import TablaLogrosTutor from "./js/tablaLogrosTutor";
import InsigniasTutor from "./js/insigniasTutor";
import ListaEstudiantes from "./js/listaEstudiantes";
import MenuJuegos from "./js/menuJuegos";
import MenuLecturas from "./js/menuLecturas";
import InstruccionesJuego from "./js/instruccionesJuego";
import Lectura from "./js/lectura";
import TablaLogros from "./js/tablaLogros";
import Insignias from "./js/insignias";
import SeleccionaLaRespuesta from "./js/juego_SeleccionaLaRespuesta";
import ArrastrarYSoltar from "./js/juego_ArrastrarYSoltar";
import EncuentraElPersonaje from "./js/juego_EncuentraElPersonaje";
import OrdenarEventos from "./js/juego_OrdenarEventos";
import CausaEfecto from "./js/juego_CausaEfecto";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/preguntasSeguridad", element: <PreguntasSeguridad /> },
  { path: "/restaurarContrasena", element: <RestaurarContrasena /> },
  { path: "/acercaDe", element: <AcercaDe /> },
  { path: "/menuTutor", element: <MenuTutor /> },
  { path: "/respuestas", element: <Respuestas /> },
  { path: "/tablaLogrosTutor", element: <TablaLogrosTutor /> },
  { path: "/insigniasTutor", element: <InsigniasTutor /> },
  { path: "/aceptarEstudiantes", element: <AceptarEstudiantes /> },
  { path: "/listaEstudiantes", element: <ListaEstudiantes />},
  { path: "/menuJuegos", element: <MenuJuegos /> },
  { path: "/tablaLogros", element: <TablaLogros /> },
  { path: "/insignias", element: <Insignias /> },
  { path: "/menuLecturas", element: <MenuLecturas /> },
  { path: "/instruccionesJuego", element: <InstruccionesJuego /> },
  { path: "/lectura", element: <Lectura /> },
  { path: "/seleccionaLaRespuesta", element: <SeleccionaLaRespuesta /> },
  { path: "/arrastrarYSoltar", element: <ArrastrarYSoltar /> },
  { path: "/encuentraElPersonaje", element: <EncuentraElPersonaje /> },
  { path: "/ordenarEventos", element: <OrdenarEventos /> },
  { path: "/causaEfecto", element: <CausaEfecto /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
