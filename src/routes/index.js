
const express = require('express');
const router = express.Router();
let dados = require('../data/data');

router.get('/', function (req, res, next) {
    res.status(200).send({
        dados
    });
});

module.exports = router;
