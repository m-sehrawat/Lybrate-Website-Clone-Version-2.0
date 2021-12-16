const express = require('express');

const addressController = require("./controllers/address.controller");

const app = express();
const { register, login } = require("./controllers/user.controller");

const bestinporfitController = require("./controllers/bestinporfit.controller");
const newArrivalController = require("./controllers/newArrival.controller");
const moneySavingController = require("./controllers/moneySaving.controller");
const sexwellController = require("./controllers/sexwell.controller");
const immunityController = require("./controllers/immunity.controller");
const weightmanagementController = require("./controllers/weightmanagement.controller");


app.use(express.json());

app.set("view engine", "ejs")

app.post("/register", register);
app.post("/login", login);
app.use("/address", addressController);

app.use("/bestinporfit", bestinporfitController);
app.use("/newArrival", newArrivalController);
app.use("/moneySaving", moneySavingController);
app.use("/sexwell", sexwellController);
app.use("/immunity", immunityController);
app.use("/weightmanagement", weightmanagementController);



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