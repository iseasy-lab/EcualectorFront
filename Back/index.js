const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressSession = require("express-session");
const db = require("./db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.post("/registrarTutor", (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const insertQuery =
    "INSERT INTO TUTOR (NOMBRE_TUTOR, APELLIDO_TUTOR, PASSWORD_TUTOR_ANIMAL, PASSWORD_TUTOR_COLOR, PASSWORD_TUTOR_ACCION) VALUES (?, ?, ?, ?, ?)";
  db.query(insertQuery, [nombre, apellido, animal, color, accion], (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ success: true, message: "Tutor registrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const queryValidacionTutor = "SELECT * FROM tutor WHERE USER_TUTOR = ?";
  const queryValidacionEstudiante =
    "SELECT * FROM estudiante WHERE USER_ESTUDIANTE = ?";

  const selectQueryTutor =
    "SELECT * FROM tutor WHERE USER_TUTOR = ? AND PASSWORD_TUTOR_ANIMAL = ? AND PASSWORD_TUTOR_COLOR = ? AND PASSWORD_TUTOR_ACCION = ?";
  const selectQueryEstudiante =
    "SELECT * FROM estudiante WHERE USER_ESTUDIANTE = ? AND PASSWORD_ESTUDIANTE_ANIMAL = ? AND PASSWORD_ESTUDIANTE_COLOR = ? AND PASSWORD_ESTUDIANTE_ACCION = ?";

  db.query(queryValidacionTutor, [usuario], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      db.query(
        selectQueryTutor,
        [usuario, animal, color, accion],
        (err, result) => {
          if (err) {
            res.send({ err: err });
          }
          if (result.length > 0) {
            res.send({ success: true, message: "Tutor" });
          }
        }
      );
    } else if (result.length === 0) {
      db.query(queryValidacionEstudiante, [usuario], (err, result) => {
        if (err) {
          throw err;
        }
        if (result.length > 0) {
          db.query(
            selectQueryEstudiante,
            [usuario, animal, color, accion],
            (err, result) => {
              if (err) {
                res.send({ err: err });
              }
              if (result.length > 0) {
                res.send({ success: true, message: "Estudiante" });
              }
            }
          );
        } else {
          res.send({ success: false, message: "Usuario no existe" });
        }
      });
    }
  });
});

app.get("/obtenerNombreEstudiante", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery =
    "SELECT nombre_estudiante, usuario_validado FROM estudiante WHERE user_estudiante = ?";

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.get("/obtenerEstudiantesValidados", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery =
    "SELECT user_estudiante, nombre_estudiante, apellido_estudiante FROM ESTUDIANTE JOIN TUTOR ON ESTUDIANTE.ID_TUTOR = TUTOR.ID_TUTOR WHERE estudiante.USUARIO_VALIDADO = true and tutor.USER_TUTOR = ?";

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/obtenerDatosEstudiantesParaTutor", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery = `SELECT
  NOMBRE_ESTUDIANTE,
  APELLIDO_ESTUDIANTE,
  LECTURA.TIPO_JUEGO,
  LECTURA.ID_LECTURA, 
  LECTURA.NOMBRE_LECTURA,
  LECTURA.INSIGNIA_OBTENIDA,
  PREGUNTA.PREGUNTAS_CONTESTADAS,
  PREGUNTA.PREGUNTAS_CORRECTAS,
  PREGUNTA.DURACION
FROM
  ESTUDIANTE
JOIN
  TUTOR ON ESTUDIANTE.ID_TUTOR = TUTOR.ID_TUTOR
LEFT JOIN
  LECTURA ON ESTUDIANTE.ID_ESTUDIANTE = LECTURA.ID_ESTUDIANTE
LEFT JOIN
  PREGUNTA ON LECTURA.ID_LECTURA = PREGUNTA.ID_LECTURA
WHERE
  ESTUDIANTE.USUARIO_VALIDADO = true
  AND TUTOR.USER_TUTOR = ?
  AND LECTURA.ID_LECTURA IS NOT NULL`;

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error interno del servidor");
    } else {
      res.send(result);
    }
  });
});

app.get("/obtenerDatosEstudiantes", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery = `SELECT
  NOMBRE_ESTUDIANTE,
  APELLIDO_ESTUDIANTE,
  LECTURA.TIPO_JUEGO,
  LECTURA.ID_LECTURA, 
  LECTURA.NOMBRE_LECTURA,
  LECTURA.INSIGNIA_OBTENIDA,
  PREGUNTA.PREGUNTAS_CONTESTADAS,
  PREGUNTA.PREGUNTAS_CORRECTAS,
  PREGUNTA.DURACION
FROM
  ESTUDIANTE
JOIN
  TUTOR ON ESTUDIANTE.ID_TUTOR = TUTOR.ID_TUTOR
LEFT JOIN
  LECTURA ON ESTUDIANTE.ID_ESTUDIANTE = LECTURA.ID_ESTUDIANTE
LEFT JOIN
  PREGUNTA ON LECTURA.ID_LECTURA = PREGUNTA.ID_LECTURA
WHERE
  ESTUDIANTE.USUARIO_VALIDADO = true
  AND LECTURA.ID_LECTURA IS NOT NULL
  AND ESTUDIANTE.USER_ESTUDIANTE != "invitadoi"`;

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error interno del servidor");
    } else {
      res.send(result);
    }
  });
});

app.get("/obtenerInsignias", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery = `SELECT
  USER_ESTUDIANTE,
  LECTURA.TIPO_JUEGO,
  LECTURA.NOMBRE_LECTURA,
  LECTURA.INSIGNIA_OBTENIDA
FROM
  ESTUDIANTE
LEFT JOIN
  LECTURA ON ESTUDIANTE.ID_ESTUDIANTE = LECTURA.ID_ESTUDIANTE
WHERE
  ESTUDIANTE.USUARIO_VALIDADO = true
  AND LECTURA.ID_LECTURA IS NOT NULL
  AND ESTUDIANTE.USER_ESTUDIANTE = ?
  AND LECTURA.INSIGNIA_OBTENIDA = true;`;

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error interno del servidor");
    } else {
      res.send(result);
    }
  });
});

app.get("/obtenerEstudiantesNoValidados", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery =
    "SELECT user_estudiante, nombre_estudiante, apellido_estudiante FROM ESTUDIANTE JOIN TUTOR ON ESTUDIANTE.ID_TUTOR = TUTOR.ID_TUTOR WHERE estudiante.USUARIO_VALIDADO = false and tutor.USER_TUTOR = ?";

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/eliminarEstudiante", (req, res) => {
  const userEstudiante = req.query.userEstudiante;
  const userTutor = req.query.userTutor;
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;

  const deleteQuery =
    "DELETE FROM estudiante WHERE user_estudiante = ? AND user_tutor = ? AND nombre_estudiante = ? AND apellido_estudiante = ?";

  db.query(
    deleteQuery,
    [userEstudiante, userTutor, nombre, apellido],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al eliminar el estudiante");
      } else {
        res.status(200).send("Estudiante eliminado con éxito");
      }
    }
  );
});

app.put("/aprobarEstudiante", (req, res) => {
  const userEstudiante = req.body.userEstudiante;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;

  const updateQuery =
    "UPDATE estudiante SET usuario_validado = true WHERE user_estudiante = ? AND nombre_estudiante = ? AND apellido_estudiante = ?";

  db.query(updateQuery, [userEstudiante, nombre, apellido], (err, result) => {
    if (err) {
      res.status(500).send("Error al actualizar el estudiante");
    } else {
      res.status(200).send("Estudiante actualizado con éxito");
    }
  });
});

app.post("/registrarEstudiante", (req, res) => {
  const usuarioTutor = req.body.usuarioTutor;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const insertQuery =
    "INSERT INTO ESTUDIANTE (ID_TUTOR, NOMBRE_ESTUDIANTE, APELLIDO_ESTUDIANTE, PASSWORD_ESTUDIANTE_ANIMAL, PASSWORD_ESTUDIANTE_COLOR, PASSWORD_ESTUDIANTE_ACCION) VALUES (?, ?, ?, ?, ?, ?)";
  const selectQuery = "SELECT ID_TUTOR FROM tutor WHERE USER_TUTOR = ?";

  db.query(selectQuery, [usuarioTutor], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const idTutor = result[0].ID_TUTOR;

      db.query(
        insertQuery,
        [idTutor, nombre, apellido, animal, color, accion],
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.send({ success: false, message: "Estudiante registrado" });
          }
        }
      );
    } else {
      {
        res.send({ success: true, message: "Tutor no existe" });
      }
    }
  });
});

app.post("/guardarPuntuacion", (req, res) => {
  const usuario = req.body.usuario;
  const tituloLectura = req.body.tituloLectura;
  const tipoJuego = req.body.tipoJuego;
  const insigniaObtenida = req.body.insigniaObtenida;
  const preguntasContestadas = req.body.preguntasContestadas;
  const preguntasCorrectas = req.body.preguntasCorrectas;
  const horaInicio = req.body.horaInicio;
  const horaFin = req.body.horaFin;

  const selectQueryIDEstudiante =
    "SELECT ID_ESTUDIANTE FROM ESTUDIANTE WHERE USER_ESTUDIANTE = ?";
  const insertQueryLectura =
    "INSERT INTO LECTURA (NOMBRE_LECTURA, ID_ESTUDIANTE, TIPO_JUEGO, INSIGNIA_OBTENIDA) VALUES (?, ?, ?, ?)";
  const selectQueryIDLectura =
    "SELECT MAX(ID_LECTURA) AS lastId FROM LECTURA WHERE NOMBRE_LECTURA = ? AND ID_ESTUDIANTE = ? AND TIPO_JUEGO = ?";
  const insertQueryPuntuacion =
    "INSERT INTO PREGUNTA (ID_LECTURA, PREGUNTAS_CONTESTADAS, PREGUNTAS_CORRECTAS, HORA_INICIO, HORA_FIN) VALUES (?, ?, ?, ?, ?)";

  db.query(selectQueryIDEstudiante, [usuario], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const idEstudiante = result[0].ID_ESTUDIANTE;
      console.log("idEstudiante: ", idEstudiante);

      db.query(
        insertQueryLectura,
        [tituloLectura, idEstudiante, tipoJuego, insigniaObtenida],
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.send({ success: true, message: "Puntuación guardada" });
            console.log("Lectura guardada");

            db.query(
              selectQueryIDLectura,
              [tituloLectura, idEstudiante, tipoJuego],
              (err, result) => {
                if (err) {
                  console.log(err);
                  return res.status(500).send({
                    success: false,
                    message: "Error al obtener el ID de la lectura",
                  });
                }

                console.log("Resultado de MAX(ID_LECTURA):", result);

                if (result.length > 0 && result[0].lastId !== null) {
                  const idLectura = result[0].lastId;
                  console.log("idLectura: ", idLectura);

                  db.query(
                    insertQueryPuntuacion,
                    [
                      idLectura,
                      preguntasContestadas,
                      preguntasCorrectas,
                      horaInicio,
                      horaFin,
                    ],
                    (err) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("Pregunta guardada");
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    } else {
      res.send({ success: false, message: "Estudiante no existe" });
    }
  });
});

app.get("/obtenerInsignias", (req, res) => {
  const usuario = req.query.usuario;
  const selectQuery = `SELECT
  USER_ESTUDIANTE,
  LECTURA.TIPO_JUEGO,
  LECTURA.NOMBRE_LECTURA,
  LECTURA.INSIGNIA_OBTENIDA
FROM
  ESTUDIANTE
LEFT JOIN
  LECTURA ON ESTUDIANTE.ID_ESTUDIANTE = LECTURA.ID_ESTUDIANTE
WHERE
  ESTUDIANTE.USUARIO_VALIDADO = true
  AND LECTURA.ID_LECTURA IS NOT NULL
  AND ESTUDIANTE.USER_ESTUDIANTE = "pablov"`;

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error interno del servidor");
    } else {
      res.send(result);
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
