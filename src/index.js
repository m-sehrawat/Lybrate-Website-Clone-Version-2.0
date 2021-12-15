const express = require('express');

const app = express();
const { register, login } = require("./controllers/user.controller");

app.use(express.json());


app.post("/register", register);
app.post("/login", login);



module.exports = app;