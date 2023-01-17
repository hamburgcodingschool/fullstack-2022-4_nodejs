const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: "nodejs_course",
    user: "root",
    password: ""
});

exports.connection = connection;