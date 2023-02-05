const express = require("express");
const { connection } = require("./db");

const app = express();
const port = 3000;

app.use(express.static("public"))
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  const connected = await connection();
  const [results, _] = await connected.execute(`SELECT * FROM characters`);

  res.render("home", { characters: results });
});

app.listen(port, function() {
  console.log(`Listening on ${port}...`);
});