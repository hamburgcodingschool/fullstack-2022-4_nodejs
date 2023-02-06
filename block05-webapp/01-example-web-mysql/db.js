const mysql = require('mysql2/promise')

const options = {
  host: "127.0.0.1",
  port: 3306,
  database: "nodejs_course",
  user: "root",
  password: ""
}

async function connection() {
  return await mysql.createConnection(options);
}

exports.connection = connection;