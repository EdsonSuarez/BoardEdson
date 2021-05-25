// Importaciones
const express = require("express");
const mongoose = require("mongoose");
const User = require("./routes/user");

// La aplicacion
const app = express();
app.use(express.json());
app.use("/api/user/", User);

// puerto app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Localhost:", port));

mongoose
  .connect("mongodb://localhost:27017/boardEdson", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB: Inicializado"))
  .catch((err) => console.log("MongoDB Error: ", err));
