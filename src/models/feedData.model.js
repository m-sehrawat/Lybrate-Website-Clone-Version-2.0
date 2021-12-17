const { Schema, model } = require("mongoose");

const feedDataSchema = new Schema({}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model("feedData", feedDataSchema);