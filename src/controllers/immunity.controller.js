const express = require("express");

const Immunity = require("../models/immunity.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(Immunity));

router.get("/", getAll(Immunity));


module.exports = router;