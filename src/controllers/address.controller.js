const express = require("express");
const { body, validationResult } = require("express-validator");

const Address = require("../models/address.model");

const router = express.Router();

router.post(
  "/",
  body("name")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "Name has to be at least 3 characters and maximum 20 characters"
    ),

  body("mobile")
    .isLength({ min: 10, max: 10 })
    .withMessage(
      "mobile number should be 10 digits"
    ),
  body("address")
    .isLength({ min: 4, max: 20 })
    .withMessage(
      "address has to be at least 3 characters and maximum 20 characterss"
    ),

  body("city")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "city has to be at least 3 characters and maximum 20 characterss"
    ),
  body("pincode")
    .isLength({ min: 6, max: 6 })
    .withMessage(
      "pincode should be 6 digits"
    ),


  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors = errors.array().map(({ msg, param, location }) => {
        return {
          [param]: msg,
        };
      });
      return res.status(400).json({ errors: newErrors });
    }



    try {
      const address = await Address.create(req.body);

      return res.status(201).json({ address });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async function (req, res) {
  return res.render("address")
})

module.exports = router;