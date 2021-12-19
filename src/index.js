const express = require('express');

// const addressController = require("./controllers/address.controller");

const app = express();

const userController = require("./controllers/user.controller");

const bestinporfitController = require("./controllers/bestinporfit.controller");
const newArrivalController = require("./controllers/newArrival.controller");
const moneySavingController = require("./controllers/moneySaving.controller");
const sexwellController = require("./controllers/sexwell.controller");
const immunityController = require("./controllers/immunity.controller");
const weightmanagementController = require("./controllers/weightmanagement.controller");
const vitaminsController = require("./controllers/vitamins.controller");
const searchproductController = require("./controllers/Searchproducts.controller");
const feedDataController = require("./controllers/feedData.controller");

app.use(express.json());

// app.set("view engine", "ejs")

// app.post("/register", register);
// app.post("/login", login);
// app.use("/address", addressController);

app.use("/users", userController);

app.use("/bestinporfits", bestinporfitController);
app.use("/newarrivals", newArrivalController);
app.use("/moneysavings", moneySavingController);
app.use("/sexwells", sexwellController);
app.use("/immunities", immunityController);
app.use("/weightmanagements", weightmanagementController);
app.use("/vitamins", vitaminsController);
app.use("/search", searchproductController);
app.use("/feedData", feedDataController);


module.exports = app;
