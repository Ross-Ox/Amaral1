var express = require('express');
var router = express.Router();
var kmeans = require('../models/KMeans');


router.get('/', function(req, res, next) {

    kmeans.getAllData(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        console.log("Information ::: ", result.data);
        res.status(result.code).send(result.data);
    }, next)
})


module.exports = router;