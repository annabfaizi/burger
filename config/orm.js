// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    createOne: function(tableInput, name, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) ";
        queryString += "VALUES ('";
        queryString += name.toString();
        queryString += "', false);";

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(tableInput, change, condition, cb) {
        var queryString = "UPDATE " + tableInput;
        queryString += " SET ";
        queryString += change;
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
}

module.exports = orm;