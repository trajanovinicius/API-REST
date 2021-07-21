const express = require("express");
const database = require("../src/database/index");
const requireDir = require("require-dir");

const app = express();

database.connect();
requireDir("../src/models");

const PORT = 3333;

app.use(express.json());

app.use("/api/v1", require("../src/routes"));

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
