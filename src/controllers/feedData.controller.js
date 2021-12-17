const express = require('express');

const FeedData = require("../models/feedData.model");

const router = express.Router();

const { getAll, postOne } = require("../controllers/crud.controller");

router.post("/", postOne(FeedData));

router.get("/", getAll(FeedData));

module.exports = router;