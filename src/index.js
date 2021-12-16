const express = require('express');

const addressController = require("./controllers/address.controller");

const app = express();
const { register, login } = require("./controllers/user.controller");

app.use(express.json());

app.set("view engine", "ejs")

app.post("/register", register);
app.post("/login", login);
app.use("/address", addressController);


module.exports = app;
/*
const express = require("express");

const addressController = require("./controllers/address.controller");


const app = express();
app.use(express.json());

app.set("view engine", "ejs")

app.use("/users", addressController);

module.exports = app;
*/