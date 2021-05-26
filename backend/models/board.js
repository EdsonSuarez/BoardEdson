const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// creamos el esquema de user (coleccion)
const boardSchema = new mongoose.Schema({
  userId: String,
  name: String,
  description: String,
  status: String,
  imageUrl: String,
  date: {type: Date, default: Date.now}
});


// colection board
const Board = mongoose.model("board", boardSchema);

// exportamos el modulo
module.exports = Board;