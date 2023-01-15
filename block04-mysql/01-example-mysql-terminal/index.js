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

    console.log(results);

    connection.end();
});
