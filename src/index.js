const express = require("express"); // definindo libs
const bodyParser = require("body-parser");

const app = express(); // criando aplicação

app.use(bodyParser.json()); // indicando o que vai usar e as funções
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000); // qual porta quero ouvir
