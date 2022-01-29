const express = require('express');


const app = express();

app.use(express.json());

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



const port = process.env.PORT || 3000

const connect = require("./configs/db");

app.listen(port, async () => {
    await connect();
    console.log(`Listening to port ${port}`);
});

