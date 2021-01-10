const router = require("express").Router();
const { success, error } = require("../../utility/jsonio");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const config = require("../../config/vars");

const requireUser = require("../../middlewares/requireUser");

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user == null) {
      throw new Error("Username was incorrect");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Your password was incorrect");
    }
    const token = jwt.sign(
      {
        user: user._id,
      },
      config.jwt.secret
    );
    success(res, {
      token,
    });
  } catch (e) {
    error(res, e);
  }
});

// Register Route
router.post("/register", requireUser, async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      ...req.body,
      password,
    });

    await user.save();

    success(res, "User was saved!");
  } catch (e) {
    error(res, e);
  }
});

module.exports = router;
