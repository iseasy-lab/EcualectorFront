import { useNavigate } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import Sonido from "./sonido";

const InstruccionesJuego = () => {
    const navigate = useNavigate();

    const siguienteEjercicio = () => {
      Swal.fire({
        icon: "info",
        text: 'Pasar de ejercicio',
        confirmButtonText: '<span style="color:black">Continuar</span>',
        confirmButtonColor: "yellow", 
      });
    };

    const irInstrucciones = () => {
        navigate("/instruccionesJuego");
      }

      const teminarJuego = () => {
        Swal.fire({
          title: "Puntajes",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "yellow",
          cancelButtonText: '<span style="color:black">Reiniciar</span>',
          confirmButtonText: 'Salir',
          confirmButtonColor: "red", 
        }).then((result) => {
          if (result.isConfirmed) {
            irInstrucciones();
          }
        });
      }

      const mostrarInformacion = () => {
        Swal.fire({
          icon: "info",
          html: '<span style="font-weight:bold">Lee la pregunta y arrastra cada número para ordenar de manera correcta los eventos.</span>',
          confirmButtonText: '<span style="color:black">Continuar</span>',
          confirmButtonColor: "yellow", 
        });
      }

    return (
        <Container>
        <h1 className="tituloGeneral">Elige Sabiamente</h1>
        <h2 className="ordenLecturas">Elije la respuesta correcta</h2>

          <Row className="fila">
            <Col md={5} className="usuario">
              <center>
                <h2 className="titulo2">Usuario</h2>
  
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="bi bi-person-fill"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Ejemplo: pablov"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
  
                <a id="olvideContrasena" className="sinContrasena">
                  ¿ Olvidaste tu Contraseña ?
                </a>
              </center>
            </Col>
  
            <Col md={7} border="dark" className="contenedorLogin">
              <center>
                <h2 className="titulo2">Contraseña</h2>
              </center>
              
            </Col>
          </Row>
        
        <Button
          type="button"
          onClick={teminarJuego}
          variant="secondary"
          className="regresar"
        >
          <i className="bi bi-caret-left-fill"></i> Salir
        </Button>

        <i className="bi bi-info-circle botonInformacion" onClick={mostrarInformacion}></i>
        <Button
        type="button"
        onClick={siguienteEjercicio}
        variant="secondary"
        className="iniciar"
      >
        Continuar
      </Button>
        <Sonido />
      </Container>
    );
    };

export default InstruccionesJuego;