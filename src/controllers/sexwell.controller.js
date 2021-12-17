const express = require("express");

const Sexwell = require("../models/sexwell.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(Sexwell));

router.get("/", getAll(Sexwell));

module.exports = router;