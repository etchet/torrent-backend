const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    success(res, {});
  } catch (e) {
    error(res, e);
  }
});

module.exports = router;
