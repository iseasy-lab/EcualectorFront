const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');
const db = require('./db');

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); 


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

app.post("/registrarEstudiante", (req, res) => {
  const usuarioTutor = req.body.usuarioTutor;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const insertQuery =
    "INSERT INTO ESTUDIANTE (USER_TUTOR, NOMBRE_ESTUDIANTE, APELLIDO_ESTUDIANTE, PASSWORD_ESTUDIANTE_ANIMAL, PASSWORD_ESTUDIANTE_COLOR, PASSWORD_ESTUDIANTE_ACCION) VALUES (?, ?, ?, ?, ?, ?)";
  const selectQuery = "SELECT * FROM tutor WHERE USER_TUTOR = ?";

  db.query(selectQuery, [usuarioTutor], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      db.query(
        insertQuery,
        [usuarioTutor, nombre, apellido, animal, color, accion],
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

app.get("/obtenerEstudiante", (req, res) => {
  const usuario = req.query.usuario;
    const selectQuery = "SELECT nombre_estudiante FROM estudiante WHERE user_estudiante = ?";

  db.query(selectQuery, [usuario], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
