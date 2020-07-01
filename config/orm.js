//import mysql connection
const connection = require("./connection.js");

//helper function to loop through and create array of question mark
function printQuestionMarks(num) {
    let array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }

  return array.toString();
}
// helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let array = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        array.push(key + "=" + ob[key]);
    }

  //translate array of strings to a single comma-separated string
  return arr.toString();
}

// object for SQL statment functions
let orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
         if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// export the orm object for the model (burger.js)
module.exports = orm;