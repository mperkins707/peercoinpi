var express = require('express');
var router = express.Router();

var PeercoinAPI = require('../services/PeercoinAPI');

router.get('/', function(req, res, next) {
    let api = new PeercoinAPI();
    return res.json(api.getTransactions(), 200);
});

module.exports = router;
