const express = require("express");

const Weightmanagement = require("../models/weightmanagement.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(Weightmanagement));

router.get("/", getAll(Weightmanagement));

module.exports = router;