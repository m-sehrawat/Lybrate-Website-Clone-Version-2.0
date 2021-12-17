const express = require("express");

const NewArrival = require("../models/newArrival.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(NewArrival));

router.get("/", getAll(NewArrival));

module.exports = router;