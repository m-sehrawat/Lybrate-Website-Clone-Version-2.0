const express = require("express");

const MoneySaving = require("../models/moneySaving.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(MoneySaving));

router.get("/", getAll(MoneySaving));

module.exports = router;