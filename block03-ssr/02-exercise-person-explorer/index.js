const express = require("express");
const people = require("./people.json");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.render("index", { people });
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});