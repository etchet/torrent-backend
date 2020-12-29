require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
};
