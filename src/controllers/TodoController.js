const mongoose = require("mongoose");

const Todo = mongoose.model("Todo");

module.exports = {
  async index() {
    const data = await Todo.all();

    return res.json({
      todos: data,
    });
  },

  async store(req, res) {
    const data = req.body;

    await Todo.create(data);

    res.status(200).json({
      message: "Tarefa cadastrada com sucesso!",
      data,
    });
  },
};
