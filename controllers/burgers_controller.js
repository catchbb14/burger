var express = require('express');

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        }
        
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({id: result.insertId });
    })
});

router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if( result.changedRows === 0 ) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;