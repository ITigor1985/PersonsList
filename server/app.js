const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const personsRouter = require("./routes/api/persons");

const app = express(); // create Webserver

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/persons", personsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
