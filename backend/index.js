const express = require("express");
const mongoose = require("mongoose");
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Board = require("./routes/board");

// Rutas de la aplicación
const app = express();
app.use(express.json());
app.use("/api/user/", User);
app.use("/api/auth/", Auth);
app.use("/api/board/", Board);

// Puerto app
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Localhost:", port));


// Conexion DB
mongoose
  .connect("mongodb://localhost:27017/boardEdson", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB: Inicializado"))
  .catch((err) => console.log("MongoDB Error: ", err));
