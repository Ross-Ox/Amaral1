var express = require('express');
var router = express.Router();
var ClassesDaos = require("../models/quizknnDaos");


router.get('/', function(req, res, next) {

    ClassesDaos.getAllClasses(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
})


module.exports = router;