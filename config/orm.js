var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var query = "SELECT * FROM burgers;";
        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(burger_name, cb) {
        var query = `INSERT INTO burgers (burger_name)
            VALUES (?)`

        connection.query(query, [burger_name], function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }, updateOne: function(id, cb) {
        var query = `UPDATE burgers 
            SET devoured = true
            WHERE id = ${id};`

        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;