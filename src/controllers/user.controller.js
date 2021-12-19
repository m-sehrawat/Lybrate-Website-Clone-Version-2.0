
const express = require('express');

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model");

const { postOne, getAll } = require("../controllers/crud.controller");

const router = express.Router();

router.post("/",

    body("email").isEmail(),

    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        try {
            const user = await User.create(req.body);

            return res.status(201).json(user);

        } catch (e) {

            return res.status(500).json({ message: e.message, status: "failed" })
        }
    });

router.get("/", getAll(User));

router.post("/check", async (req, res) => {
    try {
        const items = await User.find({ $and: [{ email: req.body.email }, { password: req.body.password }] }).lean().exec();

        return res.status(201).send(items);

    } catch (e) {

        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;


