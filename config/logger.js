const winston = require("winston");

const { env } = require("./vars");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "error.log", level: "error" }), new winston.transports.File({ filename: "combined.log" })],
});

if (env !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
