const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

schema.plugin(uniqueValidator);

module.exports = mongoose.model("user", schema);
