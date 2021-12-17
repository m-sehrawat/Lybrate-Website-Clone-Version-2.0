const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    address: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("address", addressSchema);