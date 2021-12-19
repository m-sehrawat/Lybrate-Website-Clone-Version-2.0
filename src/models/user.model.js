const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, {
    versionKey: false,
    timestamps: true,
});


module.exports = model("user", userSchema);

