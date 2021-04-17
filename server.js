var express = require("express");
var app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/whiteboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});
require("./controllers/quizzes-controller")(app);
require("./controllers/question-controller")(app);
app.listen(process.env.PORT || 3001);
