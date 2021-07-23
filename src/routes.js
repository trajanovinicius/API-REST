const express = require("express");
const routes = express.Router();

const TodoController = require("../src/controllers/TodoController");

routes.post("/todo", TodoController.store);

routes.get("/todo-list", TodoController.index);

routes.put("/todo-update/:id", TodoController.update);

module.exports = routes;
