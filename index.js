const app = require("./config/express");
const logger = require("./config/logger");
const mongoose = require("./config/mongoose");
const router = require("./router");
const { port } = require("./config/vars");

mongoose.connect();

// Load Routes
app.use("/", router);

app.listen(port, () => {
  logger.info(`Server started on port ${port}.`);
});
