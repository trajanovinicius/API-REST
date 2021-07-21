const express = require("express");
const database = require("../src/database/index");

const app = express();

database.connect();

const PORT = 3333;

app.use(express.json());

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
