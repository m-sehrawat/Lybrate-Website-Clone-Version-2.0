const express = require("express");

const SearchProduct = require("../models/Searchproducts.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(SearchProduct));

router.get("/", getAll(SearchProduct));

module.exports = router;

