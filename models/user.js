const mongoose = require("mongoose");

const schema = mongoose.Schema({}, { timestamps: true });

const model = mongoose.model("user", schema);

module.exports = model;
