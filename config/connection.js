
// mysql connection
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

// make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection for orm to use
module.exports = connection;