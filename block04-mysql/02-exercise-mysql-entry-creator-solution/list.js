const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: "nodejs_course",
    user: "root",
    password: ""
});

const queryString = `SELECT * FROM characters`;

connection.query(queryString, function(err, results, fields) {
    if (err) {
        console.log(err);
        console.log("There was an error...");
        return;
    }

    console.log(`${"id".padEnd(3)} ${"name".padEnd(20)} ${"race".padEnd(20)} ${"actor".padEnd(20)}`);
    console.log("-".repeat(63));

    for (let i = 0; i < results.length; i++) {
        const character = results[i];
        console.log(`${character.id.toString().padEnd(3)} ${character.name.padEnd(20)} ${character.race.padEnd(20)} ${character.actor.padEnd(20)}`);
    }

    connection.end();
});
