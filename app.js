const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Route error handle 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found!" });
});

//server handle
app.use((req, res, next, err) => {
  res.status(500).json({ message: "sever error" });
});
module.exports = app;
