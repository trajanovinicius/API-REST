const mongoose = require("mongoose");
const { update } = require("../models/Todo");

const Todo = mongoose.model("Todo");

module.exports = {
  async index(req, res) {
    const data = await Todo.find();

    return res.json({
      Todo: data,
    });
  },

  async store(req, res) {
    const { tarefa, dataInicio, finalizado } = req.body;

    const todo = await Todo.create({ tarefa, dataInicio, finalizado });

    res.status(200).json({
      message: "Tarefa cadastrada com sucesso!",
      todo,
    });
  },

  async update(req, res) {
    const { id } = req.params.id;

    const todo = await Todo.update({ _id: id }, { finalizado: false });

    res.status(200).json({
      message: "Tarefa finalizada com sucesso",
      todo,
    });
  },
};
