const express = require("express");

const Vitamins = require("../models/vitamins.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(Vitamins));

router.get("/", getAll(Vitamins));

module.exports = router;