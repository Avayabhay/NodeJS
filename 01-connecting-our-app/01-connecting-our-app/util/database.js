const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_schema",
  password: "abhay",
});

module.exports = pool.promise();
