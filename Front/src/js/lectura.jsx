import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Sonido from "./sonido";

const InstruccionesJuego = () => {
    const navigate = useNavigate();


    const irInstrucciones = () => {
        navigate("/instruccionesJuego");
      }

    const jugar = () => {
        navigate("/juego");
    }

    return (
        <Container>
        <h1 className="tituloGeneral">Lectura</h1>
        <h2 className="ordenLecturas">Lee atentamente la lectura y cuando termines presiona el boton Avanzar</h2>

        <div className="contenedorAcercade mx-auto text-center">
        <p className="informacionAcercaDe">
          El presente proyecto es una aplicación gamificada para ayudar a las
          personas a desarrollar y mejorar habilidades cognitivas relacionadas
          con la comprensión lectora como la concentración, la inferencia y el
          razonamiento. Se presentarán lecturas inspiradas en el Ecuador.
        </p>
      </div>
        
        <Button
          type="button"
          onClick={irInstrucciones}
          variant="secondary"
          className="regresar"
        >
          <i className="bi bi-caret-left-fill"></i> Salir
        </Button>
        <Button
        type="button"
        onClick={jugar}
        variant="secondary"
        className="iniciar"
      >
        Avanzar
      </Button>
        <Sonido />
      </Container>
    );
    };

export default InstruccionesJuego;