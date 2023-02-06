const _ = require("lodash");
const express = require("express");
const sass = require('node-sass-middleware')
const path = require('path');
const fs = require('fs');
const { connection } = require('./db');

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
  const connected = await connection()

  const [characters, _] = await connected.query("SELECT * FROM characters")
  
  res.render("home", { characters });
});

app.get('/create_character', async (req, res) => {
  const folderPath = path.join(__dirname, 'public', 'images')
  const files = await fs.promises.readdir(folderPath);

  res.render("create_character", { images: files })
})

app.post('/characters', async (req, res) => {
  const { name, image, race, actor } = req.body;

  const connected = await connection()
  await connected.execute(
    'INSERT INTO characters (image, name, race, actor) VALUES (?,?,?,?)', 
    [image, name, race, actor]
  )

  res.redirect("/")
})

app.get("/characters/:id/delete", async (req, res) => {
  const connected = await connection()
  await connected.execute(
    `DELETE FROM characters WHERE id = ?`,
    [req.params.id]
  )

  res.redirect("/")
})

app.get("/characters/:id", async (req, res) => {
  const connected = await connection()
  const [results, _] = await connected.execute(
    `SELECT * FROM characters WHERE id = ?`,
    [req.params.id]
  )

  if (results.length === 0) {
    res.status(404).render("404")
    return
  }

  res.render("character", { character: results[0] })
})

app.get("*", function(req, res) {
  res.status(404);
  res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});