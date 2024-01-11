const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/registrar", (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const rol = req.body.opcionSeleccionada;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const query = "INSERT INTO TUTOR (NOMBRE_TUTOR, APELLIDO_TUTOR, PASSWORD_TUTOR_ANIMAL, PASSWORD_TUTOR_COLOR, PASSWORD_TUTOR_ACCION) VALUES (?, ?, ?, ?, ?)";
  const query2 = "SELECT * FROM tutor WHERE USER_TUTOR = ?";

  // db.query(query2, [USER_TUTOR], (err, result) => {
  //   if (err) {
  //     throw err;
  //   }
  //   if (result.length > 0) {
  //     res.send({ message: "User already exists" });
  //   }
  //   if (result.length === 0) {
      // const hashedPassword = bcrypt.hashSync(password, 10);
      db.query(query, [nombre, apellido, animal, color, accion], (err, result) => {
        if (err) {
          console.log(err);
        }else{
        res.send({ message: "User created" });
      }
      })
  //   }
  // });
});


app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  const animal = req.body.animal;
  const color = req.body.color;
  const accion = req.body.accion;

  const query = "SELECT * FROM tutor WHERE USER_TUTOR = ? AND PASSWORD_TUTOR_ANIMAL = ? AND PASSWORD_TUTOR_COLOR = ? AND PASSWORD_TUTOR_ACCION = ?";
  db.query(query, [usuario, animal, color, accion], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
