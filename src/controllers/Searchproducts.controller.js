const express = require("express");

const SearchProduct = require("../models/Searchproducts.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const searchproduct = await SearchProduct.create(req.body);

        return res.status(201).send(searchproduct)

    } catch (e) {

        return res.status(500).json({ status: "failed", message: e.message })
    }

})

router.get("/", async (req, res) => {
    try {
        const searchproduct = await SearchProduct.find().lean().exec();

        return res.send(searchproduct);

    } catch (e) {

        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;

