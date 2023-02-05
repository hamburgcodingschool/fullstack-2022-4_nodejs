const _ = require("lodash");
const express = require("express");
const path = require('path');
const fs = require('fs');
const { connection } = require("./db");

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(express.json());

app.get("/characters", async (req, res) => {
  const connected = await connection();
  const [characters, _] = await connected.execute(`SELECT * FROM characters`);

  characters.forEach((character) => {
    character.image = `http://localhost:${port}/images/${character.image}`;
  });

  res.status(200).json({ characters })
});

app.post("/characters", async (req, res) => {
  const { image, name, race, actor } = req.body;

  const connected = await connection();
  const [results, _] = await connected.execute(
    `INSERT INTO characters (image, name, race, actor) VALUES (?,?,?,?)`,
    [image, name, race, actor]
  );

  res.status(200).json({ results })
});

app.get("/characters/:id", async (req, res) => {
  const { id } = req.params;

  const connected = await connection();
  const [characters, _] = await connected.execute(
    `SELECT * FROM characters WHERE id = ?`,
    [id]
  );

  if (characters.length === 0) {
    res.status(404).json({ error: 'Character not found' });
    return;
  }

  const character = characters[0];
  character.image = `http://localhost:${port}/images/${character.image}`;

  res.status(200).json({ character })
});

app.put("/characters/:id", async (req, res) => {
  const id = req.params.id
  const { image, name, race, actor } = req.body;

  const folderPath = path.join(__dirname, 'public', 'images');
  const files = await fs.promises.readdir(folderPath);

  const imageExists = _.find(files, (file) => file === image);
  if (!imageExists) {
    res.status(400).json({ error: 'Invalid image' });
    return;
  }

  const connected = await connection();
  const [results, ___] = await connected.execute(
    `UPDATE characters SET image = ?, name = ?, race = ? , actor = ? WHERE id = ?`,
    [image, name, race, actor, id]
  );

  res.status(200).json({ results })
});

app.delete("/characters/:id", async (req, res) => {
  const { id } = req.params;

  const connected = await connection();
  const [results, _] = await connected.execute(
    `DELETE FROM characters WHERE id = ?`,
    [id]
  );

  res.status(200).json({ results })
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});