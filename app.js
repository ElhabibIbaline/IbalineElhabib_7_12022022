const express = require("express");
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/user", userRoutes);

module.exports = app;
