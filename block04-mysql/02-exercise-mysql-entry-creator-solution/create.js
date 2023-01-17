readlineSync = require("readline-sync");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: "nodejs_course",
    user: "root",
    password: ""
});

console.log("Adding a new character to the database...");

name = readlineSync.question("Name:");
race = readlineSync.question("Race:");
actor = readlineSync.question("Actor:");

const queryString = `INSERT INTO characters (name, race, actor) VALUES (?,?,?)`;

connection.prepare(queryString, function(err, statement) {
  statement.execute([name, race, actor], (err, rows) => {
    if (err) {
      console.log(err);
      console.log("There was an error...");
      connection.end();
      return;
  }

  console.log("Character added successfully!");
  connection.end();
  });
});