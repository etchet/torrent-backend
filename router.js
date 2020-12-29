const router = require("express").Router();

// API Routes
router.use("/", require("./routes/api/routes"));

// Dashboard Routes
router.use("/dashboard", require("./routes/dashboard/routes"));

module.exports = router;
