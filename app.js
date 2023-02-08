const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();

// Swagger Configuration
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MIDDLEWARE
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// cookies and file middleware
app.use(cookieParser());
app.use(fileUpload());

// Morgan middleware
app.use(morgan("tiny"));

// import all routes here
const home = require("./routes/home");
const user = require("./routes/user");

// routes middleware
app.use("/api/v1", home);
app.use("/api/v1",user);

// export app.js

module.exports = app;
