const router = require("express").Router();

const auth = require("./authentication");
const torrent = require("./torrent");

router.use(auth);
router.use("/torrent", torrent);

module.exports = router;
