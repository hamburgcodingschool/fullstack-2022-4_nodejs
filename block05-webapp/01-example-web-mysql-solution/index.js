const _ = require("lodash");
const express = require("express");
const sass = require('node-sass-middleware')
const path = require('path');
const fs = require('fs');
const { connection } = require("./db");

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
app.use(express.urlencoded({extended: false}))

app.get("/", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(`SELECT * FROM characters`);

  res.render("home", { characters: results });
});

app.get("/race/:race", async (req, res) => {
  const { race } = req.params

  const connected = await connection();
  const [results, _] = await connected.execute(`SELECT * FROM characters WHERE race LIKE ?`, [race]);

  res.render("race", { characters: results, race });
});

app.get("/characters/new", async (req, res) => {
  const folderPath = path.join(__dirname, 'public', 'images');
  const files = await fs.promises.readdir(folderPath);

  res.render("new", {images: files});
});

app.post("/characters", async (req, res) => {
  const { image, name, race, actor } = req.body;

  const connected = await connection();
  const [results, _] = await connected.execute(
    `INSERT INTO characters (image, name, race, actor) VALUES (?,?,?,?)`,
    [image, name, race, actor]
  );

  res.redirect("/");
});

app.get("/characters/:id/delete", async (req, res) => {
  const { id } = req.params;

  const connected = await connection();
  const [results, _] = await connected.execute(
    `DELETE FROM characters WHERE id = ?`,
    [id]
  );

  res.redirect("/");
});

app.get("/characters/:id", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(
    `SELECT * FROM characters WHERE id = ?`,
    [req.params.id]
  );

  res.render("character", { character: results[0] });
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});