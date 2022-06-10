const express = require("express");
const userRoutes = require("./routes/user.routes");
const postRoutes = require('./routes/post.routes');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/user", userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;
