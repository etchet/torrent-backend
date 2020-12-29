const mongoose = require("mongoose");
const logger = require("./logger");
const { mongo, env } = require("./vars");

mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on("error", (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

if (env === "development") {
  mongoose.set("debug", true);
}

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => logger.info("MongoDB Connection was successfully established."));
  return mongoose.connection;
};
