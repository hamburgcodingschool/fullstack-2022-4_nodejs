const express = require("express");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/calculate", function(req, res) {
  const number1 = req.query.number1 || 0;
  const number2 = req.query.number2 || 0;
  const result = Number(number1) + Number(number2);

  res.render("calculate", { number1, number2, result });
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});