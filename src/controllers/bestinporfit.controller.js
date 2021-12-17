const express = require("express");

const Bestinporfit = require("../models/bestinporfit.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(Bestinporfit));

router.get("/", getAll(Bestinporfit));

module.exports = router;