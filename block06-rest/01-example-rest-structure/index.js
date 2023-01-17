const express = require("express");
const _ = require("lodash");

const app = express();
const port = 3000;

const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
  },
  {
    id: 2,
    name: "Darth Vader",
  },
  {
    id: 3,
    name: "Han Solo",
  },
  {
    id: 4,
    name: "Leia Organa",
  },
  {
    id: 5,
    name: "Obi-Wan Kenobi",
  }
]

// CREATE
app.post("/character", function(req, res) {
  // TODO: create character
  res.status(200);
});

// READ
app.get("/character", function(req, res) {
  res.status(200);
  res.json(characters);
});

app.get("/character/:id", function(req, res) {
  const character = _.find(characters, { id: parseInt(req.params.id) });
  if(character === undefined) {
    res.status(404);
    res.json({ error: "Character not found" });
    return;
  }
  res.status(200);
  res.json(character)
});

// UPDATE
app.put("/character/:id", function(req, res) {
  // TODO: change character
  res.status(200);
});

// DELETE
app.delete("/character/:id", function(req, res) {
  // TODO: delete character
  res.status(200);
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});