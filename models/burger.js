var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(vals, id, cb) {
        orm.updateOne(vals, id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;