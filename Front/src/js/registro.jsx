import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import useSound from "use-sound";
import Tigrillo from "../../public/audios/login/Tigrillo.mp3";
import Cuy from "../../public/audios/login/Cuy.mp3";
import Tortuga from "../../public/audios/login/Tortuga.mp3";
import OsoAnteojos from "../../public/audios/login/OsoAnteojos.mp3";
import Verde from "../../public/audios/login/Verde.mp3";
import Rojo from "../../public/audios/login/Rojo.mp3";
import Amarillo from "../../public/audios/login/Amarillo.mp3";
import Azul from "../../public/audios/login/Azul.mp3";
import Comer from "../../public/audios/login/Comer.mp3";
import Dormir from "../../public/audios/login/Dormir.mp3";
import Nadar from "../../public/audios/login/Nadar.mp3";
import Saltar from "../../public/audios/login/Saltar.mp3";
import SonidoBoton from "../../public/audios/botones/SonidoBoton.mp3";
import { mezclasOpciones } from "./mezclarOpciones";

const FormularioRegistro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [usuarioTutor, setUsuarioTutor] = useState("");
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [accion, setAccion] = useState(null);
  const [animalesMezclados, setAnimalesMezclados] = useState([]);
  const [coloresMezclados, setColoresMezclados] = useState([]);
  const [accionesMezcladas, setAccionesMezcladas] = useState([]);
  const [reproducirTigrillo] = useSound(Tigrillo);
  const [reproducirCuy] = useSound(Cuy);
  const [reproducirTortuga] = useSound(Tortuga);
  const [reproducirOsoAnteojos] = useSound(OsoAnteojos);
  const [reproducirVerde] = useSound(Verde);
  const [reproducirRojo] = useSound(Rojo);
  const [reproducirAmarillo] = useSound(Amarillo);
  const [reproducirAzul] = useSound(Azul);
  const [reproducirComer] = useSound(Comer);
  const [reproducirDormir] = useSound(Dormir);
  const [reproducirNadar] = useSound(Nadar);
  const [reproducirSaltar] = useSound(Saltar);
  const [reproducirBoton] = useSound(SonidoBoton);

  useEffect(() => {
    setAnimalesMezclados(
      mezclasOpciones(["Tigrillo", "Cuy", "Tortuga", "OsoAnteojos"])
    );
    setColoresMezclados(mezclasOpciones(["Amarillo", "Azul", "Rojo", "Verde"]));
    setAccionesMezcladas(
      mezclasOpciones(["Comer", "Dormir", "Nadar", "Saltar"])
    );
  }, []);

  const renderProgressBar = () => (
    <ProgressBar>
      {nombre && (
        <ProgressBar striped animated variant="success" now={16.8} key={1} />
      )}
      {apellido && (
        <ProgressBar striped animated variant="success" now={16.8} key={2} />
      )}
      {opcionSeleccionada === "Docente" && (
        <ProgressBar striped animated variant="success" now={16.6} key={3} />
      )}
      {opcionSeleccionada === "Estudiante" && (
        <ProgressBar striped animated variant="success" now={8.3} key={5} />
      )}
      {usuarioTutor && (
        <ProgressBar striped animated variant="success" now={8.3} key={5} />
      )}
      {animal && (
        <ProgressBar striped animated variant="success" now={16.6} key={6} />
      )}
      {color && (
        <ProgressBar striped animated variant="success" now={16.6} key={7} />
      )}
      {accion && (
        <ProgressBar striped animated variant="success" now={16.6} key={8} />
      )}
    </ProgressBar>
  );

  const cambiarNombre = (event) => {
    const nuevoNombre = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setNombre(nuevoNombre.toLowerCase());
  };

  const cambiarApellido = (event) => {
    const nuevoApellido = event.target.value.replace(/[^a-zA-ZñÑ]/g, "");
    setApellido(nuevoApellido.toLowerCase());
  };

  const seleccionarComboBox = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
    if (valorSeleccionado === "Docente") {
      setUsuarioTutor("");
    }
  };

  const cambiarUsuarioTutor = (event) => {
    const nuevoUsuarioTutor = event.target.value.replace(/[^a-zñ]/g, "");
    setUsuarioTutor(nuevoUsuarioTutor.toLowerCase());
  };

  const seleccionarAnimal = (selectedAnimal) => {
    // Si ya hay un animal seleccionado, restablecer su estilo
    if (animal === selectedAnimal) {
      setAnimal(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAnimal(selectedAnimal);
      if (selectedAnimal === "Tigrillo") {
        reproducirTigrillo();
      }
      if (selectedAnimal === "Cuy") {
        reproducirCuy();
      }
      if (selectedAnimal === "Tortuga") {
        reproducirTortuga();
      }
      if (selectedAnimal === "OsoAnteojos") {
        reproducirOsoAnteojos();
      }
    }
  };

  const seleccionarColor = (selectedColor) => {
    if (color === selectedColor) {
      setColor(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setColor(selectedColor);

      if (selectedColor === "Verde") {
        reproducirVerde();
      }
      if (selectedColor === "Rojo") {
        reproducirRojo();
      }
      if (selectedColor === "Amarillo") {
        reproducirAmarillo();
      }
      if (selectedColor === "Azul") {
        reproducirAzul();
      }
    }
  };

  const seleccionarAccion = (selectedAccion) => {
    if (accion === selectedAccion) {
      setAccion(null);
    } else {
      // Establecer el nuevo animal seleccionado
      setAccion(selectedAccion);

      if (selectedAccion === "Comer") {
        reproducirComer();
      }
      if (selectedAccion === "Dormir") {
        reproducirDormir();
      }
      if (selectedAccion === "Nadar") {
        reproducirNadar();
      }
      if (selectedAccion === "Saltar") {
        reproducirSaltar();
      }
    }
  };

  const convertirInicialEnMayuscula = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const registrar = (e) => {
    e.preventDefault();
    if (nombre && apellido && opcionSeleccionada && animal && color && accion) {
      const nombreUsuario = `${nombre.toLowerCase()}${apellido
        .charAt(0)
        .toLowerCase()}`;

      const nombreCapitalizado = convertirInicialEnMayuscula(nombre);
      const apellidoCapitalizado = convertirInicialEnMayuscula(apellido);

      if (opcionSeleccionada === "Docente") {
        axios
          .post("http://localhost:3001/registrarTutor", {
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then((response) => {
            console.log(response.data.success);
            const tutorYaRegistrado = response.data.success;
            if (tutorYaRegistrado) {
              Swal.fire({
                title: "El docente ya existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            } else {
              Swal.fire({
                title: "Docente registrado con éxito",
                html: `Bienvenido, ${nombreCapitalizado} ${apellidoCapitalizado}! Tu nombre de <strong>usuario</strong> es: <strong>${nombreUsuario}</strong>`,
                icon: "success",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login");
                }
              });
            }
          });
      }
      if (opcionSeleccionada === "Estudiante" && usuarioTutor) {
        axios
          .post("http://localhost:3001/registrarEstudiante", {
            usuarioTutor: usuarioTutor,
            nombre: nombre,
            apellido: apellido,
            animal: animal,
            color: color,
            accion: accion,
          })
          .then((response) => {
            console.log(response.data.success);
            const tutorNoExiste = response.data.success;
            if (tutorNoExiste == "TutorNoExiste") {
              Swal.fire({
                title: "El código de tutor no existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            } else if (tutorNoExiste == "TutorExiste") {
              Swal.fire({
                title: "Estudiante registrado con éxito",
                html: `Bienvenido, ${nombreCapitalizado} ${apellidoCapitalizado}! Tu nombre de <strong>usuario</strong> es: <strong>${nombreUsuario}</strong>`,
                icon: "success",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login");
                }
              });
            } else if (tutorNoExiste == "EstudianteExiste") {
              Swal.fire({
                title: "El estudiante ya existe",
                icon: "error",
                confirmButtonText: '<span style="color:black">Aceptar</span>',
                confirmButtonColor: "yellow",
              });
            }
          });
      }
    } else {
      Swal.fire({
        title: "Existen campos sin completar",
        icon: "error",
        confirmButtonText: '<span style="color:black">Aceptar</span>',
        confirmButtonColor: "yellow",
      });
    }
  };

  const irIndex = () => {
    navigate("/");
  };

  const renderImagen = (nombreAnimal) => (
    <Col key={nombreAnimal} md={3} className="d-flex justify-content-center">
      <img
        src={`/img/login/${nombreAnimal.toLowerCase()}.png`}
        alt={nombreAnimal}
        className={`imagen ${animal === nombreAnimal ? "selected" : ""}`}
        onClick={() => seleccionarAnimal(nombreAnimal, setAnimal)}
      />
    </Col>
  );

  const renderOpcion = (nombreOpcion) => (
    <Col key={nombreOpcion} md={3} className="d-flex justify-content-center">
      <div
        className={`opcion${nombreOpcion} ${
          color === nombreOpcion ? "selected" : ""
        }`}
        onClick={() => seleccionarColor(nombreOpcion, setColor)}
      ></div>
    </Col>
  );

  const renderAccion = (nombreAccion) => (
    <Col key={nombreAccion} md={3} className="d-flex justify-content-center">
      <div
        className={`accion ${accion === nombreAccion ? "selected" : ""}`}
        onClick={() => seleccionarAccion(nombreAccion, setAccion)}
      >
        {nombreAccion}
      </div>
    </Col>
  );

  return (
    <Container>
      <h1 className="tituloGeneral">Registro de Jugador</h1>
      <Row>
        <Col md={5} className="tituloLogin">
          <h2>Completa tu información</h2>
        </Col>
        <Col md={7} className="tituloLogin">
          <h2>Elige un animal, color y acción como tu contraseña</h2>
        </Col>
      </Row>
      {renderProgressBar()}
      <Form onSubmit={registrar}>
        <Row className="fila">
          <Col md={5} className="usuario">
            <center>
              <h2 className="titulo2">Nombre</h2>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={cambiarNombre}
                  placeholder="Ejemplo: pablo"
                  aria-label="NombreUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">Apellido</h2>
              <InputGroup className=" mb-3">
                <Form.Control
                  type="text"
                  value={apellido}
                  onChange={cambiarApellido}
                  placeholder="Ejemplo: velez"
                  aria-label="ApellidoUsuario"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <h2 className="titulo2">¿Cuál será tu rol?</h2>
              <InputGroup className="mb-3">
                <Form.Select
                  value={opcionSeleccionada}
                  onChange={seleccionarComboBox}
                >
                  <option defaultValue disabled value="">
                    Selecciona
                  </option>
                  <option value="Docente">Docente</option>
                  <option value="Estudiante">Estudiante</option>
                </Form.Select>
              </InputGroup>
              {opcionSeleccionada === "Estudiante" && (
                // Mostrar el campo de entrada del usuario del tutor solo cuando se selecciona "Estudiante"
                <div>
                  <h2 className="titulo2">Código de Tutor</h2>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      value={usuarioTutor}
                      onChange={cambiarUsuarioTutor}
                      placeholder="Ejemplo: juanp"
                      aria-label="CodigoTutor"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              )}
            </center>
          </Col>

          <Col md={7} className="contenedorLogin">
            <center>
              <h2 className="titulo2">Contraseña</h2>
            </center>

            {(!nombre || !apellido || !opcionSeleccionada) && (
              <div className="bloqueo">
                Complete la información de usuario para poder ingresar su
                contraseña
              </div>
            )}
            {/* Animales */}
            <Row className="fila">
              {animalesMezclados.map((animal) => renderImagen(animal))}
            </Row>

            {/* Colores */}
            <Row className="fila">
              {coloresMezclados.map((color) => renderOpcion(color))}
            </Row>

            {/* Acciones */}
            <Row className="fila">
              {accionesMezcladas.map((accion) => renderAccion(accion))}
            </Row>
          </Col>
        </Row>

        <center>
          <Button
            type="submit"
            variant="secondary"
            className="iniciar"
            onMouseEnter={reproducirBoton}
          >
            Registrar
          </Button>
        </center>
      </Form>
      <Button
        type="button"
        onClick={irIndex}
        variant="secondary"
        className="regresar"
        onMouseEnter={reproducirBoton}
      >
        <i className="bi bi-caret-left-fill"></i> Regresar
      </Button>
    </Container>
  );
};

export default FormularioRegistro;
