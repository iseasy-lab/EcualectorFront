import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import informacionLecturas from "../../public/lecturas/informacionLecturas";
import axios from "axios";
import "../css/insignias.css";

function InsigniasTutor() {
  const navigate = useNavigate();
  const [insignias, setInsignias] = useState([]);

  useEffect(() => {
    const obtenerDatosInsignias = async () => {
      try {
        if (sessionStorage.getItem("usuario") === null) {
          navigate("/");
        } else {
          const tiposDeJuego = ["Elige sabiamente", "Suelta la respuesta", "¿Quién es quién?", "¿Qué paso primero?", "¿Qué pasaría si...?"];
  
          const insigniasData = tiposDeJuego.map((tipoDeJuego) => {
            const tipoDeJuegoConVariante = tipoDeJuego + "2";
  
            if (informacionLecturas[tipoDeJuego] || informacionLecturas[tipoDeJuegoConVariante]) {
              const lecturas = (informacionLecturas[tipoDeJuego] || []).concat(informacionLecturas[tipoDeJuegoConVariante] || []).map((lectura) => ({
                tituloLectura: lectura.tituloLectura,
                insigniaObtenida: false, // Puedes obtener el estado real desde la base de datos
                imagenURL: lectura.insignia,
              }));
  
              return {
                tipoDeJuego,
                lecturas,
              };
            } else {
              console.error(`El tipo de juego '${tipoDeJuego}' no está definido en informacionLecturas`);
              return null;
            }
          }).filter(Boolean); // Filtra los tipos de juego que no están definidos
  
          setInsignias(insigniasData);
        }
      } catch (error) {
        console.error("Error al obtener datos de insignias:", error);
      }
    };
  
    obtenerDatosInsignias();
    obtenerInsigniasObtenidas();
  }, [navigate]);

  const obtenerInsigniasObtenidas = async () => {
    try {
      const usuario = sessionStorage.getItem("usuario");
      const response = await axios.get(`http://localhost:3001/obtenerInsignias`, {
        params: {
          usuario,
        },
      });
  
      const resultados = response.data;
      console.log('Resultados de Insignias Obtenidas:', resultados);

      // Actualiza el estado de las insignias según el resultado de la consulta
      setInsignias((prevInsignias) =>
        prevInsignias.map((juego) => ({
          ...juego,
          lecturas: juego.lecturas.map((insignia) => ({
            ...insignia,
            insigniaObtenida: resultados.some(
              (resultado) =>
                resultado.TIPO_JUEGO === juego.tipoDeJuego &&
                resultado.NOMBRE_LECTURA === insignia.tituloLectura
            ),
          })),
        }))
      );
    } catch (error) {
      console.error('Error al obtener información de insignias obtenidas:', error);
    }
  };

  const irMenuTutor = () => {
    navigate("/menuTutor");
  };

  return (
    <Container>
      <h1 className="tituloGeneral">Insignias</h1>

      <div className="contenedorInsignias">
        <Row>
          {insignias.map((juego, index) => (
            <Col key={index} xs={2} className="tablaInsignias">
              <Table striped bordered hover>
                <thead className="table-fixed-header">
                  <tr>
                    <th colSpan="2">{juego.tipoDeJuego}</th>
                  </tr>
                </thead>
                <tbody>
                  {juego.lecturas.map((insignia, innerIndex) => (
                    <tr key={innerIndex}>
                      <td>{insignia.tituloLectura}</td>
                      <td>
                        {insignia.insigniaObtenida ? (
                          <img
                            src={insignia.imagenURL}
                            alt="Insignia obtenida"
                            className="imagenInsignia"
                          />
                        ) : (
                          <div className="imagenPlaceholder" ></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          ))}
        </Row>
      </div>

      <Button
        type="button"
        onClick={irMenuTutor}
        variant="secondary"
        className="regresarCentrado botones"
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
}

export default InsigniasTutor;