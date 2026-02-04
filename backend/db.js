const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Acer@123",
  database: "conference_db",
});

db.connect((err) => {
  if (err) {
    console.log("DB error");
  } else {
    console.log("MySQL connected");
  }
});

module.exports = db;
