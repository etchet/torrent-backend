const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");
const { logs } = require("../config/vars");

const app = express();

// Request Logging
app.use(morgan(logs));

// Parse JSON Request and attach to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GZip Compression
app.use(compress());

// Allow PUT and DELETE requests in places where they are not supported
app.use(methodOverride());

// Secure applications by settings various HTTP Headers
app.use(helmet());

// Allow CORS Requests
app.use(cors());

module.exports = app;
