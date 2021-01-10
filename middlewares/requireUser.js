const { success, error } = require("../utility/jsonio");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/vars");

module.exports = async (req, res, next) => {
  try {
    const authenticationToken = req.headers.authorization.split(" ")[1];
    const token = jwt.verify(authenticationToken, config.jwt.secret);
    const user = await User.findOne({ _id: token.user });

    req.user = user;
    next();
  } catch (e) {
    error(res, new Error("User not logged in!"));
  }
};
