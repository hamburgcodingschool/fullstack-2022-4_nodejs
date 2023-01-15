const _ = require("lodash");
const express = require("express");
const sass = require('node-sass-middleware')
const path = require('path');
const people = require("./people.json");


const app = express();

const port = 3000;

app.set("view engine", "pug");
app.use(
  sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
    debug: true
  })
);
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.render("home", { people });
});

app.get("/person/:id", function(req, res) {
  const person = _.find(people, { id: parseInt(req.params.id) });
  res.render("person", { person });
});

app.get("*", function(req, res) {
  res.status(404);
  res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});