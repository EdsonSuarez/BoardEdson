const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// Esquema de la colección Board
const boardSchema = new mongoose.Schema({
  userId: String,
  name: String,
  description: String,
  status: String,
  imageUrl: String,
  date: {type: Date, default: Date.now}
});

const Board = mongoose.model("board", boardSchema);
module.exports = Board;