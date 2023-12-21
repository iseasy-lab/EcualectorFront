import { useNavigate } from "react-router-dom";
import { Button, Container, Table, Form, Row, Col } from "react-bootstrap";


import "../css/tablaLogros.css";

function TablaLogros() {
  const navigate = useNavigate();

  const irMenuLecturas = () => {
    navigate("/menuJuegos");
  };

return (
  <Container className="d-flex flex-column align-items-center justify-content-center">
    <h1 className="tituloGeneral">Tabla de Logros</h1>

    <Form className="mb-3 mt-3">
        <Row>
          <Col md={4}>
            <Form.Control
                  type="text"
                  placeholder="Usuario: pablov"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
          </Col>
          <Col md={4}>
            <Form.Select>
              <option value="">Tipo de Juego</option>
              <option value="tipo1">Elige Sabiamente</option>
              <option value="tipo2">Ponlo en su Lugar</option>
              <option value="tipo3">¿Quién es Quién?</option>
              <option value="tipo3">¿Qué Paso Primero?</option>
              <option value="tipo3">¿Qué Pasaría si...?</option>
              <option value="tipo3">Conexión Maestra</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Button type="submit" variant="secondary" className="botonBuscar">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>

    <Table striped bordered hover className="mb-3 text-center">
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Juego</th>
            <th># Insignias</th>
            <th>Intentos</th>
            <th>Aciertos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
            <td>Dato 4</td>
            <td>Dato 5</td>
          </tr>
        </tbody>
      </Table>

    
    <Button
      type="button"
      onClick={irMenuLecturas}
      variant="secondary"
      className="regresarCentrado"
    >
      <i className="bi bi-caret-left-fill"></i> Regresar
    </Button>

  </Container>
);

}

export default TablaLogros;
