const { Router } = require("express");
const express = require("express");

const User = require("../models/User");

const routes = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "registration failed" }); // sempre que ocorrer falha no registro.
  }
});