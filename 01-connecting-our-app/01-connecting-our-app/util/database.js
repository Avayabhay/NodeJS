const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_schema", "root", "abhay", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node_schema",
//   password: "abhay",
// });

// module.exports = pool.promise();
