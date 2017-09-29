// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    create: function(tableInput, name, cb) {
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

    update: function(tableInput, change, condition, cb) {
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
    },

    delete: function(tableInput, condition, cb) {
        var queryString = "DELETE FROM " + tableInput;
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