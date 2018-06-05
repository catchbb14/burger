var connection = require("./connection");

var orm = {
    selectAll: function(cb) {
        var query = "SELECT * FROM burgers;";
        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(vals, cb) {
        var query = `INSERT INTO burgers (burger_name, devoured)
            VALUES ('${vals[0]}, ${vals[1]})`

        console.log(query);

        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }, updateOne: function(id, cb) {
        var query = `UPDATE burgers 
            SET {devoured: true}
            WHERE id = ${id};`

        console.log(query);

        connection.query(query, function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;