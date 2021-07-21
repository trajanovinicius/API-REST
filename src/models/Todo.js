const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  tarefa: {
    type: "String",
    require: true,
  },
  dataInicio: {
    type: "String",
    require: true,
  },
  finalizado: {
    type: "Boolean",
    require: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
