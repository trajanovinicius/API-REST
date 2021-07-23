const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  tarefa: String, // String is shorthand for {type: String}
  dataInicio: String,
  finalizado: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
