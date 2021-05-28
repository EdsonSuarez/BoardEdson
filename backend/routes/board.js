const express = require("express");
const router = express.Router();
const Board = require("../models/board");
const User = require("../models/user");
const Auth = require("../middleware/auth");

// Guardar actividad
router.post("/saveTask", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("El usuario no esta autenticado");
  const board = new Board({
    userId: user._id,
    name: req.body.name,
    description: req.body.description,
    status: "to-do",
  });
  const result = await board.save();
  return res.status(200).send({ result });
});

// Consultar todas las actividades
router.get("/listTask", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("La porsona no existe en DB");
  const board = await Board.find({ userId: req.user._id });
  return res.status(200).send({ board });
});

// Editar actividad
router.put("/updateTask", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("La persona no existe en DB");
  const board = await Board.findByIdAndUpdate(req.body._id, {
    userId: user._id,
    name: req.body.name,
    status: req.body.status,
    description: req.body.description,
  });
  if (!board) return res.status(401).send("no se pudo editar la actividad");
  return res.status(200).send({ board });
});

// Eliminar actividad
router.delete("/:_id", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("La persona no existe en DB");
  const board = await Board.findByIdAndDelete(req.params._id);
  if (!board) return res.status(401).send("no se encuentra la actividad a eliminar");
  return res.status(200).send({ mensaje: "actividad eliminada" });
});

module.exports = router;
