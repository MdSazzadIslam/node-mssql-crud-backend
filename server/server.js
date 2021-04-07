"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const categoryRoute = require("./routes/categoryRoute");
 
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // when you test through POSTMAN please send data as [x-www-form-urlencoded]

//For checking purpose whether API is respoding or not
app.get("/", (req, res) => {
  res.send("API is runninmg");
});

//Calling Route
app.use("/api/category", categoryRoute);

// error handlers

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
