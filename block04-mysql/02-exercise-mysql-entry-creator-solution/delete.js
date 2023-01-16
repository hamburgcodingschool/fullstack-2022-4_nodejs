readlineSync = require("readline-sync");

(async function main () {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        database: "nodejs_course",
        user: "root",
        password: ""
    });

    const [rows, fields] = await connection.execute(`SELECT * FROM characters`);

    console.log(`${"id".padEnd(3)} ${"name".padEnd(20)} ${"race".padEnd(20)} ${"actor".padEnd(20)}`);
    console.log("-".repeat(63));

    for (let i = 0; i < rows.length; i++) {
        const character = rows[i];
        console.log(`${character.id.toString().padEnd(3)} ${character.name.padEnd(20)} ${character.race.padEnd(20)} ${character.actor.padEnd(20)}`);
    }

    console.log("\nWhich entry would you like to delete?");
    id = readlineSync.question("ID:");

    const deleteQueryString = `DELETE FROM characters WHERE id = ${id}`;
    await connection.execute(deleteQueryString);

    console.log("Entry deleted successfully!");

    connection.end();
})();